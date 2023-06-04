import { IncomingWebhook } from '@slack/webhook';
import { Surfaces, Blocks, Md } from 'slack-block-builder';
import { SLACK_WEBHOOK_URL } from '$env/static/private';

/**
 * @typedef {Object} Contact
 * @property {string | null | undefined} name
 * @property {string | null | undefined} email
 * @property {string | null | undefined} app
 * @property {string | null | undefined} category
 * @property {string | null | undefined} message
 * @property {boolean} terms
 */

export type Feedback = Partial<{
	name: string | null;
	email: string | null;
	app: string | null;
	category: string | null;
	message: string | null;
	terms: boolean | null;
}>;

function buildContactSlackBlock(feedback: Feedback) {
	return JSON.parse(
		Surfaces.Message()
			.blocks(
				Blocks.Section({ text: Md.bold('New message has arrived') }),
				Blocks.Section({
					text: `${Md.bold('Date')}\n${new Date().toLocaleString('en-US', {
						timeZone: 'Asia/Seoul',
					})}`,
				}),
				Blocks.Section().fields(
					`${Md.bold('Name')}\n${feedback?.name ? feedback.name : 'No name'}`,
					`${Md.bold('Email')}\n${
						feedback?.email ? feedback.email : 'No email'
					}`,
				),
				Blocks.Section().fields(
					`${Md.bold('App')}\n${feedback?.app ? feedback.app : 'No app'}`,
					`${Md.bold('Category')}\n${
						feedback?.category ? feedback.category : 'No category'
					}`,
				),
				Blocks.Section({
					text: `${Md.bold('Message')}\n${
						feedback?.message ? feedback.message : 'No message'
					}`,
				}),
			)
			.buildToJSON(),
	);
}

export async function sendContactToSlack(feedback: Feedback) {
	if (!SLACK_WEBHOOK_URL) {
		throw Error('Empty SLACK_WEBHOOK_URL environment variable');
	}
	const webhook = new IncomingWebhook(SLACK_WEBHOOK_URL);
	await webhook.send(buildContactSlackBlock(feedback));
}

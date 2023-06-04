import * as Sentry from '@sentry/sveltekit';
import { fail, redirect } from '@sveltejs/kit';
import { sendContactToSlack } from '$lib/api';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const name = data.get('name')?.toString();
		const email = data.get('email')?.toString();
		const app = data.get('app')?.toString();
		const category = data.get('category')?.toString();
		const message = data.get('message')?.toString();
		const terms = data.get('terms')?.toString();
		if (terms === 'off') {
			return fail(400, { termsNotAccepted: true });
		}
		try {
			await sendContactToSlack({
				name,
				email,
				app,
				category,
				message,
				terms: terms === 'on',
			});
		} catch (e) {
			const error = e as Error;
			Sentry.captureException(error);
			return fail(400, { internalError: true, error: error.message });
		}
		throw redirect(302, '/contact/success');
	},
} satisfies Actions;

import { reflectionPrivacy, moliPrivacy } from '$lib/data/privacy';
import { reflectionTerms, moliTerms } from '$lib/data/terms';
import { reflectionDetail, moliDetail } from '$lib/data/detail';

export const applications = {
	moli: {
		key: 'moli',
		name: 'MoLi',
		description: 'Motivate. Achieve. Track.',
		platform: ['ios', 'android'],
		iconUrl:
			'https://d2rl869h53lu99.cloudfront.net/images/applications/moli/icon.png',
		privacy: moliPrivacy,
		terms: moliTerms,
		detail: moliDetail,
	},
	reflection: {
		key: 'reflection',
		name: 'Reflection',
		platform: ['ios', 'android'],
		description: 'Note Reflections',
		iconUrl:
			'https://d2rl869h53lu99.cloudfront.net/images/applications/reflection/icon.png',
		privacy: reflectionPrivacy,
		terms: reflectionTerms,
		detail: reflectionDetail,
	},
};

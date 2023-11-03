import { reflectionPrivacy, moliPrivacy } from '$lib/data/privacy';
import { reflectionTerms, moliTerms } from '$lib/data/terms';
import { reflectionDetail, moliDetail } from '$lib/data/detail';

const getStoreUrl = (props: { identifer: string; appId: string }) => ({
	playStore: `https://play.google.com/store/apps/details?id=${props.identifer}`,
	appStore: `https://apps.apple.com/app/${props.appId}`,
});

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
		storeUrl: getStoreUrl({
			identifer: 'com.crosswand.motivelist',
			appId: 'id1636091291',
		}),
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
		storeUrl: getStoreUrl({
			identifer: 'com.crosswand.reflection',
			appId: 'id6443961419',
		}),
	},
};

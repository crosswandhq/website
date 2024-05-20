import {
	reflectionPrivacy,
	moliPrivacy,
	prayerPrivacy,
	intimePrivacy,
} from '$lib/data/privacy';
import {
	reflectionTerms,
	moliTerms,
	prayerTerms,
	intimeTerms,
} from '$lib/data/terms';
import {
	reflectionDetail,
	moliDetail,
	prayerDetail,
	intimeDetail,
} from '$lib/data/detail';
import MoliIcon from '$lib/assets/images/applications/moli/icon.png';
import ReflectionIcon from '$lib/assets/images/applications/reflection/icon.png';
import PrayerIcon from '$lib/assets/images/applications/prayer/icon.png';
import IntimeIcon from '$lib/assets/images/applications/intime/icon.png';

const getStoreUrl = (props: { identifer?: string; appId: string }) => ({
	playStore: props.identifer
		? `https://play.google.com/store/apps/details?id=${props.identifer}`
		: null,
	appStore: `https://apps.apple.com/app/${props.appId}`,
});

export const applications = {
	moli: {
		key: 'moli',
		name: 'MoLi',
		description: 'Motivate. Achieve. Track.',
		platform: ['ios', 'android'],
		iconUrl: MoliIcon,
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
		iconUrl: ReflectionIcon,
		privacy: reflectionPrivacy,
		terms: reflectionTerms,
		detail: reflectionDetail,
		storeUrl: getStoreUrl({
			identifer: 'com.crosswand.reflection',
			appId: 'id6443961419',
		}),
	},
	prayer: {
		key: 'prayer',
		name: 'Prayer',
		platform: ['ios', 'android'],
		description: 'United in Prayer',
		iconUrl: PrayerIcon,
		privacy: prayerPrivacy,
		terms: prayerTerms,
		detail: prayerDetail,
		storeUrl: getStoreUrl({
			identifer: 'com.crosswand.prayer',
			appId: 'id6471775802',
		}),
	},
	intime: {
		key: 'intime',
		name: 'In Time',
		platform: ['xros'],
		description: 'Conquer your time',
		iconUrl: IntimeIcon,
		privacy: intimePrivacy,
		terms: intimeTerms,
		detail: intimeDetail,
		storeUrl: getStoreUrl({
			appId: 'id6502642828',
		}),
	},
};

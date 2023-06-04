import { applications } from '$lib/data/data';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	if (!['privacy', 'terms'].includes(params.legal)) {
		throw error(404);
	}
	return {
		heading: params.legal === 'privacy' ? 'Privacy Policy' : 'Terms of Use',
		/** @type {string | null} */
		privacy:
			applications[params.app as keyof typeof applications][
				params.legal as 'privacy' | 'terms'
			],
	};
}) satisfies PageLoad;

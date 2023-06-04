import { applications } from '$lib/data/data';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	if (!(params.app in applications)) {
		throw error(404);
	}
	const app = params.app;
	const application = applications[app as keyof typeof applications];
	return {
		application,
	};
}) satisfies PageLoad;

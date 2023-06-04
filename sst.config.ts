import type { SSTConfig } from 'sst';
import { SvelteKitSite } from 'sst/constructs';

export default {
	config(_input) {
		return {
			name: 'website',
			region: 'us-east-1',
		};
	},
	stacks(app) {
		app.stack(function Site({ stack }) {
			const site = new SvelteKitSite(stack, 'site', {
				customDomain: {
					domainName: 'crosswand.com',
					domainAlias: 'www.crosswand.com',
					hostedZone: 'crosswand.com',
				},
			});
			stack.addOutputs({
				url: site.url,
			});
		});
	},
} satisfies SSTConfig;

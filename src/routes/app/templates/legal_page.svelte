<script lang="ts">
	import type { applications } from '$lib/data/data';

	export let heading: string;
	export let data: (typeof applications)['reflection']['privacy'];
</script>

<section class="py-10 py-xl-15 pb-xl-10">
	<div class="container mt-10">
		<h1>{heading}</h1>
	</div>
</section>
{#if data}
	<section class="py-5 py-xl-15 border-top">
		<div class="container">
			<div class="row justify-content-between">
				<div class="col-md-12 mb-1">
					<p class="text-secondary">
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html data.split('\n').join('<br />')}
					</p>
				</div>
			</div>
		</div>
	</section>
{/if}

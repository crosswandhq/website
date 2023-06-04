<script>
	/** @type {import('./$types').PageData} */
	export let data;

	$: heading = data.heading;
	$: privacy = data.privacy;
</script>

<section class="py-10 py-xl-15 pb-xl-10">
	<div class="container mt-10">
		<h1>{heading}</h1>
	</div>
</section>
{#if privacy}
	<section class="py-5 py-xl-15 border-top">
		<div class="container">
			<div class="row justify-content-between">
				<div class="col-md-12 mb-1">
					<p class="text-secondary">
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html privacy.split('\n').join('<br />')}
					</p>
				</div>
			</div>
		</div>
	</section>
{/if}

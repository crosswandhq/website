<script>
	import { base } from '$app/paths';
	import { applications } from '$lib/data/data';
</script>

<section class="py-15 py-xl-20 bg-black">
	<div class="container mt-5 mt-xl-10">
		<div class="row mb-5 g-3 g-xl-5 align-items-end">
			<h1 class="display-1 text-white">Our Applications</h1>
		</div>
		<div class="mb-5">
			<button
				class="btn btn-filter rounded-pill current"
				data-filter="*"
				data-target="#grid1">All</button
			>
			<button
				class="btn btn-filter rounded-pill"
				data-filter=".xros"
				data-target="#grid1">visionOS</button
			>
			<button
				class="btn btn-filter rounded-pill"
				data-filter=".ios"
				data-target="#grid1">iOS</button
			>
			<button
				class="btn btn-filter rounded-pill"
				data-filter=".android"
				data-target="#grid1">Android</button
			>
		</div>
		<div id="grid1" class="row mb-10 g-3 g-xl-5" data-isotope="">
			{#each Object.values(applications) as app}
				<div class="col-md-6 col-lg-4 {app.platform.join(' ')}">
					<a
						class="equal-1-1 card card-hover-border"
						href="{base}/app/{app.key}"
					>
						<figure
							class="background background-overlay rounded"
							style="background-image: url({app.iconUrl});"
						/>
						<div class="card-wrap">
							<div class="card-footer mt-auto">
								<h4 class="card-title text-light">{app.name}</h4>
							</div>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.btn {
		border-color: grey;
		color: grey;
	}
	.current {
		border-color: #ffb703 !important;
		color: white !important;
	}
</style>

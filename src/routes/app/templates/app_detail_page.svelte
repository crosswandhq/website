<script lang="ts">
	import appstoreLogo from '$lib/assets/images/svg/appstore.svg';
	import playstoreLogo from '$lib/assets/images/svg/googleplay.svg';
	import patternLgLight from '$lib/assets/images/svg/pattern-lg-light.svg';
	import type { applications } from '$lib/data/data';

	export let data: typeof applications['moli'] ;
	let detail = data.detail;
</script>

<section class="overflow-hidden inverted border-bottom bg-black">
	<div class="py-20 d-flex flex-column container min-vh-100 foreground">
		<div
			class="row align-items-center justify-content-center justify-content-lg-between my-auto"
		>
			<div
				class="col-lg-6 col-xl-5 text-center text-lg-start foreground mb-10 mb-lg-0"
			>
				<h1 class="display-1 lh-sm">{detail.heading}</h1>
				<p class="lead text-secondary my-4 fw-lg-75">
					{detail.subheading}
				</p>
				<div class="row justify-content-center justify-content-lg-start g-1">
					{#if data.platform.includes('ios')}
						<div class="col-auto">
							<a href={data.storeUrl.appStore} target="_blank" class="btn btn-red rounded-pill">
								<img src={appstoreLogo} alt="App Store" />
							</a>
						</div>
					{/if}
					{#if data.platform.includes('android')}
						<div class="col-auto">
							<a href={data.storeUrl.playStore} target="_blank" class="btn btn-red rounded-pill">
								<img src={playstoreLogo} alt="Google play" />
							</a>
						</div>
					{/if}
				</div>
			</div>
			<div class="col-lg-5 position-relative">
				<div class="card equal-2-1 equal-lg-1-1 overflow-visible level-1">
					<div class="card-wrap">
						<img
							class="img-fluid"
							src={detail.mainScreenshot}
							alt="Main Screenshot"
							data-aos="fade-up"
							data-aos-delay="200"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- testimonial -->
<section class="py-20 border-top inverted bg-black">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-8">
				<blockquote class="blockquote">
					<span class="lh-1 fs-1 mb-0">"</span>
					<p class="fs-3 mb-4">
						<span class="text-red">{detail.quote.value[0]}</span><br />{detail
							.quote.value[1]}
					</p>
					<footer class="blockquote-footer">
						<small>{detail.quote.author}</small>
					</footer>
				</blockquote>
			</div>
		</div>
	</div>
</section>

<section class="py-20 bg-red inverted overflow-hidden">
	<div class="container foreground">
		<div class="row justify-content-center mb-8">
			<div class="col-lg-8 text-center">
				<h2>{detail.features.heading}</h2>
			</div>
		</div>
		<div
			class="row g-5 justify-content-center justify-content-lg-between align-items-center"
		>
			{#each detail.features.value as value, index}
				<div
					class="col-lg-4 order-lg-1"
					data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
				>
					<ul class="list-unstyled text-center text-lg-end pe-lg-5">
						<li>
							<p class="fs-lg text-muted">
								<span class="text-white">{value[0]}</span>
								{value[1]}
							</p>
						</li>
					</ul>
				</div>
			{/each}
			<div class="col-lg-4 order-lg-2">
				<div class="card equal-2-1 equal-lg-1-1 overflow-visible">
					<div class="card-wrap">
						<img
							class="img-fluid"
							src={detail.featureScreenshot}
							alt="Feature Screenshot"
							data-aos="fade-up"
							data-aos-delay="100"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<img
		class="position-absolute top-100 start-50 translate-middle"
		src={patternLgLight}
		alt="shadow-pattern"
	/>
</section>

<section class="py-15 py-xl-20 bg-black inverted">
	<div class="container">
		<div class="row justify-content-center my-auto">
			<div class="col-lg-8 text-center">
				<h2 class="mb-5">
					Ready to start your journey?<br /><br />Download {data.name}
				</h2>
				<div class="row justify-content-center g-1">
					<div class="col-auto">
						<a href={data.storeUrl.appStore} target="_blank" class="btn btn-red rounded-pill">
							<img src={appstoreLogo} alt="App Store" />
						</a>
					</div>
					<div class="col-auto">
						<a href={data.storeUrl.playStore} target="_blank" class="btn btn-red rounded-pill">
							<img src={playstoreLogo} alt="Google play" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

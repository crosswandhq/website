<script>
	import { applications } from '$lib/data/data';
	import HomeImage from '$lib/assets/images/home.jpg';
	import UserFriendlyAppImage from '$lib/assets/images/user-friendly-app.jpg';
</script>

<section class="cover overflow-hidden bg-primary inverted">
	<div class="d-flex flex-column min-vh-100 py-20 container foreground">
		<div class="row justify-content-center my-auto">
			<div class="col-lg-8 col-xl-6">
				<h1 class="display-1 mb-1 font-weight-bold" style="font-weight: bold;">Crosswand LLC</h1>
				<div class="text-secondary fs-3">
					<span
						data-typed={JSON.stringify({
							strings: ['We disrupt', 'We create', 'We impact'],
						})}
					/>
				</div>
			</div>
		</div>
	</div>
	<div
		class="background background-overlay text-black"
		data-aos="zoom-out"
		data-aos-delay="200"
	/>
	<figure
		class="background background-dimm"
		style="background-image: url({HomeImage})"
		data-top-top="transform: translateY(0%);"
		data-top-bottom="transform: translateY(20%);"
	/>
	<span class="scroll-down" />
</section>

<section class="py-15 py-xl-20">
	<div class="container">
		<div class="row align-items-center justify-content-between">
			<div class="col-md-10 col-xl-5 mb-5 mb-xl-0">
				<h2>We create beautiful, functional apps</h2>
				<a href="/app" class="action underline"
					>Discover what we designed<i class="bi bi-arrow-right" /></a
				>
			</div>
			<div class="col-xl-6">
				<div class="row g-3 g-xl-5" data-masonry>
					<div class="col-md-6" data-aos="fade-up">
						<div class="card equal-xl-1-1 bg-primary inverted">
							<div class="card-wrap">
								<div class="card-header pb-0">
									<i class="bi bi-app-indicator fs-3" />
								</div>
								<div class="card-footer mt-auto">
									<h3 class="fs-4">{Object.keys(applications).length} Apps</h3>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 mt-xl-20" data-aos="fade-up">
						<div class="card equal-xl-1-1 inverted">
							<div class="card-wrap">
								<div class="card-header pb-0">
									<i class="bi bi-emoji-laughing fs-3" />
								</div>
								<div class="card-footer mt-auto">
									<h3 class="fs-4">User-Friendly Apps</h3>
								</div>
							</div>
							<figure
								class="background background-overlay"
								style="background-image: url({UserFriendlyAppImage})"
								data-top-top="transform: translateY(0%);"
								data-top-bottom="transform: translateY(20%);"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

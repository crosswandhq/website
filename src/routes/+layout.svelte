<script>
	import { navigating } from '$app/stores';
	import { applications } from '$lib/data/data';

	function closeNav() {
		if (document.body.classList.contains('navbar-active')) {
			const element = document.getElementsByClassName('nav-icon')[0];
			if (element instanceof HTMLElement) {
				element.click();
			}
		}
	}

	$: if ($navigating) closeNav();
</script>

<nav id="mainNav" class="navbar navbar-expand-lg navbar-sticky navbar-dark">
	<div class="container">
		<a class="navbar-brand" href="/">
			<img
				src="https://d2rl869h53lu99.cloudfront.net/images/logo.png"
				alt="Logo"
			/>
		</a>
		<!-- secondary -->
		<ul class="navbar-nav navbar-nav-secondary order-lg-3">
			<li class="nav-item d-lg-none">
				<a
					class="nav-link nav-icon"
					href={'#'}
					role="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbar"
					aria-controls="navbar"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="bi bi-list inverted text-white" />
				</a>
			</li>
			<li class="nav-item d-none d-lg-block">
				<a class="btn btn-outline-white rounded-pill ms-2" href="/contact"
					>Contact</a
				>
			</li>
		</ul>
		<!-- primary -->
		<div id="navbar" class="collapse navbar-collapse" data-bs-parent="#mainNav">
			<ul class="navbar-nav">
				<li class="nav-item dropdown dropdown-hover">
					<a
						id="navbarDropdown-5"
						class="nav-link dropdown-toggle"
						href={'#'}
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Application
					</a>
					<ul
						class="dropdown-menu dropdown-menu-detailed"
						aria-labelledby="navbarDropdown-5"
					>
						{#each Object.values(applications) as app}
							<li>
								<a class="dropdown-item" href="/app/{app.key}">
									<span>
										<img src={app.iconUrl} class="bi" alt="Icon" />
										{app.name}
										<small>{app.description}</small>
									</span>
								</a>
							</li>
						{/each}
						<li>
							<a class="dropdown-item" href="/app">
								<span>
									<i class="bi bi-app" />
									All Apps
									<small>Take a look at our apps</small>
								</span>
							</a>
						</li>
					</ul>
				</li>
				<li class="nav-item d-lg-none">
					<a class="nav-link text-primary" href="/contact">Contact</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<slot />

<footer class="py-15 py-xl-20 border-top">
	<div class="container">
		<div class="row align-items-center g-1 g-lg-6 text-muted">
			<div class="col-md-6 col-lg-5 order-lg-2 text-center text-md-start">
				<ul class="list-inline small">
					<li class="list-inline-item">
						<a
							class="text-reset text-primary-hover"
							href="https://www.instagram.com/crosswandllc">Instagram</a
						>
					</li>
					<li class="list-inline-item ms-1">
						<a
							class="text-reset text-primary-hover"
							href="https://apps.apple.com/ng/developer/crosswand-llc/id1609432737"
							>App store</a
						>
					</li>
					<li class="list-inline-item ms-1">
						<a
							class="text-reset text-primary-hover"
							href="https://play.google.com/store/apps/developer?id=Crosswand+LLC"
							>Play store</a
						>
					</li>
				</ul>
			</div>
			<div class="col-md-6 col-lg-4 text-center text-md-end order-lg-3">
				<span class="small">Crosswand LLC</span>
			</div>
			<div class="col-lg-3 order-lg-1 text-center text-md-start">
				<p class="small">Copyrights © 2023</p>
			</div>
		</div>
	</div>
</footer>

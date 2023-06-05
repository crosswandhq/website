<script>
	import { page } from '$app/stores';
	import logo404 from '$lib/assets/images/svg/404.svg';
</script>

<section class="inverted bg-red">
	<div class="d-flex flex-column container min-vh-100 py-20">
		<div
			class="row align-items-center justify-content-center justify-content-lg-between my-auto"
		>
			<div class="col-lg-6 order-lg-2">
				<img class="img-fluid" src={logo404} alt="Figure" />
			</div>
			<div class="col-md-8 col-lg-5 order-lg-1 text-center text-lg-start">
				<h1 class="display-2">Sorry, page not found.</h1>
				<p>{$page.error?.message}</p>
				<a
					href="/"
					class="btn btn-rounded btn-outline-white rounded-pill"
					>Go back to homepage</a
				>
			</div>
		</div>
	</div>
</section>

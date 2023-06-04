<script>
	import { enhance } from '$app/forms';
	import { applications } from '$lib/data/data';

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<section class="py-15 py-xl-20 bg-black">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-8 mb-5">
				<h2 class="text-white">We'd love to hear from you</h2>
			</div>
			<div class="col-lg-8">
				<form class="row g-3" method="post" use:enhance>
					<div class="col-md-6">
						<label class="form-label" for="yourName">Your Name</label>
						<input
							id="yourName"
							class="form-control"
							type="text"
							name="name"
							placeholder="Your Name"
							required
						/>
					</div>
					<div class="col-md-6">
						<label class="form-label" for="yourEmail">Your Email</label>
						<input
							id="yourCompany"
							class="form-control"
							type="email"
							name="email"
							placeholder="Your Email"
						/>
					</div>
					<div class="col-md-6">
						<label class="form-label" for="ap">App</label>
						<select class="form-select" aria-label="App" name="app">
							<option value="">Optional</option>
							{#each Object.values(applications) as app}
								<option value={app.name}>{app.name}</option>
							{/each}
						</select>
					</div>
					<div class="col-md-6">
						<label class="form-label" for="category">Category</label>
						<select class="form-select" aria-label="Category" name="category">
							<option value="">Optional</option>
							<option value="Question">Question</option>
							<option value="Suggestion">Suggestion</option>
							<option value="Bug">Bug</option>
							<option value="Comment">Comment</option>
							<option value="Other">Other</option>
						</select>
					</div>
					<div class="col-md-12">
						<label class="form-label" for="yourMessage">Message</label>
						<textarea
							id="yourMessage"
							class="form-control"
							rows="3"
							placeholder="Message"
							name="message"
							required
						/>
					</div>
					<div class="col-md-8">
						<div class="form-check">
							<input
								id="gridCheck"
								class="form-check-input border-success"
								type="checkbox"
								name="terms"
								required
							/>
							<label class="form-check-label text-muted small" for="gridCheck">
								I accept the <a class="underline" href={'#'}
									>Terms & Conditions</a
								>
								and acknowledge that my information will be used in accordance with
								Privacy Policy.
							</label>
							{#if form?.termsNotAccepted}<p class="error text-red">
									Terms not accepted
								</p>{/if}
						</div>
					</div>
					<div class="col-md-12">
						<button class="btn btn-block btn-primary rounded-pill" type="submit"
							>Get in touch</button
						>
						{#if form?.internalError}
							<p class="error text-red mt-2">
								Internal Error: {form?.error}
							</p>
						{/if}
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

<style>
	input,
	select,
	textarea {
		color: white;
		background-color: transparent;
		border-color: grey;
	}
</style>

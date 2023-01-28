<script lang="ts">
	import FeedbackForm from './FeedbackForm.svelte';
</script>

<div class="flex justify-center my-16 mx-8">
	<div class="prose">
		<h3 id="what-is-this-">What is this?</h3>
		<p>
			OpenBook is a database of Effective Altruism grants. Find out how much funding your favorite
			charities have received!
		</p>
		<h3 id="where-is-the-donation-data-from-">Where is the donation data from?</h3>
		<p>
			Most donation data comes from Vipul Naik’s <a href="https://github.com/vipulnaik/donations"
				>Donation List Website</a
			>. Additional donations have been pulled from the websites of OpenPhil, EA Funds, and SFF.
		</p>
		<p>
			The source code for OpenBook is <a href="https://github.com/rachelweinberg12/zoe"
				>available on Github</a
			>.
		</p>
		<h3 id="some-donations-are-wrong-or-missing-">Some donations are wrong or missing!</h3>
		<p>
			Sorry! We’d like to allow people to fix and add new donations to the database, in the future.
			Stay tuned!
		</p>
		<h3 id="who-built-this-">Who built this?</h3>
		<p>Rachel Weinberg, with help from Austin Chen.</p>
		<p>
			If you have questions or feedback (or if you're looking to hire a frontend dev!), reach out to
			rachel.weinberg12@gmail.com.
		</p>
		<hr class="h-0.5 bg-gray-500" />
		<FeedbackForm />
	</div>
</div>

<script lang="ts">
	import { sendFeedback } from '$lib/db';
	let email: string;
	let feedback: string;
</script>

<h3 class="text-center">Feedback Form</h3>
<p>
	You can also leave feedback in the comments of the <a
		href="https://forum.effectivealtruism.org/posts/xQf9HpHoyz7DemzAE/openbook-new-ea-grants-database"
		>EA forum post</a
	> announcing this site.
</p>
<form>
	<div>
		<p class="mb-0">Email</p>
		<input
			type="text"
			name="email"
			placeholder="hi@example.com"
			class="text-lg p-2 border-2 border-gray-300 w-full rounded-md focus:outline-none focus:ring focus:ring-violet-300 mb-3"
			bind:value={email}
		/>
		<p class="mb-0">Feedback</p>
		<textarea
			name="feedback"
			placeholder="Let me know what you think!"
			class="text-lg p-2 border-2 h-20 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-300 mb-3"
			bind:value={feedback}
		/>
		<br />
		<div class="flex justify-center">
			<button
				on:click|preventDefault={() => {
					sendFeedback(feedback, email);
					feedback = '';
					email = '';
				}}
				class="bg-violet-400 w-36 rounded-md shadow-sm hover:cursor-pointer hover:shadow-xl text-white"
				>Submit</button
			>
		</div>
	</div>
</form>

<script lang="ts">
	import { sendFeedback } from '$lib/db';
	let email: string;
	let feedback: string;
</script>

<h3 class="text-center">Feedback Form</h3>
<form>
	<div>
		<p class="mb-0">Email</p>
		<input
			type="text"
			name="email"
			placeholder="hi@example.com"
			class="text-xl p-2 border-2 border-gray-300 w-full rounded-md focus:outline-none focus:ring focus:ring-violet-300 mb-3"
			bind:value={email}
		/>
		<p class="mb-0">Feedback</p>
		<textarea
			name="feedback"
			placeholder="Let me know what you think!"
			class="text-xl p-2 border-2 h-20 w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-300 mb-3"
			bind:value={feedback}
		/>
		<br />
		<div class="flex justify-center">
			<button
				on:click|preventDefault={() => sendFeedback(feedback, email)}
				class="bg-violet-200 w-36 rounded-md shadow-sm hover:cursor-pointer hover:shadow-xl"
				>Submit</button
			>
		</div>
	</div>
</form>

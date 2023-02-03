<script lang="ts">
	import { sendFeedback } from '$lib/db';
	import TextInput from '$lib/TextInput.svelte';
	import Button from '$lib/Button.svelte';
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
		<label for="email">Email</label>
		<TextInput id="email" placeholder="hi@example.com" bind:text={email} />
		<label for="feedback">Feedback</label>
		<textarea
			id="feedback"
			placeholder="Let me know what you think!"
			class="p-2 border-2 h-20 w-full border-gray-300 rounded outline-none focus:ring focus:ring-violet-300 mb-3 focus:border-gray-300 "
			bind:value={feedback}
		/>
		<br />
		<div class="flex justify-center">
			<Button
				on:click={() => {
					sendFeedback(feedback, email);
					feedback = '';
					email = '';
				}}>Submit</Button
			>
		</div>
	</div>
</form>

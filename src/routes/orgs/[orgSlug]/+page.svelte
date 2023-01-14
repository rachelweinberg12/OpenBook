<script lang="ts">
	import type { PageData } from './$types';
	import OrgGrants from './OrgGrants.svelte';
	import DetailIcon from '$lib/DetailIcon.svelte';
	import { formatLargeNumber } from '$lib/utils';
	export let data: PageData;
	const donee_data = data.donee_data[0];
	function sum_grants(grantList: []) {
		let total = 0;
		for (let i = 0; i < grantList.length; i++) {
			total += grantList[i].amount;
		}
		return total;
	}
</script>

<body class="font-poppins">
	<div class=" mx-20 my-16 text-center">
		<h1 class="text-6xl">{data.name}</h1>
		{#if donee_data}
			<div class="flex flex-col gap-3 text-2xl mx-72 mt-12">
				{#if donee_data.website}
					<div class="flex flex-row gap-5 justify-center">
						<DetailIcon category="donee_site" />
						<a class="hover:underline" href={donee_data.website}>{donee_data.website}</a>
					</div>
				{/if}
				{#if donee_data.donate_page}
					<div class="flex flex-row gap-5 justify-center">
						<DetailIcon category="donate_url" />
						<a class="hover:underline" href={donee_data.donate_page}>{donee_data.donate_page}</a>
					</div>
				{/if}
				{#if donee_data.country}
					<div class="flex flex-row gap-5 justify-center">
						<DetailIcon category="country" />
						{donee_data.country}
					</div>
				{/if}
				{#if donee_data.givewell_review}
					<div class="flex flex-row gap-5 justify-center">
						<DetailIcon category="org_review" />
						<a class="hover:underline" href={donee_data.givewell_review}>GiveWell Review</a>
					</div>
				{/if}
				{#if donee_data.open_phil_grant_review}
					<div class="flex flex-row gap-5 justify-center">
						<DetailIcon category="org_review" />
						<a class="hover:underline" href={donee_data.open_phil_grant_review}
							>Open Philanthropy Review</a
						>
					</div>
				{/if}
			</div>
		{/if}

		<div class="my-10 flex flex-col justify-center gap-10">
			{#if data.incomings.length > 0}
				<div>
					<h3 class="text-4xl my-5">
						Incoming Grants | Total Recieved: ${formatLargeNumber(sum_grants(data.incomings))}
					</h3>
					<OrgGrants grantList={data.incomings} incoming={true} />
				</div>
			{/if}
			{#if data.outgoings.length > 0}
				<div>
					<h3 class="text-4xl my-5">
						Outgoing Grants | Total Sent: ${formatLargeNumber(sum_grants(data.outgoings))}
					</h3>
					<OrgGrants grantList={data.outgoings} incoming={false} />
				</div>
			{/if}
		</div>
	</div>
</body>

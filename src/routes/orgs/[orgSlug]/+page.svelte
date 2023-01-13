<script lang="ts">
	import type { PageData } from './$types';
	import OrgGrants from './OrgGrants.svelte';
	import DetailIcon from '$lib/DetailIcon.svelte';
	import { formatLargeNumber } from '$lib/utils';
	export let data: PageData;
	const donee_data = data.donee_data[0];
	console.log(data);
	console.log(donee_data);
	function sum_grants(grantList: []) {
		let total = 0;
		for (let i = 0; i < grantList.length; i++) {
			total += grantList[i].amount;
		}
		return total;
	}
</script>

<body class="font-poppins">
	<h1 class="text-5xl">{data.name}</h1>
	{#if donee_data}
		<div class="flex flex-col gap-3 text-lg">
			{#if donee_data.website}
				<div class="flex flex-row gap-5">
					<DetailIcon category="donee_site" />
					<a class="hover:underline" href={donee_data.website}>{donee_data.website}</a>
				</div>
			{/if}
			{#if donee_data.donate_page}
				<div class="flex flex-row gap-5">
					<DetailIcon category="donate_url" />
					<a class="hover:underline" href={donee_data.donate_page}>{donee_data.donate_page}</a>
				</div>
			{/if}
			{#if donee_data.country}
				<div class="flex flex-row gap-5">
					<DetailIcon category="country" />
					{donee_data.country}
				</div>
			{/if}
			{#if donee_data.givewell_review}
				<div class="flex flex-row gap-5">
					<DetailIcon category="org_review" />
					<a class="hover:underline" href={donee_data.givewell_review}>GiveWell Review</a>
				</div>
			{/if}
			{#if donee_data.open_phil_grant_review}
				<div class="flex flex-row gap-5">
					<DetailIcon category="org_review" />
					<a class="hover:underline" href={donee_data.open_phil_grant_review}
						>Open Philanthropy Review</a
					>
				</div>
			{/if}
		</div>
	{/if}

	<div class="my-10 flex justify-center">
		{#if data.incomings.length > 0}
			<div>
				<h3 class="text-3xl">
					Incoming Grants | Total Recieved: {formatLargeNumber(sum_grants(data.incomings))}
				</h3>
				<OrgGrants grantList={data.incomings} incoming={true} />
			</div>
		{/if}
		{#if data.outgoings.length > 0}
			<div>
				<h3 class="text-3xl">
					Outgoing Grants | Total Recieved: {formatLargeNumber(sum_grants(data.outgoings))}
				</h3>
				<OrgGrants grantList={data.outgoings} incoming={false} />
			</div>
		{/if}
	</div>
</body>

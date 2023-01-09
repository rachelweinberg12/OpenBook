<script lang="ts">
	import type { PageData } from './$types';
	/*import { Datatable } from 'svelte-simple-datatables';*/
	import type { Database } from '$lib/types/supabase';
	import Search from './Search.svelte';
	type Row = Database['public']['Tables']['donationsea']['Row'];

	import { DataHandler } from '@vincjo/datatables';
	import Th from '../Th.svelte';
	import ThFilter from '../ThFilter.svelte';

	import { searchDonations } from '$lib/db';

	const settings = {
		sortable: true,
		pagination: true,
		rowsPerPage: 50,
		columnFilter: true
	};

	export let data: PageData;

	let searchResults = data.donations;
	let search: string = '';

	const handler = new DataHandler(searchResults, { rowsPerPage: 50 });
	const rows = handler.getRows();
</script>

<div class="p-4">
	<h2 class="text-xl mb-2">25 random donations</h2>

	<!-- Create a bullet point for each item in data.donees -->
	{#each data.donations as donation}
		<li>
			<!-- Open the link in a new tab -->
			<a
				target="_blank"
				rel="noopener noreferrer"
				href={donation.url}
				class="hover:text-blue-800 hover:underline">{donation.donee} - ${donation.amount}</a
			>
		</li>
	{/each}
</div>

<!-- <Datatable {settings} data={data.donations} bind:dataRows={rows}> -->
<form>
	<Search bind:text={search} />
	<button on:click={() => searchDonations(search).then((res) => (searchResults = res))}>
		Search</button
	>
</form>

<table>
	<thead>
		<tr>
			<Th {handler} orderBy={'amount'}>Amount</Th>
			<Th {handler} orderBy={'donor'}>Donor</Th>
			<Th {handler} orderBy={'donee'}>Donee</Th>
		</tr>
		<tr>
			<ThFilter {handler} filterBy={'amount'} />
			<ThFilter {handler} filterBy={'donor'} />
			<ThFilter {handler} filterBy={'donee'} />
		</tr>
	</thead>
	<tbody>
		{#each $rows as row}
			<tr>
				<td>{row.amount}</td>
				<td>{row.donor}</td>
				<td>{row.donee}</td>
			</tr>
		{/each}
	</tbody>
</table>
<!-- </Datatable> -->

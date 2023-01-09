<script lang="ts">
	import type { PageData } from './$types';
	/*import { Datatable } from 'svelte-simple-datatables';*/
	import type { Database } from '$lib/types/supabase';
	import Search from './Search.svelte';
	type Row = Database['public']['Tables']['donationsea']['Row'];

	import { DataHandler } from '@vincjo/datatables';
	import { searchDonations } from '$lib/db';

	const settings = {
		sortable: true,
		pagination: true,
		rowsPerPage: 50,
		columnFilter: true
	};
	/*let rows: Row[] = writable([]);*/
	// let rows: any[];
	export let data: PageData;

	const handler = new DataHandler(data.donations, { rowsPerPage: 50 });
	const rows = handler.getRows();

	let searchResults = data.donations;
	let search: string = '';
</script>

<div class="p-4">
	<h2 class="text-xl mb-2">25 random donations</h2>

	<!-- Create a bullet point for each item in data.donees -->
	<!-- {#each data.donees as donee}
		<li>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href={donee.website}
				class="hover:text-blue-800 hover:underline">{donee.donee}</a
			>
		</li>
	{/each} -->

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

<thead>
	<th data-key="id">Amount</th>
	<th data-key="donor">Donor</th>
	<th data-key="donee">Donee</th>
</thead>
<tbody>
	<!-- {#if rows} -->
	{#each searchResults as row}
		<tr>
			<td>{row.amount}</td>
			<td>{row.donor}</td>
			<td>{row.donee}</td>
		</tr>
	{/each}
	<!-- {/if} -->
</tbody>
<!-- </Datatable> -->

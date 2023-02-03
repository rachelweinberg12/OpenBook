<script lang="ts">
	import { getAllDonationData } from '$lib/db';
	import Button from '$lib/Button.svelte';
	let data: Object[] = [];
	async function getData() {
		data = await getAllDonationData();
	}
	getData();

	let headerToShow = [
		'id',
		'donor',
		'donee',
		'amount',
		'donation date',
		'cause areas',
		'amount original currency',
		'original currency',
		'currency conversion date',
		'currency conversion basis',
		'fraction of total',
		'donation date precision',
		'donation date basis',
		'url',
		'donor cause area url',
		'notes',
		'donation process',
		'intended use of funds category',
		'intended use of funds',
		'intended funding timeframe in months',
		'donor donee reason',
		'donor amount reason',
		'donor timing reason',
		'donor next donation thoughts',
		'donor retrospective',
		'paymen modality',
		'match eligible',
		'goal amount',
		'influencer',
		'employer_match',
		'matching_employer',
		'special donation reason',
		'donation earmark',
		'affected countries',
		'affected states',
		'affected cities',
		'affected regions',
		'donation announcement date',
		'donation announcement date_precision',
		'donation announcement url',
		'predictions',
		'is contractwork'
	];

	export const csvGenerator = (
		totalData: Object[],
		actualHeaderKey: any[],
		headerToShow: string[],
		fileName: string
	) => {
		let data = totalData || null;
		if (data == null || !data.length) {
			return null;
		}
		let columnDelimiter = ',';
		let lineDelimiter = '\n';
		let keys = headerToShow;
		let result = '';
		result += keys.join(columnDelimiter);
		result += lineDelimiter;
		data.forEach(function (item) {
			let ctr = 0;
			actualHeaderKey.forEach(function (key) {
				if (ctr > 0) result += columnDelimiter;
				if (Array.isArray(item[key])) {
					let arrayItem = item[key] && item[key].length > 0 ? '"' + item[key].join(',') + '"' : '-';
					result += arrayItem;
				} else if (typeof item[key] == 'string') {
					let strItem = item[key] ? '"' + item[key].replaceAll('"', '""') + '"' : '-';
					result += strItem ? strItem.replace(/\s{2,}/g, ' ') : strItem;
				} else {
					let strItem = item[key] + '';
					result += strItem ? strItem.replace(/,/g, '') : strItem;
				}

				ctr++;
			});
			result += lineDelimiter;
		});

		if (result == null) return;

		var blob = new Blob([result]);
		//May need to add condition for ie later, but default msSaveBlob is deprecated
		if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
			var hiddenElement = window.document.createElement('a');
			hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(result);
			hiddenElement.target = '_blank';
			hiddenElement.download = fileName;
			hiddenElement.click();
		} else {
			let link = document.createElement('a');
			if (link.download !== undefined) {
				// Browsers that support HTML5 download attribute
				var url = URL.createObjectURL(blob);
				link.setAttribute('href', url);
				link.setAttribute('download', fileName);
				link.style.visibility = 'hidden';
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		}
	};
</script>

<div class="relative bottom-1">
	<Button
		on:click={() =>
			csvGenerator(data, Object.keys(data[0]), Object.keys(data[0]), 'openbookdonations.csv')}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6 inline"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
			/>
		</svg>
		Download CSV
	</Button>
</div>

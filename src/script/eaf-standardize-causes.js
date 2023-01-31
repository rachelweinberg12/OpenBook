import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://emqmvubrovsmdfjrbqjr.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtcW12dWJyb3ZzbWRmanJicWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI2MzYwNzEsImV4cCI6MTk4ODIxMjA3MX0.pIUyywodqU9ZkXMYF_M_ckpSsm7EzFC9FPih7NaPDOI';
const supabase = createClient(supabaseUrl, supabaseKey);

const CAUSE_MAP = {
	'farm animal welfare': 'animal welfare',
	'human health and wellbeing': 'global health & wellbeing',
	longtermism: 'other longtermism',
	'potential risks from advanced ai': 'AI safety',
	'biosecurity & pandemic preparedness': 'biosecurity',
	'biosecurity and pandemic preparedness': 'biosecurity',
	'givewell recommended charities': 'global health & wellbeing',
	'global health & development': 'global health & wellbeing',
	'broiler chicken welfare': 'animal welfare',
	'land use reform': 'other',
	'effective altruism community growth': 'EA community',
	'transformative basic science': 'other',
	'criminal justice reform': 'criminal justice reform',
	'science supporting biosecurity and pandemic preparedness': 'biosecurity',
	'science supporting biosecurity & pandemic preparedness': 'biosecurity',
	'macroeconomic stabilization policy': 'other',
	'other areas': 'other',
	'global health & wellbeing': 'global health & wellbeing',
	'alternatives to animal products': 'animal welfare',
	'cage-free reforms': 'animal welfare',
	'other scientific research areas': 'other',
	'scientific research': 'other',
	'immigration policy': 'migration policy',
	'migration policy': 'migration policy',
	'scientific innovation: tools and techniques': 'other',
	'south asian air quality': 'global health & wellbeing',
	'science for global health': 'global health & wellbeing',
	'history of philanthropy': 'other',
	'effective altruism community growth (longtermism)': 'EA community',
	'climate change': 'climate change',
	'global aid policy': 'global health & wellbeing',
	'ai safety': 'AI safety',
	'animal welfare': 'animal welfare',
	'effective altruism community growth (global health and wellbeing)': 'EA community',
	'effective altruism': 'EA community',
	'epistemic institutions': 'epistemic institutions',
	'values and reflective processes': 'other',
	'global catastrophic risks': 'global catastrophic risks',
	forecasting: 'forecasting'
};
/*
$: text = (CAUSE_MAP[tag] ?? tag).toLowerCase();
*/

async function getAnimalDonations() {
	const { data, error } = await supabase
		.from('donations')
		.select()
		.eq('donor', 'Effective Altruism Funds: Animal Welfare Fund')
		.order('donation_date', { ascending: false });
	if (error) {
		console.log('error in getDonations', error);
	}

	return data ?? [];
}

async function getGHWDonations() {
	const { data, error } = await supabase
		.from('donations')
		.select()
		.eq('donor', 'Effective Altruism Funds: Global Health and Development Fund')
		.order('donation_date', { ascending: false });
	if (error) {
		console.log('error in getDonations', error);
	}

	return data ?? [];
}

async function getIFDonations() {
	const { data, error } = await supabase
		.from('donations')
		.select()
		.eq('donor', 'Effective Altruism Funds: Effective Altruism Infrastructure Fund')
		.order('donation_date', { ascending: false });
	if (error) {
		console.log('error in getDonations', error);
	}

	return data ?? [];
}

async function getLTDonations() {
	const { data, error } = await supabase
		.from('donations')
		.select()
		.eq('donor', 'Effective Altruism Funds: Long-Term Future Fund')
		.order('donation_date', { ascending: false });
	if (error) {
		console.log('error in getDonations', error);
	}

	return data ?? [];
}

const animal_donations = await getAnimalDonations();
const ghw_donations = await getGHWDonations();
const if_donations = await getIFDonations();
const lt_donations = await getLTDonations();

/*
/**
 * @param {string[]} causeAreaArray

function standardizeCauseAreas(causeAreaArray) {
	if (causeAreaArray) {
		let cause_set = new Set();
		for (let i = 0; i < causeAreaArray.length; i++) {
			let standard_cause = CAUSE_MAP[causeAreaArray[i].toLowerCase()] ?? null;
			if (standard_cause && standard_cause !== 'other') {
				cause_set.add(standard_cause);
			}
		}
		if (cause_set.size > 0) {
			return Array.from(cause_set);
		} else {
			return ['other'];
		}
	} else {
		return null;
	}
}
*/

/*
for (let i = 0; i < animal_donations.length; i++) {
	console.log('donation ', i, ' of ', animal_donations.length);
	const { error } = await supabase
		.from('donations')
		.update({ standard_cause_array: ['animal welfare'] })
		.eq('donation_id', animal_donations[i].donation_id);
	if (error) {
		console.log(error);
	}
	console.log(
		'updated ',
		animal_donations[i].cause_area_array,
		' to ',
		'animal welfare',
		' for ',
		animal_donations[i].donation_id
	);
}

console.log('\n .................................... \n');

for (let i = 0; i < ghw_donations.length; i++) {
	console.log('donation ', i, ' of ', ghw_donations.length);
	const { error } = await supabase
		.from('donations')
		.update({ standard_cause_array: ['global health & wellbeing'] })
		.eq('donation_id', ghw_donations[i].donation_id);
	if (error) {
		console.log(error);
	}
	console.log(
		'updated ',
		ghw_donations[i].cause_area_array,
		' to ',
		'global health & wellbeing',
		' for ',
		ghw_donations[i].donation_id
	);
}

console.log('\n .................................... \n');

for (let i = 0; i < if_donations.length; i++) {
	console.log('donation ', i, ' of ', if_donations.length);
	const { error } = await supabase
		.from('donations')
		.update({ standard_cause_array: ['EA community'] })
		.eq('donation_id', if_donations[i].donation_id);
	if (error) {
		console.log(error);
	}
	console.log(
		'updated ',
		if_donations[i].cause_area_array,
		' to ',
		'EA community',
		' for ',
		if_donations[i].donation_id
	);
}
*/

/**
 * @param {string[]} cause_area_array
 */
function updateGCR(cause_area_array) {
	if (
		(cause_area_array.includes('AI safety') ||
			cause_area_array.includes('biosecurity') ||
			cause_area_array.includes('nuclear risk')) &&
		!cause_area_array.includes('global catastrophic risk')
	) {
		cause_area_array.push('global catastrophic risk');
		return cause_area_array;
	}
}

for (let i = 0; i < lt_donations.length; i++) {
	console.log('donation ', i, ' of ', lt_donations.length);
	const { error } = await supabase
		.from('donations')
		.update({
			standard_cause_array: lt_donations[i].standard_cause_array.map((cause) =>
				cause === 'global catastrophic risk' ? 'global catastrophic risks' : cause
			)
		})
		.eq('donation_id', lt_donations[i].donation_id);
	if (error) {
		console.log(error);
	}
	console.log(
		'updated ',
		lt_donations[i].cause_area_array,
		' to ',
		updateGCR(lt_donations[i].standard_cause_array),
		' for ',
		lt_donations[i].donation_id
	);
}

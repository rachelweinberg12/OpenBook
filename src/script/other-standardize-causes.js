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
	forecasting: 'epistemic institutions',
	'global health and wellbeing': 'global health & wellbeing',
	'existential risk reduction': 'global catastrophic risks',
	'existential risks': 'global catastrophic risks',
	'existential risk': 'global catastrophic risks',
	'ai governance': 'AI safety'
};
/*
$: text = (CAUSE_MAP[tag] ?? tag).toLowerCase();
*/

async function getDonations() {
	const { data, error } = await supabase
		.from('donations')
		.select()
		.order('donation_date', { ascending: false });
	if (error) {
		console.log('error in getDonations', error);
	}

	return data ?? [];
}

const donations = await getDonations();
/*
/**
 * @param {string[]} causeAreaArray
 * @param {string[]} currStandardCauseArray
 
function standardizeCauseAreas(causeAreaArray, currStandardCauseArray) {
	if (currStandardCauseArray.length > 0) {
		currStandardCauseArray = currStandardCauseArray.filter(
			(cause) => cause != 'malaria' && cause != 'deworming'
		);
		if (currStandardCauseArray.includes('forecasting')) {
			currStandardCauseArray = currStandardCauseArray.filter((cause) => cause != 'forecasting');
			if (!currStandardCauseArray.includes('epistemic institutions')) {
				currStandardCauseArray.push('epistemic institutions');
			}
		}
		if (
			(currStandardCauseArray.includes('biosecurity') ||
				currStandardCauseArray.includes('AI safety')) &&
			!currStandardCauseArray.includes('global catastrophic risks')
		) {
			currStandardCauseArray.push('global catastrophic risks');
		}
		return currStandardCauseArray;
	} else if (causeAreaArray) {
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
		return ['other'];
	}
}
*/

/**
 * @param {string[]} currStandardCauseAreas
 */
function standardizeCauseAreas(currStandardCauseAreas) {
	if (
		(currStandardCauseAreas.includes('biosecurity') ||
			currStandardCauseAreas.includes('AI safety')) &&
		currStandardCauseAreas.includes('global catastrophic risks')
	) {
		currStandardCauseAreas = currStandardCauseAreas.filter(
			(cause) => cause != 'global catastrophic risks'
		);
		return currStandardCauseAreas;
	}
	return currStandardCauseAreas;
}

for (let i = 0; i < donations.length; i++) {
	console.log('donation ', i, ' of ', donations.length);
	const { error } = await supabase
		.from('donations')
		.update({
			standard_cause_areas: standardizeCauseAreas(donations[i].standard_cause_areas)
		})
		.eq('donation_id', donations[i].donation_id);
	if (error) {
		console.log(error);
	}
	console.log(
		'updated ',
		donations[i].donation_id,
		'from',
		donations[i].standard_cause_array,
		'to',
		donations[i].standard_cause_areas
	);
}

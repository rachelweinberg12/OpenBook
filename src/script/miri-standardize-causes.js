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

async function getDonations() {
	const { data, error } = await supabase
		.from('donations')
		.select()
		.eq('donee', 'Machine Intelligence Research Institute')
		.order('donation_date', { ascending: false });
	if (error) {
		console.log('error in getDonations', error);
	}

	return data ?? [];
}

const donations = await getDonations();

for (let i = 0; i < donations.length; i++) {
	console.log('donation ', i, ' of ', donations.length);
	const { error } = await supabase
		.from('donations')
		.update({ standard_cause_array: ['AI safety', 'global catastrophic risks'] })
		.eq('donation_id', donations[i].donation_id);
	if (error) {
		console.log(error);
	}
	console.log(
		'updated ',
		donations[i].cause_area_array,
		' to ',
		['AI safety', 'global catastrophic risks'],
		' for ',
		donations[i].donation_id
	);
}

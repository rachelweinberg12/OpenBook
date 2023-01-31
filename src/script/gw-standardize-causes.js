import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://emqmvubrovsmdfjrbqjr.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtcW12dWJyb3ZzbWRmanJicWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI2MzYwNzEsImV4cCI6MTk4ODIxMjA3MX0.pIUyywodqU9ZkXMYF_M_ckpSsm7EzFC9FPih7NaPDOI';
const supabase = createClient(supabaseUrl, supabaseKey);

async function getDonations() {
	const { data, error } = await supabase
		.from('donations')
		.select()
		.eq('donor', 'GiveWell unrestricted')
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
		.update({ standard_cause_array: ['global health & wellbeing'] })
		.eq('donation_id', donations[i].donation_id);
	if (error) {
		console.log(error);
	}
	console.log(
		'updated ',
		donations[i].cause_area_array,
		' to ',
		'global health & wellbeing',
		' for ',
		donations[i].donation_id
	);
}

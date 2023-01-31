import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://emqmvubrovsmdfjrbqjr.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtcW12dWJyb3ZzbWRmanJicWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI2MzYwNzEsImV4cCI6MTk4ODIxMjA3MX0.pIUyywodqU9ZkXMYF_M_ckpSsm7EzFC9FPih7NaPDOI';
const supabase = createClient(supabaseUrl, supabaseKey);

async function getAnimalDonations() {
	const { data, error } = await supabase
		.from('donations')
		.select()
		.eq('donee', 'Effective Altruism Funds: Animal Welfare Fund')
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
		.eq('donee', 'Effective Altruism Funds: Global Health and Development Fund')
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
		.eq('donee', 'Effective Altruism Funds: Effective Altruism Infrastructure Fund')
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
		.eq('donee', 'Effective Altruism Funds: Long-Term Future Fund')
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

for (let i = 0; i < animal_donations.length; i++) {
	console.log('donation ', i, ' of ', animal_donations.length);
	const { error } = await supabase
		.from('donations')
		.update({
			donee: 'EA Funds: Animal Welfare Fund'
		})
		.eq('donation_id', animal_donations[i].donation_id);
	if (error) {
		console.log(error);
	}
	console.log('updated', animal_donations[i].donation_id, 'to', 'EA Funds: Animal Welfare Fund');
}

for (let i = 0; i < ghw_donations.length; i++) {
	console.log('donation ', i, ' of ', ghw_donations.length);
	const { error } = await supabase
		.from('donations')
		.update({
			donee: 'EA Funds: Global Health and Development Fund'
		})
		.eq('donation_id', ghw_donations[i].donation_id);
	if (error) {
		console.log(error);
	}
	console.log(
		'updated',
		ghw_donations[i].donation_id,
		'to',
		'EA Funds: Global Health and Development Fund'
	);
}

for (let i = 0; i < if_donations.length; i++) {
	console.log('donation ', i, ' of ', if_donations.length);
	const { error } = await supabase
		.from('donations')
		.update({
			donee: 'EA Funds: EA Infrastructure Fund'
		})
		.eq('donation_id', if_donations[i].donation_id);
	if (error) {
		console.log(error);
	}
	console.log('updated', if_donations[i].donation_id, 'to', 'EA Funds: EA Infrastructure Fund');
}

for (let i = 0; i < lt_donations.length; i++) {
	console.log('donation ', i, ' of ', lt_donations.length);
	const { error } = await supabase
		.from('donations')
		.update({
			donee: 'EA Funds: Long-Term Future Fund'
		})
		.eq('donation_id', lt_donations[i].donation_id);
	if (error) {
		console.log(error);
	}
	console.log('updated', lt_donations[i].donation_id, 'to', 'EA Funds: Long-Term Future Fund');
}

import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public';
import type { Database } from './types/supabase';

const supabaseUrl = 'https://emqmvubrovsmdfjrbqjr.supabase.co';
const supabaseKey = env.PUBLIC_SUPABASE_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey as string);

export async function getDonees() {
	const { data, error } = await supabase.from('donees').select().limit(25);
	if (error) {
		console.log(error);
	}
	return data ?? [];
}

export async function getDonations() {
	const { data, error } = await supabase
		.from('donations')
		.select('donation_id, donor, donee, donation_date, cause_area_array, cause_area, amount')
		.order('donation_date', { ascending: false });
	if (error) {
		console.log('error in getDonations', error);
	}

	return data ?? [];
}

export async function searchDonations(search: string) {
	const { data, error } = await supabase.rpc('search', { keyword: search });
	if (error) {
		console.log(error);
	}
	console.log(data);
	return data ?? [];
}

export async function getDonation(id: string) {
	const { data, error } = await supabase.from('donations').select().eq('donation_id', id).limit(1);
	if (error) {
		console.log(error);
	}
	return data ?? [];
}

type DonationInsert = Database['public']['Tables']['donations']['Insert'];
export async function createDonation(donation: DonationInsert) {
	const { data, error } = await supabase.from('donations').insert(donation).select();
	if (error) {
		console.log(error);
	}
	return data ?? [];
}

export async function getOrg(name: string) {
	const { data, error } = await supabase.from('donees').select().eq('donee', name).limit(1);
	if (error) {
		console.log(error);
	}
	return data ?? [];
}

export async function getIncomings(name: string) {
	const { data, error } = await supabase
		.from('donations')
		.select()
		.eq('donee', name)
		.order('donation_date', { ascending: false });
	if (error) {
		console.log('error in getIncomings', error);
	}
	return data ?? [];
}

export async function getOutgoings(name: string) {
	const { data, error } = await supabase
		.from('donations')
		.select()
		.eq('donor', name)
		.order('donation_date', { ascending: false });
	if (error) {
		console.log('error in getOutgoings', error);
	}
	return data ?? [];
}

export async function getDonors() {
	const { data, error } = await supabase.rpc('get_donors');
	if (error) {
		console.log('error in getDonors', error);
	}
	return data ?? [];
}

/*
export function cs_getDonors(data: []) {
		if (data) {
		let donors = new Map();
		for (let i = 0; i < data.length; i++) {
			if (donors.has(data[i].donor)) {
				donors.set(data[i].donor, {
					cause_areas: donors.get(data[i].donor).cause_areas,
					total: donors.get(data[i].donor).total + data[i].amount
				});
			} else {
				donors.set(data[i].donor, {
					cause_areas: data[i].cause_area_array,
					total: data[i].amount
				});
			}
		}
		return { data, donors };
	}

	return donors;
}
*/

export async function getRecipients() {
	const { data, error } = await supabase.rpc('get_recipients');
	if (error) {
		console.log('error in getRecipients', error);
	}
	return data ?? [];
}

/*
async function getCauseAreas() {
	const { data, error } = await supabase.from('donationsea').select();
	let causeAreas = [];
	if (data) {
		for (let i = 0; i < data.length; i++) {
			let uniformCA = data[i].cause_area.replaceAll('|', '/');
			if (data[i].cause_area == '\\N') {
				causeAreas.push({ id: data[i].donation_id, cause_area: null });
			} else {
				causeAreas.push({ id: data[i].donation_id, cause_area: uniformCA.split('/') });
			}
		}
		return causeAreas;
	} else {
		return [];
	}
}

export async function fixCauseAreas() {
	let causeAreas = await getCauseAreas();
	for (let i = 0; i < causeAreas.length; i++) {
		const { error } = await supabase
			.from('donations')
			.update({ cause_area_array: causeAreas[i].cause_area })
			.eq('donation_id', causeAreas[i].id);
		if (error) {
			console.log(error);
		}
		console.log('updated', causeAreas[i].id);
	}
}
*/

export async function sendFeedback(feedback: string, email: string) {
	const { error } = await supabase.from('feedback').insert({ feedback: feedback, email: email });
	if (error) {
		console.log(error);
	}
}

export async function getDonorNames() {
	const { data, error } = await supabase.rpc('get_donor_names');
	if (error) {
		console.log(error);
	}
	return data ?? [];
}

export async function getRecipientNames() {
	const { data, error } = await supabase.rpc('get_recipient_names');
	if (error) {
		console.log(error);
	}
	return data ?? [];
}

export type Donee = Database[];

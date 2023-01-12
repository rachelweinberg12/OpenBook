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
		.select()
		.order('donation_date', { ascending: false });
	if (error) {
		console.log(error);
	}
	console.log(data);
	return data ?? [];
}

export async function searchDonations(search: string) {
	const { data, error } = await supabase.rpc('search_donations', { keyword: search });
	if (error) {
		console.log(error);
	}
	return data ?? [];
}

export async function getDonation(id: string) {
	const { data, error } = await supabase.from('donations').select().eq('donation_id', id).limit(1);
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
	console.log('hello?');
	const { data, error } = await supabase.from('donations').select().eq('donee', name);
	if (error) {
		console.log(error);
	}
	return data ?? [];
}

export async function getOutgoings(name: string) {
	const { data, error } = await supabase.from('donations').select().eq('donor', name);
	if (error) {
		console.log(error);
	}
	return data ?? [];
}

export async function getDonors() {
	const { data, error } = await supabase.rpc('get_donors');
	if (error) {
		console.log(error);
	}
	return data ?? [];
}

export async function getRecipients() {
	const { data, error } = await supabase.rpc('get_recipients');
	if (error) {
		console.log(error);
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
	}
}
*/

export type Donee = Database[];
type DoneesResponse = Awaited<ReturnType<typeof getDonees>>;

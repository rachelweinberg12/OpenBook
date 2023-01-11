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
		.from('donationsea')
		.select()
		.order('donation_date', { ascending: false });
	if (error) {
		console.log(error);
	}
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
	const { data, error } = await supabase
		.from('donationsea')
		.select()
		.eq('donation_id', id)
		.limit(1);
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
	const { data, error } = await supabase.from('donationsea').select().eq('donee', name);
	if (error) {
		console.log(error);
	}
	console.log(data);
	return data ?? [];
}

export async function getOutgoings(name: string) {
	const { data, error } = await supabase.from('donationsea').select().eq('donor', name);
	if (error) {
		console.log(error);
	}
	return data ?? [];
}

/*
export async function fixAmounts() {
	const { error } = await supabase.from('donationsea').update({ amount:  }).eq('amount', '\\N');
	if (error) {
		console.log(error);
	}
}
*/

export async function getDonors() {
	const { data, error } = await supabase.from('donors').select();
	if (error) {
		console.log(error);
	}
	console.log(data);
	return data ?? [];
}

export async function getRecipients() {
	const { data, error } = await supabase.from('recipients').select();
	if (error) {
		console.log(error);
	}
	return data ?? [];
}

export type Donee = Database[];
type DoneesResponse = Awaited<ReturnType<typeof getDonees>>;

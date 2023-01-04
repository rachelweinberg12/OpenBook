import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';
import type { Database } from './types/supabase';

const supabaseUrl = 'https://emqmvubrovsmdfjrbqjr.supabase.co';
const supabaseKey = env.SUPABASE_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey as string);

export async function getDonations() {
	const { data, error } = await supabase.from('donationsea').select().limit(100);
	if (error) {
		console.log(error);
	}
	return data ?? [];
}

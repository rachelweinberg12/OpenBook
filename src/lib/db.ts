import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';
import type { Database } from './types/supabase';

const supabaseUrl = 'https://emqmvubrovsmdfjrbqjr.supabase.co';
const supabaseKey = env.SUPABASE_KEY;
console.log('supabase key is', supabaseKey);
const supabase = createClient<Database>(supabaseUrl, supabaseKey as string, {
	db: { schema: 'donations' }
});

export async function getDonees() {
	const { data, error } = await supabase.from('donees').select().limit(25);
	if (error) {
		console.log(error);
	}
	return data ?? [];
}

export type Donee = Database[];
type DoneesResponse = Awaited<ReturnType<typeof getDonees>>;

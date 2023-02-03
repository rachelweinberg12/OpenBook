import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public';
import type { Database } from './types/supabase';
import { sff_2022_donations } from './sff';

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
		.select('donation_id, donor, donee, donation_date, cause_array, amount')
		.order('donation_date', { ascending: false });
	if (error) {
		console.log('error in getDonations', error);
	}

	return data ?? [];
}

export async function searchDonations(search: string) {
	const { data, error } = await supabase.rpc('search_data', { keyword: search });
	if (error) {
		console.log('error in searchDonations', error);
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
		.select('donation_id, donor, donee, donation_date, cause_array, amount')
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
		.select('donation_id, donor, donee, donation_date, cause_array, amount')
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

export async function addOpenPhil() {
	const { data, error } = await supabase.from('openphilgrants').select();
	if (error) {
		console.log(error);
	}
	if (data) {
		for (let i = 0; i < data.length; i++) {
			// console.log(data[i]);
			let fixedCauseAreaArray = [];
			fixedCauseAreaArray.push(data[i].cause_area.toLowerCase());
			let fixedAmount = 0;
			if (data[i].amount != null) {
				// console.log(data[i].amount);
				fixedAmount = parseFloat(data[i].amount.replaceAll(',', '').replaceAll('$', ''));
			}
			let fixedDate = '';
			switch (data[i].date) {
				case 'December 2022':
					fixedDate = '2022-12-01';
					break;
				case 'November 2022':
					fixedDate = '2022-11-01';
					break;
				case 'October 2022':
					fixedDate = '2022-10-01';
					break;
				case 'September 2022':
					fixedDate = '2022-09-01';
					break;
				case 'August 2022':
					fixedDate = '2022-08-01';
					break;
				case 'July 2022':
					fixedDate = '2022-07-01';
					break;
				case 'June 2022':
					fixedDate = '2022-06-01';
					break;
				case 'May 2022':
					fixedDate = '2022-05-01';
					break;
				case 'April 2022':
					fixedDate = '2022-04-01';
					break;
				case 'March 2022':
					fixedDate = '2022-03-01';
					break;
				case 'February 2022':
					fixedDate = '2022-02-01';
					break;
				case 'January 2022':
					fixedDate = '2022-01-01';
					break;
				default:
					fixedDate = 'ignore';
					break;
			}
			// console.log(fixedDate, fixedAmount, fixedCauseAreaArray);
			if (fixedDate != 'ignore') {
				const { error } = await supabase.from('donations').insert({
					donor: 'Open Philanthropy',
					donee: data[i].recipient,
					amount: fixedAmount,
					donation_date: fixedDate,
					cause_area: data[i].cause_area.toLowerCase(),
					cause_area_array: fixedCauseAreaArray,
					notes: data[i].Grant
				});
				console.log('inserted:', data[i].recipient);
			}
		}
	}
}

export async function addEAF() {
	const { data, error } = await supabase.from('eafgrants').select();
	console.log('EAF running');
	if (error) {
		console.log(error);
	}
	if (data) {
		for (let i = 0; i < data.length; i++) {
			console.log(data[i]);
			let fixedCauseArea = '';
			switch (data[i].fund) {
				case 'EA Infrastructure Fund':
					fixedCauseArea = 'effective altruism';
					break;
				case 'Animal Welfare Fund':
					fixedCauseArea = 'animal welfare';
					break;
				case 'Long-Term Future Fund':
					fixedCauseArea = 'longtermism';
					break;
				default:
					fixedCauseArea = '';
					break;
			}
			let fixedDonor = 'Effective Altruism Funds: ' + data[i].fund;
			if (fixedDonor == 'Effective Altruism Funds: EA Infrastructure Fund') {
				fixedDonor = 'Effective Altruism Funds: Effective Altruism Infrastructure Fund';
			}
			let fixedCauseAreaArray = [];
			fixedCauseAreaArray.push(fixedCauseArea);
			let fixedAmount = 0;
			if (data[i].amount != null) {
				// console.log(data[i].amount);
				fixedAmount = parseFloat(data[i].amount.replaceAll(',', '').replaceAll('$', ''));
			}
			let fixedDate = '';
			switch (data[i].round) {
				case '2022 Q1':
					fixedDate = '2022-01-01';
					break;
				case '2022 Q2':
					fixedDate = '2022-04-01';
					break;
				case '2022 Q3':
					fixedDate = '2022-07-01';
					break;
				case '2022 Q4':
					fixedDate = '2022-10-01';
					break;
				default:
					fixedDate = 'ignore';
					break;
			}
			console.log(fixedDate, fixedAmount, fixedCauseAreaArray);
			if (fixedDate != 'ignore') {
				const { error } = await supabase.from('donations').insert({
					donor: fixedDonor,
					donee: data[i].recipient,
					amount: fixedAmount,
					donation_date: fixedDate,
					cause_area: fixedCauseArea,
					cause_area_array: fixedCauseAreaArray,
					intended_use_of_funds: data[i].description,
					notes:
						'The date listed on this grant is the start of the quarter when the grant was made, rather than the exact date.'
				});
				console.log('inserted:', data[i].recipient);
			}
		}
	}
}

export async function addSff() {
	const data = sff_2022_donations;

	// const fakeData = [data[0], data[1], data.at(-1) || data[0]];
	for (const row of data) {
		const [round, funder, recipient, amount, receiving_charity, purpose] = row;
		let fixedDate = '';
		let url = '';

		switch (round) {
			case 'SFF-2022-H1':
				fixedDate = '2022-06-01';
				url = 'https://survivalandflourishing.fund/sff-2022-h1-recommendations';
				break;
			case 'SFF-2022-H2':
				fixedDate = '2022-12-01';
				url = 'https://survivalandflourishing.fund/sff-2022-h2-recommendations';
				break;
			default:
				break;
		}

		if (fixedDate) {
			const { error } = await supabase.from('donations').insert({
				donor: funder,
				donee: recipient,
				amount: Number(amount),
				donation_date: fixedDate,
				cause_area: '',
				intended_use_of_funds: purpose,
				url: url,
				notes: `This grant was made as part of the Survival and Flourshing Fund round ${round}. The date listed on this grant is roughly when the round results were announced, rather than the exact date of funding.`
			});
			console.log('inserted:', recipient);
		}
	}
}

export async function getAllDonationData() {
	const { data, error } = await supabase
		.from('donations')
		.select(
			'donation_id, donor, donee, amount, donation_date, cause_array, amount_original_currency, original_currency, currency_conversion_date, currency_conversion_basis, fraction, donation_date_precision, donation_date_basis, url, donor_cause_area_url, notes, donation_process, intended_use_of_funds_category, intended_use_of_funds, intended_funding_timeframe_in_months, donor_donee_reason, donor_amount_reason, donor_timing_reason, donor_next_donation_thoughts, donor_retrospective, payment_modality, match_eligible, goal_amount, influencer, employer_match, matching_employer, special_donation_reason, donation_earmark, affected_countries, affected_states, affected_cities, affected_regions, donation_announcement_date, donation_announcement_date_precision, donation_announcement_url, predictions, is_contractwork'
		);
	if (error) {
		console.log(error);
	}
	return data ?? [];
}

export type Donee = Database[];

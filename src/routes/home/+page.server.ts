import { getDonees, getDonors, getDonations, getRecipients } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	console.log('what is happening!?');
	return {
		donees: await getDonees(),
		donations: await getDonations(),
		donors: await getDonors(),
		recipients: await getRecipients()
	};
};

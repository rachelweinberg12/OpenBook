import { getDonees, getDonors, getDonations, getRecipients } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		donees: await getDonees(),
		donations: await getDonations(),
		donors: await getDonors(),
		recipients: await getRecipients()
	};
};

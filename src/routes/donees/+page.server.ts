import { getDonees } from '$lib/db';
import { getDonations } from '$lib/db-public';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		donees: await getDonees(),
		donations: await getDonations()
	};
};

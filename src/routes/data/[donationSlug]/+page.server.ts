import type { PageServerLoad } from './$types';
import { getDonation } from '$lib/db';

export const load: PageServerLoad = ({ params }) => {
	return {
		donation: getDonation(params.donationSlug)
	};
};

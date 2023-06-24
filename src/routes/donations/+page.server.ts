import type { PageServerLoad } from './$types';
import { getDonorNames } from '$lib/db';
import { getRecipientNames } from '$lib/db';

export const load: PageServerLoad = async () => {
	const donorTable = await getDonorNames();
	const recipientTable = await getRecipientNames();
	return {
		donorNames: donorTable.map((row) => row.name),
		recipientNames: recipientTable.map((row) => row.name)
	};
};

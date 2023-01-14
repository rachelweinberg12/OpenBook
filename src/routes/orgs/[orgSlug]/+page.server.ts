import type { PageServerLoad } from './$types';
import { getOrg } from '$lib/db';
import { getIncomings } from '$lib/db';
import { getOutgoings } from '$lib/db';

export const load: PageServerLoad = async ({ params }) => {
	const name = decodeURI(params.orgSlug).replaceAll('^', '/');
	return {
		name: name,
		donee_data: await getOrg(name),
		incomings: await getIncomings(name),
		outgoings: await getOutgoings(name)
	};
};

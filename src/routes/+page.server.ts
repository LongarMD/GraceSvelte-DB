import db from '$lib/db';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	addFriend: async ({ request }: { request: Request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const age = formData.get('age');
		const interest = formData.get('interest');

		// Validate that the form values exist and are strings
		if (typeof name !== 'string' || typeof age !== 'string' || typeof interest !== 'string') {
			return fail(400, { error: 'All fields are required' });
		}

		await db.friend.create({
			data: {
				name,
				age: parseInt(age),
				interest
			}
		});

		return { success: true };
	},

	// New action to filter friends by interest and update URL query parameters.
	filterFriends: async ({ request }: { request: Request }) => {
		const formData = await request.formData();
		const interest = formData.get('interest');
		const filterValue = typeof interest === 'string' ? interest : null;
		let targetUrl = '/';
		if (filterValue) {
			targetUrl = `/?interest=${encodeURIComponent(filterValue)}`;
		}
		throw redirect(303, targetUrl);
	}
};

export async function load({ url }) {
	const interest = url.searchParams.get('interest');
	const filter = interest ? { interest } : {};
	const friends = await db.friend.findMany({ where: filter });
	return { friends, interest };
}

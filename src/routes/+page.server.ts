import db from '$lib/db';

export async function load() {
	const animals = await db.animal.findMany();
	return {
		animals
	};
}

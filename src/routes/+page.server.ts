import db from '$lib/db';

export async function load() {
	const tasks = await db.task.findMany();
	return {
		tasks
	};
}

import db from '$lib/db';
import type { RequestHandler } from '../$types';

export const PATCH: RequestHandler = async ({ request }) => {
	const { id, completed } = await request.json();
	await db.task.update({
		where: { id },
		data: { completed }
	});

	return new Response();
};

export const POST: RequestHandler = async ({ request }) => {
	const { title } = await request.json();
	await db.task.create({
		data: { title }
	});

	return new Response();
};

export const DELETE: RequestHandler = async ({ request }) => {
	const { id } = await request.json();
	await db.task.delete({
		where: { id }
	});

	return new Response();
};

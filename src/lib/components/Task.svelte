<script lang="ts">
	import type { Task } from '@prisma/client';

	export let task: Task;

	const updateTask = async () => {
		await fetch(`/api/todo`, {
			method: 'PATCH',
			body: JSON.stringify({ id: task.id, completed: task.completed })
		});
	};

	const deleteTask = async () => {
		await fetch(`/api/todo`, {
			method: 'DELETE',
			body: JSON.stringify({ id: task.id })
		});
		window.location.reload();
	};
</script>

<div class="flex gap-2 p-3 bg-gray-100 rounded-lg">
	<input type="checkbox" bind:checked={task.completed} on:change={updateTask} />
	<h2 class="text-lg font-bold {task.completed ? 'line-through' : ''}">{task.title}</h2>
	<button on:click={deleteTask}>Delete</button>
</div>

<script lang="ts">
	let title = '';

	const createTask = async () => {
		await fetch('/api/todo', {
			method: 'POST',
			body: JSON.stringify({ title })
		});
		window.location.reload();
	};
</script>

<form on:submit={createTask} class="flex gap-2 bg-gray-100 p-4 rounded-lg w-1/3">
	<input class="flex-1" type="text" bind:value={title} minlength="3" />
	<button type="submit">Create</button>
</form>

<script lang="ts">
	import Task from '$lib/components/Task.svelte';
	import CreateTask from '$lib/components/CreateTask.svelte';
	export let data;
	const { tasks } = data;
</script>

<div class="p-4 flex flex-col gap-4">
	<h1 class="text-3xl font-bold underline">Tasks</h1>
	<CreateTask />
	<div class="grid grid-cols-4 gap-4">
		{#each tasks as task}
			<Task {task} />
		{/each}
	</div>
</div>

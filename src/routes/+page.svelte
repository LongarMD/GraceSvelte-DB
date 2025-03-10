<script lang="ts">
	export let data;
</script>

<h1 class="text-3xl font-bold underline">Animals</h1>

<div class="flex flex-wrap gap-4 p-4">
	{#each data.animals as animal}
		<div class="w-1/3 bg-gray-100 p-4 rounded-lg">
			<h2>{animal.name} ({animal.age} years old)</h2>
			<img src={animal.image_url} alt={animal.name} />
		</div>
	{/each}
</div>

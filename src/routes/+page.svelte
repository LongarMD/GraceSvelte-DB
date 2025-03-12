<script lang="ts">
	export let data;
	const { friends, interest } = data;

	const interests = ['Sports', 'Music', 'Art', 'Technology', 'Reading', 'Travel'];
</script>

<h2 class="px-2 text-2xl font-bold">Friends</h2>

<!-- Updated Filter form -->
<form method="POST" action="?/filterFriends" class="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
	<div class="mb-4">
		<label for="interestFilter" class="block text-sm font-medium text-gray-700"
			>Filter by Interest</label
		>
		<select
			id="interestFilter"
			name="interest"
			class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
			on:change={(event) => event.currentTarget.form?.requestSubmit()}
		>
			<option value="" selected={!interest}>All</option>
			{#each interests as i}
				<option value={i} selected={i === interest}>{i}</option>
			{/each}
		</select>
	</div>
</form>

<form method="POST" action="?/addFriend" class="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		<div class="mb-4">
			<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
			<input
				type="text"
				id="name"
				name="name"
				required
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
			/>
		</div>

		<div class="mb-4">
			<label for="age" class="block text-sm font-medium text-gray-700">Age</label>
			<input
				type="number"
				id="age"
				name="age"
				required
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
			/>
		</div>

		<div class="mb-4">
			<label for="interest" class="block text-sm font-medium text-gray-700">Interest</label>
			<select
				id="interest"
				name="interest"
				required
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
			>
				<option value="">Select an interest</option>
				{#each interests as i}
					<option value={i}>{i}</option>
				{/each}
			</select>
		</div>
	</div>

	<button
		type="submit"
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	>
		Add Friend
	</button>
</form>

<div class="grid grid-cols-3 gap-4">
	{#each friends as friend}
		<div class="bg-white p-4 rounded-lg shadow-md">
			<h2 class="text-lg font-bold">{friend.name} ({friend.age})</h2>
			<p class="text-sm text-gray-600">{friend.interest}</p>
		</div>
	{/each}
</div>

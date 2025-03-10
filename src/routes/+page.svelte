<script lang="ts">
	let x = 0;

	function onClick() {
		x = x + 1;
	}
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>

<button class="p-2 bg-blue-500 text-white rounded-lg" on:click={onClick}>
	Kliknil si me {x}-krat
</button>

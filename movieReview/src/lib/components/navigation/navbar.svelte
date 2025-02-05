<script lang="ts">
	import { goto } from '$app/navigation';
	let isMenuOpen = false;
	import { searchQuery } from '$lib/stores/searchStore';
	let tempQuery = $searchQuery; // Temporary local variable
	import FilteredMovies from '../movies/FilteredMovies.svelte';
	import { CloseButton } from 'flowbite-svelte'; // Import the CloseCircleSolid icon

	function debounce(func, delay) {
		let timeout;
		return (...args) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => func(...args), delay);
		};
	}

	function handleSearch() {
		searchQuery.set(tempQuery); // Update the store after debounce
	}
	function clearSearch() {
		tempQuery = '';
		searchQuery.set(tempQuery); // Update the store after debounce
	}

	const debouncedSearch = debounce(handleSearch, 500); // 500ms delay
</script>

<main class=" bg-background mx-6 lg:mx-40 xl:mx-60">
	<nav class="bg-background mb-10 w-full">
		<div class="flex h-16 items-center justify-between">
			<div class="flex-shrink-0 cursor-pointer">
				<h1
					onclick={() => {
						goto('/');
					}}
					class="text-primary text-2xl font-bold"
				>
					ScreenCritique
				</h1>
			</div>
			<div class="hidden items-center space-x-4 sm:flex ">
				<!-- Search Bar -->
				<div class="relative flex  items-center">
					<input
						type="text"
						bind:value={tempQuery}
						placeholder="Film/Genre"
						class="focus:ring-primary/50 w-64 rounded-full bg-gray-800/50 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2"
						oninput={debouncedSearch}
						onkeydown={(e) => e.key === 'Enter' && handleSearch()}
					/>
					{#if tempQuery}
						<button
							type="button"
							class="absolute right-2 top-1/2 -translate-y-1/2 transform text-white"
							onclick={() => clearSearch()}
						>
							<CloseButton class="h-5 w-5" />
						</button>
					{/if}
				</div>
			</div>

			<div class="flex items-center sm:hidden">
				<button
					class="focus:ring-primary/50 rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2"
					onclick={() => (isMenuOpen = !isMenuOpen)}
				>
					<span class="sr-only">Open menu</span>
					{#if isMenuOpen}
						✕
					{:else}
						☰
					{/if}
				</button>
			</div>
		</div>

		{#if isMenuOpen}
			<div class="py-4 md:hidden">
				<div class="space-y-4">
					<div class="relative">
						<input
							type="text"
							bind:value={tempQuery}
							placeholder="Film/Genre"
							class="focus:ring-primary/50 w-64 rounded-full bg-gray-800/50 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2"
							oninput={debouncedSearch}
							onkeydown={(e) => e.key === 'Enter' && handleSearch()}
						/>
					</div>
				</div>
			</div>
		{/if}
	</nav>
	{#if $searchQuery}
		<div class="relative">
			<p class="border-secondary m-2 w-full border-b-2 text-xl font-medium">Search Results</p>
			<FilteredMovies />
		</div>
	{/if}
</main>

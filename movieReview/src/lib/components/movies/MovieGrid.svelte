<script lang="ts">
	// import { movies } from '$lib/stores/movieStore';
	import MovieCard from './MovieCard.svelte';
	import { movies } from '$lib/stores/moviesStore';
	import { searchQuery } from '$lib/stores/searchStore';
	searchQuery.set('')
	
</script>


<p class="text-xl font-medium border-b-2 border-secondary  lg:mx-40 xl:mx-60 py-2 mx-6">Movies</p>

<div
	class="grid grid-cols-2 gap-4 p-6 sm:grid-cols-3 md:grid-cols-4 lg:mx-40 lg:grid-cols-3 xl:mx-60 xl:grid-cols-4"
>

	{#each $movies as movie (movie.id)}
		<MovieCard {movie} />
	{/each}
</div>

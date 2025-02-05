<script lang="ts">
	import { searchResults } from '$lib/stores/searchStore';
	import MovieCard from './MovieCard.svelte';
</script>

<div class="relative mb-10 w-full ">
	<div class="flex snap-x overflow-x-auto snap-mandatory space-x-4 px-4">
		{#each $searchResults ?? [] as movie (movie.id)}
			<div class="w-60 shrink-0 snap-center">
				<MovieCard {movie} />
			</div>
		{/each}
	</div>

</div>

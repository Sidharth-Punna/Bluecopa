<script lang="ts">
	import type { Movie, Review } from '$lib/types/movies';
	import { movies } from '$lib/stores/moviesStore';
	import { Rating } from 'flowbite-svelte';
	import { derived } from 'svelte/store';

	const { movieID }: { movieID: number } = $props();

	const reviews = derived(movies, ($movies) => {
		const currentMovie = $movies.find((movie: Movie) => movie.id === movieID);
		return currentMovie ? currentMovie.reviews : []; // Update reviews
	});
</script>

<div class="mt-12">
	<h2 class="mb-6 text-2xl font-bold text-white">Reviews</h2>
	<div class="space-y-8">
		{#each $reviews as review}
			<div class=" rounded-lg border-2 border-[#27272a] px-5 py-2">
				<div class="flex justify-end">
					<Rating id="example-1" total={5} size={25} rating={review.rating} />
				</div>
				<p class="mb-4 italic {review.comment ? 'text-white' : 'text-gray-400 opacity-50 font-thin'}">
					{review.comment ? review.comment : 'No review by user'}
				</p>			</div>
		{/each}
	</div>
</div>

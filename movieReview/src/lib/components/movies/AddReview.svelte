<script lang="ts">
	import { get } from 'svelte/store';
	import type { Review } from '$lib/types/movies';
	import { movies } from '$lib/stores/moviesStore';
	let {
		movieId,
		isReviewModalOpen,
		handleClose
	}: { movieId: number; isReviewModalOpen: boolean; handleClose: () => void } = $props();

	let userRating = $state<number>(0);
	let userComment = $state<string>('');

	function handleRating(rating: number) {
		userRating = rating;
	}

	function closeModel() {
		userRating = 0;
		isReviewModalOpen = false;
		handleClose();
	}

	function submitReview() {
		const newReview: Review = {
			rating: userRating,
			comment: userComment
		};
		const currentMovies = get(movies);

		const updatedMovies = currentMovies.map((movie) => {
			if (movie.id === movieId) {
				return {
					...movie,
					reviews: [...movie.reviews, newReview]
				};
			}
			return movie;
		});

		movies.set(updatedMovies);

		// Clear the form
		userComment = '';
		userRating = 0;
		handleClose();
	}
</script>

{#if isReviewModalOpen}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
		<div class="w-full max-w-2xl rounded-lg bg-gray-800 p-6">
			<div class="flex">
				{#each Array(5) as _, i}
					<button
						class="text-2xl {i < userRating ? 'text-primary' : 'text-gray-600'}"
						onclick={() => handleRating(i + 1)}
					>
						★
					</button>
				{/each}
			</div>
			<h2 class="mb-4 text-2xl font-bold text-white">Write a Review</h2>
			<textarea
				bind:value={userComment}
				class="mb-4 h-32 w-full rounded-md bg-gray-700 p-4 text-white"
				placeholder="Write your review here..."
			></textarea>
			<div class="flex justify-end gap-4">
				<button
					class="rounded-md px-4 py-2 transition-colors hover:bg-gray-700"
					onclick={() => closeModel()}
				>
					Cancel
				</button>
				<button
					class="hover:bg-primary/80 rounded-md bg-[#32CD32] px-4 py-2 font-bold text-white transition-colors"
					onclick={() => submitReview()}
				>
					Post Review
				</button>
			</div>
		</div>
	</div>
{/if}

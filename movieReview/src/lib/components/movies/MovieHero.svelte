<script lang="ts">
	import type { Movie, Review } from '$lib/types/movies';
	import { Rating } from 'flowbite-svelte';
	import AddReview from './AddReview.svelte';
	let isReviewModalOpen = $state<boolean>(false);
	function handleClose() {
		isReviewModalOpen = false; // Update parent state when the modal is closed
	}

	const { movie }: { movie: Movie } = $props();
		let averageRating: number = movie.reviews.length
    ? Math.round(
        (movie.reviews.reduce((acc:number, review:Review) => acc + review.rating, 0) / movie.reviews.length) * 10
    ) / 10
    : 0; 
</script>

<div class="container relative z-10 mx-auto -mt-72 px-10">
	<div class="flex flex-col gap-8 sm:flex-row">
		<!-- Poster -->
		<div class="sm:justify:start flex w-64 justify-center sm:flex-shrink-0">
			<img src={movie.poster} alt={movie.title} class="w-full rounded-md shadow-lg border-2 border-secondary" />
		</div>

		<!-- Details -->
		<div class="flex-1">
			<h1 class="mb-2 text-4xl font-bold text-white">{movie.title}</h1>
			<p class="mb-4 text-xl text-gray-400">{movie.releaseDate}</p>

			<div class="mb-6 flex items-center gap-4">
				<Rating
					class=" flex flex-row items-center text-sm font-thin text-white"
					count
					rating={averageRating}
				/>
				<div class="rounded-full bg-gray-800 px-3 py-1 text-sm text-white">
					{movie.genre}
				</div>
			</div>

			<p class="mb-6 text-gray-300">{movie.description}</p>

			<div class="mb-6">
				<p class="text-gray-400">Director: <span class="text-white">{movie.director}</span></p>
			</div>

			<div class="mb-8 flex items-center gap-4">
				<button
					class="hover:bg-primary/80 rounded-md bg-[#32CD32] px-4 py-2 font-bold text-white transition-colors"
					onclick={() => (isReviewModalOpen = true)}
				>
					Review
				</button>
				{#if isReviewModalOpen}
					<AddReview {handleClose} {isReviewModalOpen} movieId={movie.id} />
				{/if}
			</div>
		</div>
	</div>
</div>

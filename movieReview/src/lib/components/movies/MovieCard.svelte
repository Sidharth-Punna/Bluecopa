<script lang="ts">
    import { goto } from '$app/navigation';
    import { Card, Button, Toggle, Rating } from 'flowbite-svelte';
	import type { Movie,Review } from '$lib/types/movies';
	const {movie} = $props<{movie:Movie}>()
    import { searchQuery } from '$lib/stores/searchStore';
	let averageRating: number = movie.reviews.length
    ? Math.round(
        (movie.reviews.reduce((acc:number, review:Review) => acc + review.rating, 0) / movie.reviews.length) * 10
    ) / 10
    : 0; 



    function handleClick() {
        searchQuery.set('');
        goto(`/movies/${movie.id}`);
        invalidateAll: true 
    }


</script>


<Card class="w-full h-full flex flex-col rounded-none border-[#27272a] p-2 transition-all duration-500 ease-in-out hover:scale-95" on:click={handleClick}>
    <div class="aspect-[2/3] w-full overflow-hidden rounded-t-lg mb-1">
        {#if movie.poster}
        <img
            class="h-full w-full object-cover"
            src={movie.poster}
            alt={movie.title}
        />
    {:else}
        <div class="flex items-center justify-center h-full w-full text-white text-center p-2 opacity-80">
            {movie.title}
        </div>
    {/if}
    </div>
    <h5 class=" text-lg  font-bold tracking-tight text-white">{movie.title}</h5>
    <p class="mb-2 text-base text-gray-600">{movie.director}</p>
    <div class="flex h-max flex-row items-center mb-none">
        <p class="text-sm mr-2 font-medium text-white">{movie.releaseDate}</p>
        <Rating class=" text-sm flex flex-row items-center font-thin text-white" count rating={averageRating} />
    </div>
</Card>
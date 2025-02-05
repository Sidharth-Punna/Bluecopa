<script lang="ts">
    import MovieBanner from "$lib/components/movies/MovieBanner.svelte";
    import MovieHero from "$lib/components/movies/MovieHero.svelte";
    import MovieReviews from "$lib/components/movies/MovieReviews.svelte";
    import type { Movie } from "$lib/types/movies.js";
    const {data} = $props()
    const movie=$state<Movie>(data.movie)
  
</script>

<div class="relative min-h-screen bg-background lg:mx-40  xl:mx-60 ">
    <MovieBanner backdrop={movie.backdrop} title={movie.title}/>
    <MovieHero movie={movie}/>
    <MovieReviews movieID ={movie.id}/>
</div>
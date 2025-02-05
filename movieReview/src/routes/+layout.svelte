<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navigation/navbar.svelte';
	let { children } = $props();
	import type { Movie } from '$lib/types/movies';
	import { movies } from '$lib/stores/moviesStore';
	
</script>

<div class="relative">
	<Navbar/>
</div>
{@render children()}

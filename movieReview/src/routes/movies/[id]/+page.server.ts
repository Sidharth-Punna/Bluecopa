import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { movies } from '$lib/stores/moviesStore';
import type { Movie } from '$lib/types/movies';

export function load({ params }: { params: { id: string } }) {
	const movie:Movie|undefined = get(movies).find((movie:Movie) => movie.id ==Number( params.id));

	if (!movie) {
		throw error(404, 'Movie not found');
	}
	return {
		movie,
	};
}

// src/lib/stores/searchStore.ts
import { writable, derived } from 'svelte/store';
import { movies } from './moviesStore';
export const searchQuery = writable<string>('');

export const searchResults = derived(
  [searchQuery, movies], 
  ([$searchQuery, $movies]) => {
    // If no search query, return all movies
    if (!$searchQuery.trim()) return ;
    
    return $movies.filter(movie => 
      movie.title.toLowerCase().includes($searchQuery.toLowerCase()) ||
      movie.genre.toLowerCase().includes($searchQuery.toLowerCase()) );
    
  }
);
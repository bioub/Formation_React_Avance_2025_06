import { createAction } from '@reduxjs/toolkit';

export const updateSearchTerm = createAction('updateSearchTerm');
export const fetchPokemons = createAction('fetchPokemons');
export const fetchPokemonsSuccess = createAction('fetchPokemonsSuccess');
export const fetchPokemonsError = createAction('fetchPokemonsError');
export const togglePokemonSelection = createAction('togglePokemonSelection');
import { createReducer } from '@reduxjs/toolkit';
import { fetchPokemons, fetchPokemonsError, fetchPokemonsSuccess, updateSearchTerm } from './actions';

const initialState = {
  pokemons: {
    searchTerm: '',
    loading: false,
    data: [],
    error: null,
    selectedPokemonIds: [],
  }
};

export const pokemonsReducer = createReducer(initialState.pokemons, (builder) => {
  builder
    .addCase(updateSearchTerm, (state, action) => {
      state.searchTerm = action.payload;
    })
    .addCase(fetchPokemons, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchPokemonsSuccess, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(fetchPokemonsError, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

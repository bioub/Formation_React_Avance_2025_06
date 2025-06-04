import { expect, test } from 'vitest';
import { pokemonsReducer } from './reducer';

test('togglePokemonSelection should toggle selection of a Pokemon', () => {
  const state = {
    searchTerm: '',
    loading: false,
    data: [],
    error: null,
    selectedPokemonIds: [],
  };

  const action = {
    type: 'togglePokemonSelection',
    payload: 1,
  };

  expect(pokemonsReducer(state, action)).toEqual({
    searchTerm: '',
    loading: false,
    data: [],
    error: null,
    selectedPokemonIds: [1],
  });
});

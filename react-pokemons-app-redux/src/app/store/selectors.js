export function searchTermSelector(state) {
  return state.pokemons.searchTerm;
}

export function pokemonsLoadingSelector(state) {
  return state.pokemons.loading;
}

// createSelector pourrait etre utiliser
// utilise la memoisation au niveau d'un selecteur
export function filteredPokemonsSelector(state) {
  const searchTerm = state.pokemons.searchTerm.toLowerCase();
  return state.pokemons.data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );
}

export function selectedPokemonIdsSelector(state) {
  return state.pokemons.selectedPokemonIds;
}

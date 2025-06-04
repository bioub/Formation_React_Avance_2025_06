import { useState, useEffect, useContext, useCallback, useMemo } from 'react';
import PokemonCard from '../components/pokemon-card';
import { getPokemons } from '../services/pokemon-service';
import { Link, Navigate } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
import { isAuthenticated } from '../services/authentication-service';
import List from '../components/list';
import { CompareContext } from '../helpers/compare-context';
import { useDispatch, useSelector } from 'react-redux';
import { filteredPokemonsSelector, pokemonsLoadingSelector, searchTermSelector } from '../store/selectors';
import { fetchPokemons, fetchPokemonsError, fetchPokemonsSuccess, updateSearchTerm } from '../store/actions';
import Loader from '../components/loader';

function PokemonList() {
  const dispatch = useDispatch();
  const loading = useSelector(pokemonsLoadingSelector);
  const term = useSelector(searchTermSelector);
  const filteredPokemons = useSelector(filteredPokemonsSelector);
  const { selectedPokemonIds } = useContext(CompareContext);

  useEffect(() => {
    dispatch(fetchPokemons());
    getPokemons()
      .then((pokemons) => dispatch(fetchPokemonsSuccess(pokemons)))
      .catch((error) => dispatch(fetchPokemonsError(error)));
  }, []);

  // Version with useCallback
  const renderItem = useCallback((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />, []);

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          <PokemonSearch term={term} onTermChange={(newTerm) => dispatch(updateSearchTerm(newTerm))} />
          {loading && <Loader />}
          <List
            items={filteredPokemons}
            renderItem={renderItem}
          />
          {/* {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))} */}
          <button onClick={() => {
            import('xlsx').then(({ utils, writeFile }) => {
              const worksheet = utils.json_to_sheet(filteredPokemons);
              const workbook = utils.book_new();
              utils.book_append_sheet(workbook, worksheet, 'Pokemons');
              writeFile(workbook, 'pokemons.xlsx');
            });
          }}>Export Excel</button>
        </div>
      </div>
      <Link
        className="btn-floating btn-large waves-effect waves-light red z-depth-3"
        style={{ position: 'fixed', bottom: '25px', right: '25px' }}
        to="/pokemon/add"
      >
        <i className="material-icons">add</i>
      </Link>
      {selectedPokemonIds.length === 2 && (
        <Link
          className="btn-floating btn-large waves-effect waves-light blue z-depth-3"
          style={{ position: 'fixed', bottom: '25px', right: '100px' }}
          to="/pokemon/compare"
        >
          <i className="material-icons">compare</i>
        </Link>
      )}
    </div>
  );
}

export default PokemonList;

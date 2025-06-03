import { useState, useEffect, useContext, useCallback, useMemo } from 'react';
import PokemonCard from '../components/pokemon-card';
import { getPokemons } from '../services/pokemon-service';
import { Link, Navigate } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
import { isAuthenticated } from '../services/authentication-service';
import List from '../components/list';
import { CompareContext } from '../helpers/compare-context';
// import { utils, writeFile } from "xlsx";

function PokemonList() {
  const [term, setTerm] = useState('');
  const { selectedPokemonIds } = useContext(CompareContext);

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((pokemons) => setPokemons(pokemons));
  }, []);

  // const renderItem = useMemo(() => {
  //   return (pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />;
  // }, []);

  // Version with useCallback
  const renderItem = useCallback((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />, []);

  const filteredPokemons = useMemo(() => {
    return pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(term.toLowerCase()));
  }, [pokemons, term]);

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          <PokemonSearch term={term} onTermChange={setTerm} />
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

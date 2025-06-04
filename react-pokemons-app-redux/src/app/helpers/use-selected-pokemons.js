import { useContext, useEffect, useState } from 'react';
import { getPokemon } from '../services/pokemon-service';
import { CompareContext } from './compare-context';

// export function useSelectedPokemons() {
//   const { selectedPokemonIds } = useContext(CompareContext);

//   const [pokemon1, setPokemon1] = useState(null);
//   const [pokemon2, setPokemon2] = useState(null);

//   useEffect(() => {
//     getPokemon(selectedPokemonIds[0]).then((pokemon) => setPokemon1(pokemon));
//     getPokemon(selectedPokemonIds[1]).then((pokemon) => setPokemon2(pokemon));
//   }, []);

//   return [pokemon1, pokemon2];
// }

// export function useSelectedPokemons() {
//   const { selectedPokemonIds } = useContext(CompareContext);

//   const [pokemons, setPokemons] = useState([]);

//   useEffect(() => {
//     async function fetchPokemons() {
//       const pokemons = await Promise.all(
//         selectedPokemonIds.map((id) => getPokemon(id))
//       );

//       setPokemons(pokemons);
//     }
//     fetchPokemons();
//   }, []);

//   return pokemons;
// }

export function useSelectedPokemons() {
  const { selectedPokemonIds } = useContext(CompareContext);

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    Promise.all(selectedPokemonIds.map((id) => getPokemon(id))).then(
      (fetchedPokemons) => {
        setPokemons(fetchedPokemons);
      }
    );
  }, []);

  return pokemons;
}

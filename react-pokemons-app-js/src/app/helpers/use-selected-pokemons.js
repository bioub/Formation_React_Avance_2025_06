import { useEffect, useState } from "react";
import { getPokemon } from "../services/pokemon-service";

export function useSelectedPokemons() {
  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);

  useEffect(() => {
    getPokemon(3).then((pokemon) => setPokemon1(pokemon));
    getPokemon(4).then((pokemon) => setPokemon2(pokemon));
  }, []);

  return [pokemon1, pokemon2];
}
import { useEffect } from 'react';
import PokemonCardDetails from '../components/pokemon-card-details';
import { getPokemon } from '../services/pokemon-service';


// Une fonction pure :
// - ne modifie pas les données d'entrée
// - ne dépend pas de l'état externe / ne produit pas d'effets de bord (pas de side-effects)
// - retourne toujours le même résultat pour les mêmes entrées
export default function PokemonCompare() {
  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);

  useEffect(() => {
    getPokemon(3).then((pokemon) => setPokemon1(pokemon));
    getPokemon(4).then((pokemon) => setPokemon2(pokemon));
  }, []);

  return (
    <div className="row">
      <div className="col s6">
        <PokemonCardDetails pokemon={pokemon1} />
      </div>
      <div className="col s6">
        <PokemonCardDetails pokemon={pokemon2} />
      </div>
    </div>
  );
}

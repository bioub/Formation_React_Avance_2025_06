import PokemonCardDetails from '../components/pokemon-card-details';
import { useSelectedPokemons } from '../helpers/use-selected-pokemons';

// Une fonction pure :
// - ne modifie pas les données d'entrée
// - ne dépend pas de l'état externe / ne produit pas d'effets de bord (pas de side-effects)
// - retourne toujours le même résultat pour les mêmes entrées
export default function PokemonCompare() {  
  const [pokemon1, pokemon2] = useSelectedPokemons();

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

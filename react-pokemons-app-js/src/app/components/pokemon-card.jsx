import { useNavigate } from 'react-router-dom';
import './pokemon-card.css';
import { formatDate, formatType } from '../helpers';
import { useContext } from 'react';
import { CompareContext } from '../helpers/compare-context';

function PokemonCard({ pokemon }) {
  const { selectedPokemonIds, togglePokemonSelection } = useContext(CompareContext);
  const navigate = useNavigate();

  function goToPokemon(id) {
    navigate(`/pokemons/${id}`);
  }

  return (
    <div className="col s6 m4">
      <div className="card horizontal">
        <div className="card-image">
          <img src={pokemon.picture} alt={pokemon.name} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p>
              <small>{formatDate(pokemon.created)}</small>
            </p>
            {pokemon.types?.map((type) => (
              <span key={type} className={formatType(type)}>
                {type}
              </span>
            ))}
            <button onClick={() => goToPokemon(pokemon.id ?? 0)}>Details</button>
            <label>
              <input type="checkbox" checked={selectedPokemonIds.includes(pokemon.id)} onChange={() => togglePokemonSelection(pokemon.id)} />
              <span>Comparer</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;

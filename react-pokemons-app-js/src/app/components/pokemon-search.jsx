import { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchPokemon } from '../services/pokemon-service';

function PokemonSearch({ term, onTermChange }) {
  function handleInputChange(event) {
    const term = event.target.value;
    onTermChange(term);
  }

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-content">
            <div className="input-field">
              <input
                type="text"
                placeholder="Rechercher un pokémon"
                value={term}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonSearch;

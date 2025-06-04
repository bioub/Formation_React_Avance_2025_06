import { DEPOSIT, WITHDRAW } from './constants.js';
import { combineReducers } from 'redux';

const initialState = {
  amount: 0,
  // todos: [],
  // pokemons: {
  //   loading: true,
  //   data: [],
  //   error: null,
  //   idsToCompare: [],
  // }
};

// Bonne pratique 
// écrire plusieurs reducers par clé racine du state
// ici on pourrait avoir un reducer pour les todos, un pour les pokemons, etc.

function amountReducer(state = initialState.amount, action) {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload;
    case WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
}

// Pour générer le reducer principal
// on peut utiliser combineReducers de redux
export const rootReducer = combineReducers({
  amount: amountReducer,
  // todos: todosReducer,
  // pokemons: pokemonsReducer,
});
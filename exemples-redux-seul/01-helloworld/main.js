import { legacy_createStore } from 'redux';

const initialState = {
  amount: 0,
};

// Fonction Pure :
// - appelée avec des paramètres données, on aura toujours le même retour
// - pas d'effets de bord, pas de dépendances externes (pas de fetch, pas de console.log, pas de modification de variables globales, etc.)
// - pas de modification de l'état ou de l'action, on retourne un nouvel état
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'deposit':
      return {
        ...state,
        amount: state.amount + action.count,
      };
    case 'withdraw':
      return {
        ...state,
        amount: state.amount - action.count,
      };
    default:
      // Return the current state if no action matches
      return state;
  }
}

const store = legacy_createStore(reducer);

store.subscribe(() => {
  console.log('Amount:', store.getState().amount);
});

console.log('Initial state:', store.getState());
store.dispatch({ type: 'deposit', count: 10 });
store.dispatch({ type: 'deposit', count: 30 });
store.dispatch({ type: 'withdraw', count: 5 });

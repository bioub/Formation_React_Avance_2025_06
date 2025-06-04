import { configureStore } from '@reduxjs/toolkit';
import { amountReducer } from './reducer.js';
import { amountSelector } from './selectors.js';
import { deposit, withdraw } from './actions.js';

// Configure le store avec les reducers
// et les middlewares (plugins) par défaut de Redux Toolkit
// Pas besoin de combineReducers, RTK le fait automatiquement
// Pas besoin de legacy_createStore, RTK utilise configureStore
// Pas besoin de thunk, RTK l'inclut par défaut
// Pas besoin de logger, RTK l'inclut par défaut en mode développement
// Pas besoin de immer, RTK l'inclut par défaut pour la gestion immuable de l'état
// Pas besoin de devTools, RTK l'inclut par défaut en mode développement
const store = configureStore({
  reducer: { // appelle déjà combineReducers
    amount: amountReducer
    // todos: todosReducer, // si on avait un reducer pour les todos
    // pokemons: pokemonsReducer, // si on avait un reducer pour les pokémons
  },
});

store.subscribe(() => {
  console.log('Amount:', amountSelector(store.getState()));
});

console.log('Initial state:', store.getState());

store.dispatch(deposit(10));
store.dispatch(deposit(30));
store.dispatch(withdraw(5));

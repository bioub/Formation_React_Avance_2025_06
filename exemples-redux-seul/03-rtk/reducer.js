import { createReducer } from '@reduxjs/toolkit';
import { deposit, withdraw } from './actions.js';

const initialState = {
  amount: 0,
  // todos: [],
  pokemons: {
    loading: true,
    data: [],
    error: null,
    idsToCompare: [],
  }
};

// Bonne pratique 
// écrire plusieurs reducers par clé racine du state
// ici on pourrait avoir un reducer pour les todos, un pour les pokemons, etc.

// export function amountReducer(state = initialState.amount, action) {
//   switch (action.type) {
//     case deposit.type:
//       return state + action.payload;
//     case withdraw.type:
//       return state - action.payload;
//     default:
//       return state;
//   }
// }

export const amountReducer = createReducer(initialState.amount, (builder) => {
  builder
    .addCase(deposit, (state, action) => state + action.payload)
    .addCase(withdraw, (state, action) => state - action.payload);
});

/*
export const pokemonsReducer = createReducer(initialState.pokemons, (builder) => {
  builder
    .addCase('pokemons/fetchStart', (state) => {
      // Redux Toolkit utilise en interne une bibliothèque appelée Immer
      // qui permet de transformer automatiquement du code muable comme si dessous
      // en code immuable, sans avoir à utiliser (return {...state, ...})
      state.loading = true;
      state.error = null;
      // return {
      //   ...state,
      //   loading: true,
      //   error: null,
      // };
    })
    .addCase('pokemons/fetchSuccess', (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase('pokemons/fetchError', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});
*/
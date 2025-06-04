import { configureStore } from '@reduxjs/toolkit';
import { amountSelector } from './selectors.js';
import { amountReducer, deposit, withdraw } from './slices.js';

const store = configureStore({
  reducer: {
    amount: amountReducer
  },
});

store.subscribe(() => {
  console.log('Amount:', amountSelector(store.getState()));
});

console.log('Initial state:', store.getState());

store.dispatch(deposit(10));
store.dispatch(deposit(30));
store.dispatch(withdraw(5));

import { legacy_createStore } from 'redux';
import { rootReducer } from './reducer.js';
import { amountSelector } from './selectors.js';
import { deposit, withdraw } from './actions.js';

const store = legacy_createStore(rootReducer);

store.subscribe(() => {
  console.log('Amount:', amountSelector(store.getState()));
});

console.log('Initial state:', store.getState());

store.dispatch(deposit(10));
store.dispatch(deposit(30));
store.dispatch(withdraw(5));

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  amount: 0,
};

const amountSlice = createSlice({
  name: 'amount', // 2 choses: la clé racine du state et le prefixe des types d'action (amount/deposit, amount/withdraw)
  initialState: initialState.amount,
  reducers: { // à la fois le reducer et les actions
    deposit: (state, action) => state + action.payload,
    withdraw: (state, action) => state - action.payload,
  },
});

export const { deposit, withdraw } = amountSlice.actions; // exporte les actions creators
export const amountReducer = amountSlice.reducer; // exporte le reducer

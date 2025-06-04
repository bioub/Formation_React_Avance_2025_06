import { createAction } from '@reduxjs/toolkit';

export const deposit = createAction('deposit');
export const withdraw = createAction('withdraw');

// deposit(10).type; // 'deposit'
// deposit(10).payload; // 10
// deposit.type; // 'deposit'
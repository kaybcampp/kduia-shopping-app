// AppContext.js
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';

export const AppContext = createContext();

const initialState = {
  totalBudget: 2000,
  remainingBudget: 2000,
  spentSoFar: 0,
  departments: [
    { name: 'Marketing', budget: 50 },
    { name: 'Finance', budget: 300 },
    { name: 'Sales', budget: 70 },
    { name: 'Human Resources', budget: 40 },
    { name: 'IT', budget: 500 },
  ],
  Location: '£',
};

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext.js';
import Budget from './components/Budget.js';
import AllocationTable from './components/AllocationTable.js';
import ChangeAllocation from './components/ChangeAllocation.js';
import ExpenseItem from './components/ExpenseItem.js';
import Location from './components/Location.js';

const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>Company's Budget Allocation</h1>
        <Budget />
        <h3 className='mt-3'>Allocation</h3>
        <AllocationTable />
        <h3 className='mt-3'>Change Allocation</h3>
        <ChangeAllocation />
        <h3 className='mt-3'>Location</h3>
        <Location />
      </div>
    </AppProvider>
  );
};

export default App;

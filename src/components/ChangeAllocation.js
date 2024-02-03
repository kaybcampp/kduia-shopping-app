// ChangeAllocation.js
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext.js';

const ChangeAllocation = () => {
  const { dispatch } = useContext(AppContext);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [actionType, setActionType] = useState('ADD');
  const [amount, setAmount] = useState('');

  const handleAllocationChange = () => {
    if (!selectedDepartment || !amount) {
      alert('Please select a department and enter a valid amount.');
      return;
    }

    dispatch({
      type: 'UPDATE_DEPARTMENT_BUDGET',
      payload: { departmentName: selectedDepartment, amount: parseInt(amount), actionType },
    });
  };

  return (
    <div>
      <div className='row'>
        <div className='col-sm'>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <label className='input-group-text' htmlFor='departmentSelect'>
                Department
              </label>
            </div>
            <select
              className='custom-select'
              id='departmentSelect'
              onChange={(event) => setSelectedDepartment(event.target.value)}
            >
              <option defaultValue>Choose...</option>
              <option value='Marketing'>Marketing</option>
              <option value='Finance'>Finance</option>
              <option value='Sales'>Sales</option>
              <option value='Human Resources'>Human Resources</option>
              <option value='IT'>IT</option>
            </select>
          </div>
        </div>
        <div className='col-sm'>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <label className='input-group-text' htmlFor='allocationSelect'>
                Allocation
              </label>
            </div>
            <select
              className='custom-select'
              id='allocationSelect'
              onChange={(event) => setActionType(event.target.value)}
            >
              <option value='ADD'>Add</option>
              <option value='REDUCE'>Subtract</option>
            </select>
          </div>
        </div>
        <div className='col-sm'>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <label className='input-group-text' htmlFor='amountInput'>
                Amount
              </label>
            </div>
            <input
              type='number'
              id='amountInput'
              className='form-control'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className='col-sm'>
          <button className='btn btn-primary' type='button' onClick={handleAllocationChange}>
            Change Allocation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeAllocation;

// AllocationTable.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext.js';

const AllocationTable = () => {
  const { departments, dispatch } = useContext(AppContext);

  const increaseBudget = (departmentName) => {
    dispatch({
      type: 'UPDATE_DEPARTMENT_BUDGET',
      payload: { departmentName, amount: 10, actionType: 'ADD' },
    });
  };

  const reduceBudget = (departmentName) => {
    dispatch({
      type: 'UPDATE_DEPARTMENT_BUDGET',
      payload: { departmentName, amount: 10, actionType: 'REDUCE' },
    });
  };

  return (
    <table className='table'>
      <thead className='thead-light'>
        <tr>
          <th scope='col'>Department</th>
          <th scope='col'>Allocated Budget</th>
          <th scope='col'>Increase by 10</th>
          <th scope='col'>Decrease by 10</th>
        </tr>
      </thead>
      <tbody>
        {departments.map((department) => (
          <tr key={department.name}>
            <td>{department.name}</td>
            <td>{department.budget}</td>
            <td>
              <button className='btn btn-success' onClick={() => increaseBudget(department.name)}>
                +10
              </button>
            </td>
            <td>
              <button className='btn btn-danger' onClick={() => reduceBudget(department.name)}>
                -10
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllocationTable;

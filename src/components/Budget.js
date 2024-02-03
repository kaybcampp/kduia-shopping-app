// Budget.js
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { totalBudget, remainingBudget, spentSoFar, dispatch } = useContext(AppContext);
    const [budgetInput, setBudgetInput] = useState('');

    const handleBudgetChange = () => {
        const newBudget = parseInt(budgetInput);

        if (!isNaN(newBudget)) {
            dispatch({
                type: 'UPDATE_TOTAL_BUDGET',
                payload: newBudget,
            });
        } else {
            alert('Please enter a valid numerical value for the budget.');
        }
    };

    return (
        <div className='row mt-3 align-items-center'> {/* Added align-items-center for vertical alignment */}
            <div className='col-sm'>
                <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                        <label className='input-group-text' htmlFor='totalBudgetInput'>
                            Budget
                        </label>
                    </div>
                    <input
                        type='number'
                        id='totalBudgetInput'
                        className='form-control'
                        value={budgetInput}
                        onChange={(e) => setBudgetInput(e.target.value)}
                    />
                    <div className='input-group-append'>
                        <button className='btn btn-primary' type='button' onClick={handleBudgetChange}>
                            Set Budget
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-sm'>
                <div className='alert alert-primary'>
                    <span>Remaining: {remainingBudget}</span>
                </div>
            </div>
            <div className='col-sm'>
                <div className='alert alert-primary'>
                    <span>Spent so far: {spentSoFar}</span>
                </div>
            </div>
        </div>
    );
};

export default Budget;

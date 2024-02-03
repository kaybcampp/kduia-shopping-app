// AppReducer.js
const AppReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_QUANTITY':
        // Handle adding quantity logic
        return { ...state, /* updated state */ };

      case 'RED_QUANTITY':
        // Handle reducing quantity logic
        return { ...state, /* updated state */ };

      case 'DELETE_ITEM':
        // Handle deleting item logic
        return { ...state, /* updated state */ };

      case 'CHG_LOCATION':
        // Handle changing location logic
        return { ...state, Location: action.payload };

      case 'UPDATE_DEPARTMENT_BUDGET':
        // Handle updating department budget logic
        const { departmentName, amount, actionType } = action.payload;
        const updatedDepartments = state.departments.map((dept) => {
          if (dept.name === departmentName) {
            if (actionType === 'ADD') {
              dept.budget += amount;
              state.remainingBudget -= amount;
              state.spentSoFar += amount;
            } else if (actionType === 'REDUCE') {
              dept.budget -= amount;
              state.remainingBudget += amount;
              state.spentSoFar -= amount;
            }
          }
          return dept;
        });

        return { ...state, departments: updatedDepartments };

      // Add more cases as needed for your specific application

      default:
        return state;
    }
  };

  export default AppReducer;

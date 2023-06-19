import React from 'react'

const ExpenseFilter = (props) =>{

const dropdownChangeHandler = (event)=>{
    props.onChangeFilter(event.target.value);

};
  return (
    <div className='expense-filter'>
        <div className='expense-filter__control'>
            <label>Filter by year</label>
            <select value={props.selected} onChange={dropdownChangeHandler} >
                <option value= '2022'>2022</option>
                <option value= '2023'>2023</option>
                <option value= '2024'>2024</option>
                <option value= '2025'>2025</option>
            </select>
        </div>

    </div>
  );
};
export default ExpenseFilter;

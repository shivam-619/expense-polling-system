import { useState } from 'react'

import './ExpenseForm.css'
const ExpenseForm = () => {
    const [enteredTitle,setenteredTitle]=useState('');
    const [enteredAmount,setenteredmount]=useState('');
    const [enteredDate,setenteredDate]=useState('');

    const titleChangeHandler = (event)=>{
        setenteredTitle(event.target.value);
    };
    const amountChangeHandler= (event)=>{
        setenteredmount(event.target.value);
    };
    const dateChangeHandler=(event)=>{
        setenteredDate(event.target.value);
    };

    const submitHandler= (event) =>{
        event.preventDefault();
        const expenseData= {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
        setenteredTitle('');
        setenteredmount('');
        setenteredDate('');
    };


    return <form onSubmit={submitHandler}> 
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value= {enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>date</label>
                <input type='date' min='2019-01-01' max='2023-01-01' value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense-actions'>
            <button type='submit'>Add Expenses</button>
        </div>
    </form>
};


export default ExpenseForm;

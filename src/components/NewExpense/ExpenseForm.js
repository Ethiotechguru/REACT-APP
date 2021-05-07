import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }
    const amountChangeHandler = (e) => {
        setAmount(e.target.value);
    }
    const dateChangeHandler = (e => {
        setDate(e.target.value)
    })
    const submitHandler = (e)=>{
        e.preventDefault();
        
        const expenseData = {
            itemDesc:title,
            itemCost:amount,
            date:new Date(date),
        }
        props.onData(expenseData)
        setTitle('');
        setAmount('');
        setDate('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input required type="text" value={title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input required type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input required type="date" value={date} min="2000-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button type='button' onClick={props.onCancel}>Cancel</button>
            </div>
            
        </form>
    )
}
export default ExpenseForm;
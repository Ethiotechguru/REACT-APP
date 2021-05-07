import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

const NewExpense=(props)=>{
    const [isEditing, setIsEditing] = useState(false);
    const onDataHandler= (entered_expense)=>{
        const expenseData = {
            ...entered_expense,
            id: (Math.random() * 10000000000000000).toString(),
        }
        props.onAdd(expenseData);
        setIsEditing(false);
    }
    const startEditingHandler = () =>{
        setIsEditing(true)
    }
    const stopEditingHandler = ()=>{
        setIsEditing(false);
    }
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
            {isEditing && <ExpenseForm onData={onDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewExpense;
import '../expense.css';
// import React, {useState} from 'react';
import ExpenseDate from './DateComponent'
function ExpenseItem(props) {
    return(
        <li>
            <div className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="item-description">
                    <h2>{props.item}</h2>
                    <div className="item-price">${props.cost}</div>
                </div>
            </div>
        </li>
    )
}

export default ExpenseItem;
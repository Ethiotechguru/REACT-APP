import '../expense.css';
import React, {useState} from 'react';
import ExpenseDate from './DateComponent'
function ExpenseItem(props) {
    const [item, setItem] = useState(props.item);
    const clickHandler=()=>{
        setItem('New Camera')
    }
    return(
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="item-description">
                <h2>{item}</h2>
                <div className="item-price">${props.cost}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    )
}

export default ExpenseItem;
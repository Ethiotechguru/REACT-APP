import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props)=>{
    if(props.items.length=== 0){
        return <h2 className='no-value'>No Expense Found</h2>
    }

    return(
        <ul className='expenses-list'>
            {props.items.map((item)=>(
                <ExpenseItem
                    key={item.id}
                    item={item.itemDesc}
                    cost={item.itemCost}
                    date={item.date}
                />
            ))}
        </ul>
    )
}

export default ExpensesList;
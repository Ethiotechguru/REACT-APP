import ExpenseItem from './ExpenseItem';
function Practice(props) {
    return(
        <div>
            <ExpenseItem item={props.items[0].itemDesc} cost={props.items[0].itemCost} date={props.items[0].date} />
            <ExpenseItem item={props.items[1].itemDesc} cost={props.items[1].itemCost} date={props.items[1].date} />
            <ExpenseItem item={props.items[2].itemDesc} cost={props.items[2].itemCost} date={props.items[2].date} />
        </div>
    )
}
export default Practice;
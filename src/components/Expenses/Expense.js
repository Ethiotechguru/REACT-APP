import React, {useState} from 'react';
import ExpensesFilter from './ExpensesFilter';import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
function Practice(props) {
    const [selectedYear, setSelectedYear] = useState('2020');
    function selectedYearHandler(selected_year) {
        setSelectedYear(selected_year);
        console.log(selected_year)
    }
    const filteredExpenses = props.items.filter(ele=>{
        return ele.date.getFullYear().toString() === selectedYear;
    })
    return(
        <div>
            <ExpensesFilter selected={selectedYear} onSelection={selectedYearHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </div>
    )
}
export default Practice;
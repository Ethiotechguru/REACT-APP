import React, {useState} from 'react';
import Practice from './components/Expenses/Expense'
import Nav from './components/Nav.jsx';
import Footer from './components/Footer'
import NewExpense from './components/NewExpense/NewExpense';
const InitialExpenses = [
  { itemDesc: 'Car Insurance', itemCost: 212.54, date: new Date(2010, 3, 3), id: Math.random().toString() },
  { itemDesc: 'Rent', itemCost: 1500, date: new Date(2020, 4, 3), id: Math.random().toString() },
  { itemDesc: 'Phone Bill', itemCost: 120, date: new Date(2019, 1, 3), id: Math.random().toString() },
]
const App=()=> {
  
  const [expenses, setExpenses] = useState(InitialExpenses);
  const onSaveDataHandler=(add_expense)=>{
    // setExpenses([add_expense, ...expenses])
    setExpenses((prevExpenses)=>{
      return [add_expense, ...prevExpenses]
    })
  }
  console.log(expenses)
  return(
    <div className="App">
      <Nav/>
      <div className="main-content">
        <NewExpense onAdd = {onSaveDataHandler}/>
        <Practice items={expenses}/>
      </div>
      <Footer />
    </div>
  );
  
  
}

export default App;

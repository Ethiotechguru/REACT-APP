import Practice from './components/Expenses/Expense'
import Nav from './components/Nav.jsx';
import Footer from './components/Footer'
import NewExpense from './components/NewExpense/NewExpense'
const App=()=> {
  const expenses = [
    { itemDesc: 'Car Insurance', itemCost: 212.54, date: new Date(2017,3,3)},
    { itemDesc: 'Rent', itemCost: 1500, date: new Date(2017, 3, 3)},
    { itemDesc: 'Phone Bill', itemCost: 120, date: new Date(2017, 3, 3)},
  ]
  return (
    <div className="App">
      <Nav/>
        <NewExpense/>
      <div className="main-content">
        <Practice items={expenses} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

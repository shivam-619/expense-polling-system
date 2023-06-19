// import logo from './logo.svg';
import './App.css';
import Expensesitem from './Components/Expensesitem';
import NewExpense from './Components/Expenses/NewExpense';
import ExpenseFilter from './Components/Expenses/ExpensesFilter';
function App() {  
  const expenses = [
    {
    id: 'e1',
    title: 'toilet paper',
    amount: '94.12',
    date: new Date(2020, 7 , 14),

  },
  {
    id: 'e2',
    title: 'car insurance',
    amount: '102.90',
    date: new Date(2020, 9 , 13),

  },
  {
    id: 'e3',
    title: 'new desk',
    amount: '124',
    date: new Date(2020, 8 , 23),

  },
];


// const departure = [
//   {
//     id: 'f1',
//     cname: 'new',
//     price: '34',
//   },
// ];


  return (
    <div className="App">

          
          <NewExpense />
          <ExpenseFilter/>
          <Expensesitem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></Expensesitem>
          <Expensesitem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></Expensesitem>
          <Expensesitem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></Expensesitem>
          
          
          
</div>
  );
}

export default App;

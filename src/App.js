import ExpenseItemList from './components/ExpenseItemList/ExpenseItemList';

const App = () => {
  const expenses = [
    {
      id: 1,
      title: "Credit Card bill",
      amount: 300,
      date: new Date(2023, 2, 11),
    },
    {
      id: 2,
      title: "Home Rent",
      amount: 23000,
      date: new Date(2023, 2, 2),
    },
    {
      id: 3,
      title: "Electricity bill",
      amount: 1000,
      date: new Date(2023, 2, 1),
    }
  ];

  return (
    <div>
      <ExpenseItemList expenses={expenses}></ExpenseItemList>
    </div>
  );
}

export default App;

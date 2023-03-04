import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

function App() {
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
    },
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;

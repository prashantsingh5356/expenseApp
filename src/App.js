import ExpenseSummery from "./Components/ExpenseSummery/ExpenseSummery";
import ExpenseHistory from "./Components/ExpenseHistory/ExpenseHistory";
import ExpenseAdderForm from "./Components/ExpenseAdderForm/ExpenseAdderForm";
import { useState } from "react";

import "./App.css";

let DEMO_DATA = [
  { title: "salary", amount: 10000, id: Math.random() },
  { title: "cloths", amount: -20, id: Math.random() },
  { title: "painting", amount: -10, id: Math.random() },
  { title: "movie", amount: -50, id: Math.random() },
];

function App() {
  const [expenses, setExpenses] = useState(DEMO_DATA);

  const userExpenseData = (expense) => {
    setExpenses((prevState) => {
      return [...prevState, expense];
    });
  };

  return (
    <div className="expense-layout">
      <ExpenseSummery expensesData={expenses} />
      <ExpenseHistory expenses={expenses} />
      <ExpenseAdderForm userData={userExpenseData} />
    </div>
  );
}

export default App;

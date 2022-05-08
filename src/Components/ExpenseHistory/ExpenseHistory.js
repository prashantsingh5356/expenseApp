import "./ExpenseHistory.css";
import ExpenseHistoryTemplate from "./ExpenseHistoryTemplate";

const ExpenseHistory = (props) => {
  return (
    <div className="expense-history">
      <h2 className="expense-history-label">History</h2>
      <div>
        {props.expenses.map((exp) => (
          <ExpenseHistoryTemplate
            key={exp.id}
            title={exp.title}
            amount={exp.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseHistory;

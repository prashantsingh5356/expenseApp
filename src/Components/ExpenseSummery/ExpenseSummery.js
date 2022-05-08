import "./ExpenseSummery.css";

const ExpenseSummery = (props) => {
  const balanceAmount = props.expensesData.reduce((acc, e) => {
    return (acc += e.amount);
  }, 0);

  const incomeAmountArr = props.expensesData.filter((exp) => exp.amount > 0);
  const incomeAmount = incomeAmountArr.reduce((acc, e) => (acc += e.amount), 0);

  const expenseAmountArr = props.expensesData.filter((exp) => exp.amount < 0);
  const expenseAmount = expenseAmountArr.reduce(
    (acc, e) => (acc += e.amount),
    0
  );
  return (
    <div className="expense-summery-layout">
      <h1>Expense Tracker</h1>
      <div>
        <h2 className="balance-label">Your Balance</h2>
        <h1 className="balance-amount-label">${balanceAmount}</h1>
      </div>
      <div className="summery-block">
        <div className="summery-block__both">
          <p className="summery-both-label">INCOME</p>
          <p className="summery-both-value income-value ">${incomeAmount}</p>
        </div>
        <div className="summery-block__both">
          <p className="summery-both-label">EXPENSE</p>
          <p className="summery-both-value expense-value">
            ${Math.abs(expenseAmount)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummery;

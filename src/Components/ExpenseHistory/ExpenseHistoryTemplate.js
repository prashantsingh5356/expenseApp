import "./ExpenseHistoryTemplate.css";

const ExpenseHistoryTemplate = (props) => {
  return (
    <div className="expense-template">
      <div className="expense-template__inner">
        <div className="expense-template__content">
          <div>{props.title}</div>
          <div>{props.amount}$</div>
        </div>
      </div>
      <div className="expense-template__type"></div>
    </div>
  );
};

export default ExpenseHistoryTemplate;

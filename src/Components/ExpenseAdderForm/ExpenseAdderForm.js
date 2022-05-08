import { useState } from "react";

import "./ExpenseAdderForm.css";

const ExpenseAdderForm = (props) => {
  const [userText, setUserText] = useState("");
  const [userAmount, setuserAmount] = useState("");

  const userTextHandler = (e) => {
    setUserText(e.target.value);
    // console.log(userText);
  };

  const userAmountHandler = (e) => {
    setuserAmount(Number(e.target.value));
    // console.log(userAmount);
  };

  const formSubmitted = (e) => {
    e.preventDefault();

    if (userText == " " || userText == Number(userText) || userAmount == 0)
      return;

    const userData = {
      title: userText,
      amount: userAmount,
      id: Math.random(),
    };
    props.userData(userData);

    setUserText("");
    setuserAmount("");
  };

  return (
    <div className="expense-form">
      <h2 className="expense-form-label">Add new transaction</h2>
      <form onSubmit={formSubmitted}>
        <label className="expense-form-label__style"> Text</label>
        <br />
        <input
          className="expense-form-input__style"
          type="text"
          placeholder="Enter Text"
          onChange={userTextHandler}
          value={userText}
        />
        <br />
        <label className="expense-form-label__style">
          Amount
          <br />
          (negative-expense,positive-income)
        </label>
        <input
          className="expense-form-input__style"
          type="number"
          onChange={userAmountHandler}
          value={userAmount}
        />
        <button className="expense-form-button__style" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default ExpenseAdderForm;

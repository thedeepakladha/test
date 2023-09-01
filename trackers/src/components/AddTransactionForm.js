import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransactionForm() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);


  const onSubmitted = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,  // For to convert amount into a number as it is in string
    };

    addTransaction(newTransaction);
  };
  
  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmitted}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative-expence,positive-income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter the amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}

export default AddTransactionForm;

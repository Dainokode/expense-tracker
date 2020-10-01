import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import { v4 as uuidv4 } from "uuid";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const context = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuidv4(),
      text,
      amount: +amount,
    };

    context.addTransaction(newTransaction);
  };

  return (
    <section className="add-transaction">
      <h4>Add new transaction</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </section>
  );
};

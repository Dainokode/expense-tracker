import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

const Balance = () => {
  const context = useContext(GlobalContext);

  const amounts = context.transactions.map((transaction) => transaction.amount);
  const total = amounts
    .reduce((accumulator, item) => accumulator + item, 0)
    .toFixed(2);

  return (
    <section className="balance">
      <h4>Your current balance: </h4>
      <h1>£{total}</h1>
    </section>
  );
};

export default Balance;

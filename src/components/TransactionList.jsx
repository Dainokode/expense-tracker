import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const context = useContext(GlobalContext);

  return (
    <section className="transaction-list">
      <h4>History</h4>
      <ul className="list">
        {context.transactions.map((transaction) => {
          return <Transaction key={transaction.id} transaction={transaction} />;
        })}
      </ul>
    </section>
  );
};

export default TransactionList;

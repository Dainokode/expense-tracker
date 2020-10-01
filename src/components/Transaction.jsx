import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

const Transaction = ({ transaction }) => {
  const context = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  const color =
    transaction.amount < 0 ? "6px solid #ff0000" : "6px solid #2fff39";

  return (
    <li style={{ borderRight: color }}>
      {transaction.text}
      <span>
        {sign} £{Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => context.deleteTransaction(transaction.id)}
        className="delete"
      >
        X
      </button>
    </li>
  );
};

export default Transaction;

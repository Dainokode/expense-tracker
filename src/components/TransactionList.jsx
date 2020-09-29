import React from "react";

const TransactionList = () => {
  return (
    <section className="transaction-list">
      <h4>History</h4>
      <ul className="list">
        <li>
          Cash <span>-400</span> <button className="delete">X</button>
        </li>
      </ul>
    </section>
  );
};

export default TransactionList;

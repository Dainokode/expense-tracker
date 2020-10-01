import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

const IncomeExpenses = () => {
  const context = useContext(GlobalContext);

  const amounts = context.transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  return (
    <section className="income-expenses">
      <div>
        <h4>
          <span className="income">Income</span>
        </h4>
        <p>{income}</p>
      </div>
      <div>
        <h4>
          <span className="expense">Expense</span>
        </h4>
        <p>{expense}</p>
      </div>
    </section>
  );
};

export default IncomeExpenses;

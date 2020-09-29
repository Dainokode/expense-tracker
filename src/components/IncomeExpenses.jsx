import React from "react";

const IncomeExpenses = () => {
  return (
    <section className="income-expenses">
      <div>
        <h4>
          <span className="income">Income</span>
        </h4>
        <p>+ £0.00</p>
      </div>
      <div>
        <h4>
          <span className="expense">Expense</span>
        </h4>
        <p>- £0.00</p>
      </div>
    </section>
  );
};

export default IncomeExpenses;

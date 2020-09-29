import React from "react";
import Navbar from "./components/Navbar";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import "./styles/main.scss";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <div>
      <Navbar />
      <Balance />
      <div className="container">
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;

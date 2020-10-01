import React from "react";
import Navbar from "./components/Navbar";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import "./styles/main.scss";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./contexts/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <Balance />
      <div className="container">
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

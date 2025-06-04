"use client";

import { useState } from "react";

export default function TransactionsList({
  transactions,
}: {
  transactions: { transactionType: string; amount: number }[]; //links the data inputted from the other component into this component
}) {
  const [filter, setFilter] = useState("all"); 

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "income") return transaction.amount > 0;
    if (filter === "expense") return transaction.amount < 0;
    return true;
  });

  return (
    <div className="transaction-container">
      <h2 id="transactiontitle" className="transactionlabels">Transaction History</h2>
      <div className="filter-buttons">
        <h3 className="transactionlabels">Filter by:</h3>
        <button className="filterbutton" onClick={() => setFilter("all")}>All</button>
        <button className="filterbutton" onClick={() => setFilter("income")}>Show Income</button>
        <button className="filterbutton" onClick={() => setFilter("expense")}>Show Expense</button>
      </div>
      <ul>
        {filteredTransactions.map((transaction, index) => (
          <li key={index}>
            {transaction.transactionType}: ${Math.abs(transaction.amount)} ( 
            {transaction.amount < 0 ? "Expense" : "Income"})
          </li>
          //displays the transaction type and the amount and if depending on if the amount was < or > than 0 it will change whether its considered an expense or income
        ))}
      </ul>
    </div>
  );
}
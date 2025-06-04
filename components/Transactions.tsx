"use client";

import { useState } from "react";

export default function Transactions({
  onAdd,
}: {
  onAdd: (t: { transactionType: string; amount: number }) => void; //when new transaction added, this will update the state
}) {
  const [transactionType, setTransactionType] = useState("");
  const [amount, setAmount] = useState("");

  const handleIncome = () => { //handles if its an income value
    if (!transactionType || !amount) return;
    onAdd({ transactionType, amount: parseFloat(amount) });
    setTransactionType("");
    setAmount("");
  };

  const handleExpense = () => { //handles if its an expense
    if (!transactionType || !amount) return;
    onAdd({ transactionType, amount: -parseFloat(amount) });
    setTransactionType("");
    setAmount("");
  };
  return (
    <>
      <div className="form-inputs">
        <label className="form-label">Add Transaction Type</label>
        <input
          className="form-values"
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value)}
        />
        <label className="form-label">Input Amount</label>
        <input
          className="form-values"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
        />
      </div>
      <div className="form-buttons">
        <button onClick={handleIncome}>Add Income</button>
        <button onClick={handleExpense}>Add Expense</button>
      </div>
    </>
  );
}

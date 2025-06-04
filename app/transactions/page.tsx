"use client";

import React, { useEffect, useState } from "react";
import TransactionsList from "@/components/TransactionsList";
import NavBar from "@/components/NavBar";

export default function History() {
  const [transactions, setTransactions] = useState<{ transactionType: string; amount: number }[]>([]); //this is to store transactions

  useEffect(() => {
    const saved = localStorage.getItem("transactions"); //to get transactions that were stored in localstorage from the tracker page
    if (saved) {
      setTransactions(JSON.parse(saved));
    }
  }, []);

  return (
    <>
      <NavBar/>
      <TransactionsList transactions={transactions} />
    </>
  );
}

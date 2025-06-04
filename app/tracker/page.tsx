"use client";

import React, { useEffect, useState } from "react";
import Transactions from "@/components/Transactions";
import Balance from "@/components/Balance";
import NavBar from "@/components/NavBar";

export default function Tracker() {
  const [transactions, setTransactions] = useState<
    { transactionType: string; amount: number }[]
  >([]); //this stores the type of transaction entered by user and its amount
  const [user, setUser] = useState("");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]); //this is to save transactions to localstorage so that transactions here can be viewed in the transaction history

  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) {
      setTransactions(JSON.parse(saved));
    }
  }, []); //this is to get transactions from local storage so that balance doesn't refresh

  const newTransaction = (t: { transactionType: string; amount: number }) => {
    setTransactions((prev) => [...prev, t]);
  }; //this adds a new transaction using the property

  useEffect(()=> {
    const user = localStorage.getItem("username");
    if (user) {
        setUser(user)
    }
  }, []); //retrieves name entered from home page

  return (
    <>
      <NavBar />
      <h1 id="tracker-user">Hi {user}</h1>
      <div className="tracker">
        <Balance transactions={transactions} />
        <Transactions onAdd={newTransaction} />
      </div>
    </>
  );
}

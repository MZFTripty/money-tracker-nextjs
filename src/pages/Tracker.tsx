"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


type Transaction = {
  id: number;
  type: "income" | "expense";
  category: string;
  amount: number;
  date: string;
};

export default function Tracker() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "expense">("income");

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("transactions");
    if (stored) setTransactions(JSON.parse(stored));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = () => {
    if (!category || !amount) return;
    const newTransaction: Transaction = {
      id: Date.now(),
      category,
      amount: parseFloat(amount),
      type,
      date: new Date().toLocaleDateString(),
    };
    setTransactions([newTransaction, ...transactions]);
    setCategory("");
    setAmount("");
  };

  const deleteTransaction = (id: number) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  // Calculations
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-3xl p-6 sm:p-10"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
          💰 Money Tracker Dashboard
        </h1>

        {/* Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-center">
          <div className="bg-green-50 p-4 rounded-2xl shadow-sm">
            <h2 className="text-sm text-gray-600">Total Income</h2>
            <p className="text-2xl font-semibold text-green-600">৳{income}</p>
          </div>
          <div className="bg-red-50 p-4 rounded-2xl shadow-sm">
            <h2 className="text-sm text-gray-600">Total Expense</h2>
            <p className="text-2xl font-semibold text-red-500">৳{expense}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-2xl shadow-sm">
            <h2 className="text-sm text-gray-600">Balance</h2>
            <p
              className={`text-2xl font-semibold ${
                balance >= 0 ? "text-blue-600" : "text-red-600"
              }`}
            >
              ৳{balance}
            </p>
          </div>
        </div>

        {/* Add Transaction */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Input
            placeholder="Category (e.g., Salary, Food, Rent)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="flex-1"
          />
          <Input
            placeholder="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value as "income" | "expense")}
            className="p-2 rounded-md border border-gray-300 bg-white"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <Button
            onClick={addTransaction}
            className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white flex items-center gap-1 px-6 py-5"
          >
            <PlusCircle className="w-5 h-5" /> Add
          </Button>
        </div>

        {/* Transaction List */}
        <div className="overflow-x-auto">
          {transactions.length === 0 ? (
            <p className="text-gray-500 text-center py-10">
              No transactions yet. Add one above 👆
            </p>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3">Date</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <motion.tr
                    key={t.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-3">{t.date}</td>
                    <td className="p-3 font-medium">{t.category}</td>
                    <td
                      className={`p-3 font-semibold ${
                        t.type === "income" ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {t.type}
                    </td>
                    <td className="p-3">৳{t.amount}</td>
                    <td className="p-3 text-center">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => deleteTransaction(t.id)}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </motion.div>
    </div>
  );
}

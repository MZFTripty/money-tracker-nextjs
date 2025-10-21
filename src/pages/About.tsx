import React from 'react'

export default function About() {
  return (
    <div className="container mx-auto p-4">
      {/* About page content design goes here using Tailwind CSS */}
      <h1 className="text-2xl font-bold mb-4">About Money Tracker</h1>
      <p className="mb-4">Money Tracker is a personal finance management tool that helps you keep track of your expenses and savings.</p>
      <h2 className="text-xl font-semibold mb-2">Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Track your expenses and income</li>
        <li>Set savings goals</li>
        <li>Generate financial reports</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
      <p>To get started with Money Tracker, follow these steps:</p>
      <ol className="list-decimal list-inside mb-4">
        <li>Sign up for an account</li>
        <li>Connect your bank accounts</li>
        <li>Start tracking your expenses</li>
      </ol>
      </div>
  )
}

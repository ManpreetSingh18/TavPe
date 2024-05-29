import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(null);
  const [isEmiCalculated, setIsEmiCalculated] = useState(false);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const annualInterestRate = parseFloat(interestRate);
    const months = parseFloat(tenure) * 12;

    if (!principal || !annualInterestRate || !months) {
      alert("Please enter valid numbers");
      return;
    }

    const monthlyInterestRate = annualInterestRate / (12 * 100);
    const emiAmount = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) / (Math.pow(1 + monthlyInterestRate, months) - 1);

    // Round off to the nearest integer
    const roundedEmiAmount = Math.round(emiAmount);

    setEmi(roundedEmiAmount);
    setIsEmiCalculated(true);
  };

  const formatToRupees = (amount) => {
    if (isNaN(amount)) return amount;

    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-12 rounded-lg shadow-md w-2/3 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Loan Calculator</h1>
        <div className="space-y-8">
          <div className="flex items-center">
            <label className="w-1/3 text-xl text-gray-700">Loan Amount:</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-2/3 p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-xl text-gray-700">Annual Interest Rate (%):</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-2/3 p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-xl text-gray-700">Tenure (in years):</label>
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="w-2/3 p-4 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <button
          onClick={calculateEMI}
          className="w-full mt-8 p-4 bg-blue-500 text-white text-xl rounded-lg hover:bg-blue-600"
        >
          Calculate EMI
        </button>
        {emi !== null && (
          <div className="mt-8 text-center text-3xl font-bold">
            <h2>Monthly EMI: {formatToRupees(emi)}</h2>
          </div>
        )}
        {isEmiCalculated && (
          <NavLink to="/contact">
            <button
              className="w-full mt-4 p-4 bg-green-500 text-white text-xl rounded-lg hover:bg-green-600"
            >
              Apply Now
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../emi.css"

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
    <div className="emi-container">
      <div className="emi-card">
        <h1 className="emi-heading">Loan Calculator</h1>
        <div className="emi-inputs">
          <div className="emi-input">
            <label>Loan Amount:</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>
          <div className="emi-input">
            <label>Annual Interest Rate (%):</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
          <div className="emi-input">
            <label>Tenure (in years):</label>
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={calculateEMI}
          className="calculate-btn"
        >
          Calculate EMI
        </button>
        {emi !== null && (
          <div className="emi-result">
            <h2>Monthly EMI: {formatToRupees(emi)}</h2>
          </div>
        )}
        {isEmiCalculated && (
          <NavLink to="/homeloan">
            <button
              className="apply-btn"
            >
              Apply Now
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

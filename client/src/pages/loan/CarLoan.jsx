import React from "react";
import {ApplyLoan} from "../../components/ApplyLoan";
import { FAQ } from "../../components/FAQ";

export const CarLoan = () => {

  const faqs = [
    {
      question: "What is a car loan and how can it be used?",
      answer:
        "A car loan is a type of financing provided by banks or financial institutions to purchase a vehicle, whether new or used. It can be used to finance the entire cost of the vehicle or a portion of it, making it easier to afford a car without paying the full amount upfront.",
    },
    {
      question: "How does TavPe assist in getting a car loan?",
      answer:
        "TavPe acts as a facilitator by connecting customers with various lenders offering car loans. We help you compare interest rates, loan terms, and eligibility criteria from multiple lenders, ensuring you find the best car loan option suited to your financial needs.",
    },
    {
      question: "What are the eligibility criteria for a car loan?",
      answer:
        "Eligibility criteria typically include age (usually 21-65 years), income stability, employment status (salaried or self-employed), and credit history. Lenders may also consider factors such as existing loans and liabilities, as well as the type and age of the vehicle being financed.",
    },
    {
      question: "What documents are required to apply for a car loan?",
      answer:
        "Commonly required documents include identity proof (Aadhaar, PAN), address proof (utility bills, passport), income proof (salary slips, bank statements), employment proof (offer letter, employment ID), and details of the vehicle being purchased (quotation, registration documents). Additional documents may be required based on the lender's policies.",
    },
    {
      question: "What factors determine the interest rate on a car loan?",
      answer:
        "Interest rates on car loans are influenced by factors such as the borrower's credit score, loan amount, repayment tenure, type of vehicle (new or used), and the lender's policies. TavPe helps you compare these rates across different lenders to secure the most competitive deal for your car loan.",
    },
    {
      question: "What is the repayment process for a car loan?",
      answer:
        "Car loans are typically repaid through Equated Monthly Installments (EMIs) over a predetermined tenure, which can range from 1 to 7 years depending on the lender and loan amount. Repayment can be made via electronic transfers, post-dated cheques, or auto-debit from your bank account, providing flexibility to borrowers.",
    },
    {
      question: "Can I get pre-approved for a car loan through TavPe?",
      answer:
        "Yes, TavPe facilitates pre-approved car loans for eligible customers based on their creditworthiness and financial profile. Pre-approval simplifies the loan application process and allows you to negotiate better terms with the dealership when purchasing your vehicle.",
    }
  ];

  const img="https://www.fincover.com/wp-content/uploads/2020/10/car-loan.png"
  
  return <>
  <ApplyLoan typeOfLoan="Car Loan" img={img}/>;
  <FAQ faqs={faqs}/>
  
</>;
};



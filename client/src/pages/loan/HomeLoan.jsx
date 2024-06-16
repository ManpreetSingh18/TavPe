import React from "react";
import {ApplyLoan} from "../../components/ApplyLoan";
import { FAQ } from "../../components/FAQ";

export const HomeLoan = () => {
  const faqs = [
    {
      question: "What is a home loan and how can it be used?",
      answer:
        "A home loan is a secured loan taken to purchase or construct a residential property. It can also be used for home renovation, expansion, or buying a plot for constructing a house. The property itself serves as collateral for the loan.",
    },
    {
      question: "How does TavPe assist in finding a suitable home loan?",
      answer:
        "TavPe helps you compare various home loan offers from multiple banks and financial institutions. We provide detailed information on interest rates, eligibility criteria, and loan terms, helping you choose the best home loan option tailored to your needs.",
    },
    {
      question: "What are the eligibility criteria for a home loan?",
      answer:
        "Eligibility criteria generally include being an Indian resident aged between 18 and 70 years, having a stable income, and a good credit score. Specific requirements may vary by lender and include factors like employment type, income level, and existing liabilities.",
    },
    {
      question: "What documents are required to apply for a home loan?",
      answer:
        "You typically need to provide identity proof (Aadhaar, PAN), address proof (utility bill, passport), income proof (salary slips, ITRs), property documents, and bank statements. Some lenders may require additional documentation depending on the loan type and amount.",
    },
    {
      question: "How is the interest rate determined for a home loan?",
      answer:
        "Interest rates for home loans can be fixed or floating and are influenced by factors such as your credit score, loan amount, tenure, and the lender's policies. TavPe helps you compare interest rates from different lenders to find the most competitive rate.",
    },
    {
      question: "What is the process for repaying a home loan?",
      answer:
        "Home loans are typically repaid through Equated Monthly Installments (EMIs) over a tenure of up to 30 years. You can pay EMIs via electronic transfer, post-dated cheques, or auto-debit from your bank account. The EMI includes both principal and interest components.",
    },
    {
      question: "Can I get tax benefits on my home loan?",
      answer:
        "Yes, home loans are eligible for tax benefits under Sections 80C and 24(b) of the Income Tax Act. You can claim deductions on the principal repayment up to ₹1.5 lakh and on the interest paid up to ₹2 lakh per financial year, subject to certain conditions.",
    }
  ];

  const img =
    "https://media.istockphoto.com/id/1209904855/vector/people-buying-property-with-bank-credit.jpg?s=612x612&w=0&k=20&c=3Ww725UYrlWepWTn0kmBtgPzrbGCstJF2E1o2nz44LE=";
  
  return <>
  <ApplyLoan typeOfLoan="Home Loan" img={img} />;
  <FAQ faqs={faqs}/>
</>;
};



import React from "react";
import {ApplyLoan} from "../../components/ApplyLoan";
import { FAQ } from "../../components/FAQ";
import BusinessLoanImg from '../../assets/images/businessloan.jpg';

export const BusinessLoan = () => {
  const faqs = [
    {
        question: "What is a business loan and how can it be used?",
        answer: "A business loan is a financial product designed to provide funds for business-related expenses such as expansion, inventory purchase, equipment acquisition, or working capital needs. It can be used by startups, SMEs, and established businesses to support growth and operations."
    },
    {
        question: "How does TavPe help in securing a business loan?",
        answer: "TavPe assists you in finding the best business loan options by comparing offers from various banks and financial institutions. We provide detailed insights into interest rates, loan terms, and eligibility requirements, helping you choose a loan that fits your business needs."
    },
    {
        question: "What are the eligibility criteria for a business loan?",
        answer: "Eligibility criteria typically include having a registered business in India, a minimum business turnover, good credit history, and a certain period of business operation (usually 1-2 years). The specific requirements may vary by lender and loan type."
    },
    {
        question: "What documents are required to apply for a business loan?",
        answer: "Commonly required documents include business registration certificates, financial statements (balance sheet, P&L), income tax returns, bank statements, KYC documents of the business owners, and a business plan or project report. Some lenders may request additional documents based on their specific requirements."
    },
    {
        question: "What types of business loans are available through TavPe?",
        answer: "TavPe offers various types of business loans including term loans, working capital loans, machinery loans, invoice financing, and lines of credit. We help you find the right type of loan based on your business needs and financial situation."
    },
    {
        question: "How is the interest rate determined for a business loan?",
        answer: "Interest rates on business loans depend on factors such as your credit score, business turnover, loan amount, and repayment tenure. TavPe helps you compare these rates across different lenders, ensuring you get the most competitive rate for your business loan."
    },
    {
        question: "What is the repayment process for a business loan?",
        answer: "Repayment of business loans is typically done through Equated Monthly Installments (EMIs) or based on cash flow cycles, depending on the agreement with the lender. You can repay the loan via electronic transfers, post-dated cheques, or auto-debit from your business account. TavPe provides you with all the details related to repayment options and schedules."
    }
];


  
  
  return <>
  <ApplyLoan typeOfLoan="Business Loan" img={BusinessLoanImg}/>;
  <FAQ faqs={faqs}/>
</>;
};



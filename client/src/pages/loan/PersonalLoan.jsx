import React from "react";
import {ApplyLoan} from "../../components/ApplyLoan";
import { FAQ } from "../../components/FAQ";
export const PersonalLoan = () => {
  const faqs = [
    {
      question: "What is a personal loan and how can it be used?",
      answer:
        "A personal loan is an unsecured loan that can be used for various personal financial needs like home renovations, medical emergencies, travel, or debt consolidation. Since it is unsecured, you don't need to provide any collateral.",
    },
    {
      question: "How does TavPe help in getting a personal loan?",
      answer:
        "TavPe acts as an aggregator, connecting you with multiple loan providers. We help you compare different loan options, interest rates, and terms from various lenders, ensuring you find the best loan that suits your needs and financial situation.",
    },
    {
      question: "What are the eligibility criteria for applying for a personal loan through TavPe?",
      answer:
        "Eligibility criteria vary by lender, but generally, you need to be an Indian resident aged between 21 and 60 years, with a stable income and a good credit history. Some lenders may have specific requirements related to your employment status and income level.",
    },
    {
      question: "What documents are required to apply for a personal loan?",
      answer:
        "You typically need to provide identity proof (like Aadhaar or PAN card), address proof (like utility bills or rent agreement), income proof (like salary slips or bank statements), and employment details. Some lenders might ask for additional documentation.",
    },
    {
      question: "How quickly can I get the loan amount disbursed?",
      answer:
        "Loan disbursement times can vary, but with TavPe, the process is streamlined. Once your application is approved, some lenders can disburse the loan amount within 24 to 48 hours. The exact time depends on the lender’s procedures and the completeness of your application.",
    },
    {
      question: "How do I repay the personal loan?",
      answer:
        "Repayment is typically done through Equated Monthly Installments (EMIs) that you can pay via electronic transfer, post-dated cheques, or auto-debit from your bank account. You’ll get a repayment schedule from your lender outlining the amount and due dates.",
    },
    {
      question: "Can I prepay or foreclose my loan? Are there any charges?",
      answer:
        "Yes, most lenders allow you to prepay or foreclose your loan. However, some may charge a prepayment or foreclosure fee, which can vary from lender to lender. It's advisable to check these details in the loan agreement to avoid any surprises.",
    },
    {
      question: "What is the interest rate on a personal loan through TavPe?",
      answer:
        "Interest rates on personal loans vary depending on the lender, your credit score, and other factors. Typically, rates can range from 10% to 24% per annum. TavPe helps you compare these rates from different lenders to find the best deal.",
    },
    {
      question: "What happens if I miss an EMI payment?",
      answer:
        "Missing an EMI payment can result in late fees, higher interest charges, and a negative impact on your credit score. It's crucial to contact your lender as soon as possible if you think you'll miss a payment to discuss possible solutions like rescheduling your EMI.",
    },
    {
      question: "Is there any processing fee for personal loans?",
      answer:
        "Yes, most lenders charge a processing fee which can range from 1% to 2% of the loan amount. This fee is usually deducted from the loan disbursement. TavPe provides transparency on all charges from various lenders, helping you choose the best option.",
    },
    {
      question: "How does my credit score affect my personal loan application?",
      answer:
        "A good credit score increases your chances of getting a personal loan at favorable terms. It reflects your creditworthiness and repayment history. TavPe helps you understand your credit score and its impact, guiding you towards the best loan options available.",
    },
    {
      question: "Can I apply for a personal loan if I am self-employed?",
      answer:
        "Yes, self-employed individuals can apply for a personal loan through TavPe. The eligibility criteria might differ slightly from salaried individuals, often requiring proof of business continuity, financial statements, and income tax returns.",
    },
    {
      question: "What are the tenure options for personal loans?",
      answer:
        "Personal loan tenures typically range from 1 to 5 years, giving you flexibility to choose a repayment period that suits your financial situation. TavPe allows you to compare various tenure options from different lenders.",
    },
    {
      question: "How secure is my personal information with TavPe?",
      answer:
        "TavPe prioritizes your privacy and ensures that your personal information is protected with industry-standard security measures. We only share your information with trusted lenders to facilitate your loan application process.",
    },
    {
      question: "Can I track my loan application status through TavPe?",
      answer:
        "Yes, TavPe provides a platform where you can easily track the status of your loan application. You will receive updates at each step of the process, from submission to approval and disbursement.",
    }
  ];
  const img="https://blog.stashfin.com/wp-content/uploads/2023/03/22654317_67Z_2112.w012.n001.18A.p20.18-scaled.jpg"
  return <>
          <ApplyLoan typeOfLoan="Personal Loan" img={img}/>;
          <FAQ faqs={faqs}/>
        </>;
};



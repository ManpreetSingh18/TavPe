import React from "react";
import {ApplyLoan} from "../../components/ApplyLoan";
import { FAQ } from "../../components/FAQ";
export const HealthInsurance = () => {
    const faqs = [
        
        {
          question: "What are the benefits of TavPe health insurance?",
          answer:
            "TavPe health insurance provides comprehensive coverage including hospitalisation, pre and post-treatment expenses, and cashless claims at network hospitals across India.",
        },
        {
          question: "How does the cashless claim process work in India?",
          answer:
            "For a cashless claim with TavPe, you need to visit a network hospital and show your health card. The hospital will handle the paperwork with TavPe directly, so you don’t have to pay out of pocket at the time of treatment.",
        },
        {
          question: "Does TavPe cover pre-existing conditions?",
          answer:
            "Yes, TavPe offers coverage for pre-existing conditions after a waiting period, which is typically between 2 to 4 years, depending on the policy you choose.",
        },
        {
          question: "How can I avail tax benefits under Section 80D with TavPe insurance?",
          answer:
            "Premiums paid for TavPe health insurance are eligible for tax deductions under Section 80D of the Income Tax Act, with limits up to ₹25,000 for individuals and ₹50,000 for senior citizens.",
        },
        {
          question: "What are the exclusions in TavPe health insurance?",
          answer:
            "TavPe health insurance does not cover cosmetic treatments, self-inflicted injuries, or treatments related to substance abuse. For a detailed list, please refer to your policy document.",
        },
        {
          question: "Can I include my family members in my TavPe health insurance plan?",
          answer:
            "Yes, TavPe offers family floater plans that cover your spouse, children, and dependent parents under a single policy, ensuring comprehensive health coverage for your loved ones.",
        },
      ];
      const img="https://www.fincover.com/wp-content/uploads/2020/03/health-ins01.png"
      
      return(
        <>
          <ApplyLoan typeOfLoan="Health Insurance" img={img}  />;
          <FAQ faqs={faqs}/>
        </>)
};



import React, { useEffect } from "react";
import { useState } from "react";
import "../emi.css";
import { tenureData } from "../utils/constants";
import { numberWithCommas } from "../utils/config";
import TextInput from "../components/text-input";
import SliderInput from "../components/silder-input";

export const EmiCalculator = () => {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const calculateEmi = (downPayment) => {
    if (!cost) return;

    const loanAmt = cost - downPayment;
    const rateOfInterest = interest / 100;
    const noOfYears = tenure / 12;
    const emi =
      (loanAmt * rateOfInterest * (1 + rateOfInterest) ** noOfYears) /
      ((1 + rateOfInterest) ** noOfYears - 1);
    return Number(emi / 12).toFixed(0);
  };

  const updateEmi = (e) => {
    if (!cost) return;

    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));

    const emi = calculateEmi(dp);
    setEmi(emi);
  };

  const calculateDP = (emi) => {
    if (!cost) return;
    const downPaymentPercent = 100 - (emi / calculateEmi(0)) * 100;

    return Number((downPaymentPercent / 100) * cost).toFixed(0);
  };

  const updateDownPayment = (e) => {
    if (!cost) return;
    const emi = Number(e.target.value);
    setEmi(emi.toFixed(0));

    const dp = calculateDP(emi);
    setDownPayment(dp.toFixed(0));
  };

  useEffect(() => {
    if (!(cost > 0)) {
      setDownPayment(0);
      setEmi(0);
    }
    const emi = Number(downPayment);
    setEmi(emi.toFixed(0));
  }, [tenure, cost]);

  const totalDownPayment = () => {
    return numberWithCommas(
      (Number(downPayment) + (cost - downPayment) * (fee / 100)).toFixed(0)
    );
  };

  const totalEmi = () => {
    return numberWithCommas((emi * tenure).toFixed(0));
  };

  return (
    <div className="App">
      <div className="emi-container">
        <span className="title">EMI Calculator</span>

        <TextInput
          title={"Total Cost Of Asset"}
          state={cost}
          setState={setCost}
        />

        <TextInput
          title={"Interest Rate(in %)"}
          state={interest}
          setState={setInterest}
        />

        <TextInput
          title={"Processing Fee(in %)"} 
          state={fee} 
          setState={setFee} 
        />

        <SliderInput
          title="Down Payment"
          underlineTitle={`Total Down Payment - ${totalDownPayment()}`}
          onChange={updateEmi}
          state={downPayment}
          min={0}
          max={cost}
          labelMin={"0%"}
          labelMax={"100%"}
        />

        <SliderInput
          title="Loan Per Month"
          underlineTitle={`Total Loan Amount - ${totalEmi()}`}
          onChange={updateDownPayment}
          state={emi}
          min={calculateEmi(cost)}
          max={calculateEmi(0)}
        />

        <span className="title">Tenure</span>
        <div className="tenure-container">
          {tenureData.map((t) => {
            return (
              <button
                key={t}
                className={`tenure ${t === tenure ? "selected" : ""}`}
                onClick={() => setTenure(t)}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

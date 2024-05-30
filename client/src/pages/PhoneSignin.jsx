import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import React from "react";
import "./Phone.css";
import { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import {auth} from "../components/firebase/setup";
import { toast } from "react-toastify";
export default function PhoneSignin() {

//NOT IN USE THIS PAGE ONLY FOR LERNING PURPOSE AND TESTING PURPOSE 
  const [phone, setPhone] = useState("");
  const [user,setUser] = useState(null);
  const [otp,setOtp]=useState("");
    const sentOtp = async () => {
        try{
        const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
        }
        catch(error){
            console.log(error);
        }
      
    };
  const verifyOtp=async()=>{
    
    try {
        const data=await user.confirm(otp);
        toast.success("Verified Successfully")
        console.log(data);
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="phone-signin">
      <div className="phone-content">
        <PhoneInput
          country={"in"}
          value={phone}
          onChange={(phone) => setPhone("+" + phone)}
        />

        <button onClick={sentOtp}>Send Otp</button>
        <div id="recaptcha"></div>
      </div>
      <br />
      <input onChange={(e)=>setOtp(e.target.value)}type="text" placeholder="Enter Otp" />
      <br />
      <button onClick={verifyOtp}>Verify Otp</button>
    </div>
  );
}

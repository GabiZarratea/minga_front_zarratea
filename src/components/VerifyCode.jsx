import React, { useState } from "react";
import axios from "axios";
import { apiUrl } from "../utils/api.js"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const VerifyCode = () => {

  let navigate = useNavigate()

  const [verificationCode, setVerificationCode] = useState("");

  const handleVerificationSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(apiUrl + "auth/verify/" + verificationCode);

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Account verified successfully.",
          text: "You can now sign in to your Google account!",
          showConfirmButton: false,
          timer: 3000,
        });

        navigate('/signin')

      } else {
        Swal.fire({
          icon: "error",
          title: "Verification Error.",
          text: "The verification code is invalid. Please check the code and try again.",
        });
      }
    } catch (error) {
      console.error("Verification failed:", error);
      Swal.fire({
        icon: "error",
        title: "Verification failed.",
        text: "The verification code is invalid. Please check the code and try again.",
      });
    }
  };

  return (
    <div className="flex flex-col w-full h-[100vh] items-center justify-center bg-slate-200">
      <h2 className="text-black text-4xl not-italic font-normal leading-[normal]">Account Verification</h2>
      <form onSubmit={handleVerificationSubmit} className="mt-[15%] flex flex-col items-center">
        <div>
        <label className="text-[color:var(--secondary-gray,#9D9D9D)] text-base not-italic font-normal leading-[normal]">Enter Verification Code:</label>
        <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} required className="bg-slate-200 border-b-2 border-slate-400 ms-5" />
        </div>
        <div className="flex w-[280px] justify-center items-center gap-2.5 py-5 rounded-[50000px] bg-green-400 mt-10">
        <button type="submit" className="text-white text-center text-2xl not-italic font-bold leading-[normal]">Verify</button>
        </div>
      </form>
    </div>
  );
};

export default VerifyCode;

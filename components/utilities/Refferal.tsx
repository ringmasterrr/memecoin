"use client"

import { useState, useEffect } from "react";
import copy from 'copy-to-clipboard';
import { useWallet } from "@solana/wallet-adapter-react";

const ReferralBox = () => {
  const wallet = useWallet();
  const [copied, setCopied] = useState(false);
  const [referralLink, setReferralLink] = useState('');

  useEffect(() => { 
    if (!wallet) return
    setReferralLink(`${window.location.origin}?ref=${wallet.publicKey}`);
  }, [wallet]); 

  const copyReferralLink = () => {
    copy(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className=" bg-white border mt-4 p-2 border-slate-300 rounded-md lg:w-[25rem] w-[100%] ">
      <div className="text-center block mb-2 py-1 text-purple-800">
       <p>{referralLink}</p>
      </div>
      <button
        onClick={copyReferralLink}
        className=" w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-700 focus:outline-none"
      >
        {copied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
};

export default ReferralBox;

import Image from "next/image";
import React from "react";

const Section6 = () => {
  return (
    <div className="relative flex flex-col items-center bg-[#CFEEFF] h-full pt-14 pb-48 ">
      <div className="text-5xl text-center font-omnes py-4">Tokenomics</div>
      <div className="text-xl font-semibold text-center font-omnesreg ">
        <p className="pb-3">
          DOGE20 tokenomics include smart staking rewards, meaning you can earn
          right away.
        </p>
        <p>DOGE20 Token Address:</p>{" "}
        <p className="font-omnes pt-1">
          {" "}
          0x2541A36BE4cD39286ED61a3E6AFC2307609d6{" "}
        </p>
      </div>
      <div className="relative flex flex-wrap bg-[#FFCBBF] h-[65rem] w-[100rem] mt-14 rounded-[1.25rem] ">
        <div className="flex items-center justify-center w-1/2">
          <Image
            src={"/dawg.png"}
            alt="dawg"
            height={1000}
            width={1000}
            className="h-[50rem] w-auto"
          />
        </div>

        <div className="flex flex-col items-start py-20 justify-between">
          <Image
            src={"/tokenomics.svg"}
            alt="dawg"
            height={1200}
            width={1200}
            className="h-auto w-auto"
          />
          <div className="flex flex-col gap-9">
            <h3 className="text-[#667CC1] font-omnes text-5xl uppercase">
              $MEMECOIN Tokenomics
            </h3>
            <h3 className="text-black font-omnesreg font-semibold text-2xl">
              Total Supply 1 billion
            </h3>
            <h3 className="text-black font-omnesreg font-semibold text-2xl">
              50% Tokens to Liquidity Pool
            </h3>
            <h3 className="text-black font-omnesreg font-semibold text-2xl">
              35% Tokens to Presale Contributors
            </h3>
            <h3 className="text-black font-omnesreg font-semibold text-2xl">
              5% Tokens for CEX
            </h3>
            <h3 className="text-black font-omnesreg font-semibold text-2xl">
              5% Tokens for Marketing
            </h3>
            <h3 className="text-black font-omnesreg font-semibold text-2xl">
              5% Tokens for Team and Advisors
            </h3>
          </div>
        </div>

        <Image
          src={"/coin1.svg"}
          alt="i"
          width={300}
          height={300}
          className="absolute w-[10rem] left-[90rem] -top-[7.8rem]"
        />

        <Image
          src={"/minipaw.svg"}
          alt="i"
          width={300}
          height={300}
          className="absolute w-[4rem] left-[13rem] top-[4rem]"
        />

        <Image
          src={"/smolerpaw.svg"}
          alt="i"
          width={300}
          height={300}
          className="absolute w-[6rem] left-[4rem] bottom-[2rem]"
        />

        <Image
          src={"/Star13.svg"}
          alt="i"
          width={300}
          height={300}
          className="absolute w-[5rem] right-[4rem] bottom-[2rem]"
        />
      </div>

      <Image
        src={"/coin4.svg"}
        alt="coin"
        height={200}
        width={200}
        className="absolute top-20 left-16 h-auto w-auto"
      />

      <Image
        src={"/Star13.svg"}
        alt="coin"
        height={400}
        width={400}
        className="absolute top-[7rem] left-[32rem] w-[4rem]"
      />

      <Image
        src={"/bone10.svg"}
        alt="coin"
        height={400}
        width={400}
        className="absolute -top-[5.8rem] right-[20rem] w-[13rem]"
      />

      <Image
        src={"/coin3.svg"}
        alt="coin"
        height={1600}
        width={1600}
        className="absolute -bottom-[2rem] left-[0rem] w-[13rem]"
      />

      <Image
        src={"/coin2.svg"}
        alt="coin"
        height={600}
        width={600}
        className="absolute bottom-[0.2rem] right-[2rem] w-[13rem]"
      />
    </div>
  );
};

export default Section6;
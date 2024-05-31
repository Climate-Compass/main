"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import copyIcon from "../../public/copy-icon.svg";

type CardType = {
  title: string;
  stake: number;
  addresses: string[];
};

const Card: React.FC<CardType> = ({ title, addresses, stake }) => {
  return (
    <div className="flex flex-col w-full rounded-lg bg-slate-700 shadow-md mb-4">
      <div className="flex flex-row p-4 justify-between items-center mb-4">
        <div className="flex flex-row gap-2 items-center">
          <button className="px-3 py-2 bg-[#5773FF] w-[136px] text-white rounded-lg hover:bg-[#3c5cfe] transition duration-300">
            {title}
          </button>
        </div>
        <span className="text-lg font-bold text-white">{stake}</span>
      </div>
      <div className="flex flex-row items-center justify-between px-4 py-2">
        <div className="flex flex-col py-1 px-2 text-center w-[75px] rounded-2xl bg-slate-600">
          <span className="text-slate-300">Address</span>
        </div>
        <div className="flex flex-col py-1 px-2 text-center w-[75px] rounded-2xl bg-slate-600">
          <span className="text-slate-300">Copy</span>
        </div>
      </div>
      <div className="text-white divide-y divide-slate-600">
        {addresses.map((address, index) => (
          <div key={index} className="flex flex-col relative">
            <div className="flex flex-row gap-2 justify-between items-center">
              <div
                className="flex flex-row justify-between w-full hover:bg-slate-600 h-full px-4 py-3"
              >
                <Link href={'/'} className="text-to-hide text-wrap overflow-hidden text-ellipsis whitespace-nowrap w-[100%]">
                  {address}
                </Link>
                <Image
                  className="cursor-pointer"
                  onClick={() => alert('aaa')}
                  src={copyIcon}
                  width={16}
                  height={16}
                  alt={"copy icon"}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center p-4 mt-4">
        {addresses.length > 3 ? (
          <button className="px-3 py-2 bg-slate-600 text-white rounded-lg hover:bg-[#3c5cfe] transition duration-300">{`View all (${addresses.length})`}</button>
        ) : null}
      </div>
    </div>
  );
};

export default Card;

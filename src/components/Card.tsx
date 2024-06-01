"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import copyIcon from "../../public/copy-icon.svg";
import closeIcon from "../../public/close-icon.svg";

type CardType = {
  title: string;
  stake: number;
  addresses: string[];
};

const Card: React.FC<CardType> = ({ title, addresses, stake }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative flex flex-col w-full rounded-lg bg-slate-700 shadow-md mb-4">
      <div className="flex flex-row p-4 justify-between items-center mb-4">
        <div className="flex flex-row gap-2 items-center">
          <button className="px-3 py-2 bg-[#5773FF] w-[136px] text-white rounded-lg hover:bg-[#3c5cfe] transition duration-300">
            {title}
          </button>
        </div>
        <span className="text-lg font-bold text-white">{stake}</span>
      </div>
      <div className="flex flex-row items-center justify-between pt-4 pb-6 pl-4 pr-4">
        <div className="flex flex-col py-1 px-2 text-center w-[75px] rounded-2xl bg-slate-600">
          <span className="text-slate-300">Address</span>
        </div>
        <div className="flex flex-col py-1 px-2 text-center w-[75px] rounded-2xl bg-slate-600">
          <span className="text-slate-300">Copy</span>
        </div>
      </div>
      <div className="text-white divide-y divide-slate-600">
        {addresses.slice(0, 5).map((address, index) => (
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
        {addresses.length > 5 ? (
          <button
            onClick={handleOpenModal}
            className="px-3 py-2 bg-slate-600 text-white rounded-lg hover:bg-[#3c5cfe] transition duration-300"
          >
            {`View all (${addresses.length})`}
          </button>
        ) : null}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-3/4 max-h-[400px] overflow-y-auto relative">
            <div className="flex flex-row justify-between items-center p-4">
                <h2 className="text-xl text-slate-500 font-bold">All Addresses</h2>
                <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    <Image src={closeIcon} width={18} height={18} alt="close icon" />
                </button>
            </div>
            <div className="divide-y divide-gray-300 overflow-y-auto">
              {addresses.map((address, index) => (
                <div key={index} className="p-3">
                  <Link href={'/'} className="block text-gray-800 hover:text-blue-600">
                    {address}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
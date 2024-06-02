"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import closeIcon from "../../../public/close-icon.svg";
import Image from "next/image";
import Link from "next/link";

type FormValues = {
  title: string;
  overview: string;
  action?: string; // Add action type
};

const CreateProposal: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Get the existing proposals from local storage
    const existingProposals = JSON.parse(localStorage.getItem('proposals') || '[]');
    
    // Create a new proposal object
    const newProposal = {
      title: data.title,
      overview: data.overview,
      action: selectedAction,
    };

    // Add the new proposal to the existing proposals
    existingProposals.push(newProposal);

    // Save the updated proposals back to local storage
    localStorage.setItem('proposals', JSON.stringify(existingProposals));

    console.log('Proposal submitted:', newProposal);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleActionSelect = (action: string) => {
    setSelectedAction(action);
    setIsModalOpen(false);
  };

  const actions = [
    "Transfer",
    "Custom action",
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Create proposal</h1>
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Proposal Description</h2>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-slate-400 text-sm font-thin"
              >
                Title
              </label>
              <input
                id="title"
                {...register("title", { required: true })}
                className="mt-1 block w-full border border-gray-300 text-slate-900 p-2 rounded-md shadow-sm"
              />
              {errors.title && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="overview"
                className="block text-slate-400 text-sm font-thin"
              >
                Overview
              </label>
              <textarea
                id="overview"
                {...register("overview", { required: true })}
                className="mt-1 block w-full min-h-[200px] border border-gray-300 rounded-md shadow-sm p-2 text-slate-900"
              />
              {errors.overview && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col lg:gap-[40px]">
          <h2 className="text-2xl font-semibold">Actions</h2>
          <button
            onClick={handleOpenModal}
            className="mt-2 px-4 py-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Add action
          </button>
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg shadow-lg w-3/4 max-h-[400px] overflow-y-auto relative">
                <div className="flex flex-row justify-between items-center p-4">
                  <h2 className="text-xl text-slate-500 font-bold">
                    Add action
                  </h2>
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  >
                    <Image
                      src={closeIcon}
                      width={18}
                      height={18}
                      alt="close icon"
                    />
                  </button>
                </div>
                <div className="divide-y divide-gray-300 overflow-y-auto">
                  {actions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleActionSelect(action)}
                      className="block p-3 w-full text-left text-gray-800 hover:text-blue-600"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          {selectedAction && (
            <div className="mt-2">
              <span className="text-sm font-semibold">Selected Action: </span>
              <span className="text-sm text-gray-700">{selectedAction}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProposal;

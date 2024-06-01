'use client'
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  title: string;
  overview: string;
};

const CreateProposal: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Create proposal</h1>
      <div className="lg:grid lg:grid-cols-2 xs:flex xs:flex-col gap-[24px]">
        <div className="xs:mb-[24px]">
          <h2 className="text-2xl font-semibold">Proposal Description</h2>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-slate-400 text-sm font-thin">
                Title
              </label>
              <input
                id="title"
                {...register("title", { required: true })}
                className="mt-1 block w-full border border-gray-300 text-slate-900 p-2 rounded-md shadow-sm"
              />
              {errors.title && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="overview" className="block text-slate-400 text-sm font-thin">
                Overview
              </label>
              <textarea
                id="overview"
                {...register("overview", { required: true })}
                className="mt-1 block w-full min-h-[200px] border border-gray-300 rounded-md shadow-sm p-2 text-slate-900"
              />
              {errors.overview && <span className="text-red-500">This field is required</span>}
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Submit
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Actions</h2>
          <br />
        </div>
      </div>
    </div>
  );
};

export default CreateProposal;
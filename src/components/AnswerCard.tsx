'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

type AnswerCardProps = {
  name: string;
  weight: number;
  onSubmit: (data: FormData) => void;
};

type FormData = {
  amount: number;
};

const AnswerCard: React.FC<AnswerCardProps> = ({ name, weight, onSubmit }) => {
  const { register, handleSubmit } = useForm<FormData>();

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
  };

  return (
    <div className="bg-white shadow-md w-full rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 text-sm">Weight: {weight} kg</p>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mt-4">
            <label htmlFor="amount" className="block text-gray-700 text-sm font-semibold mb-2">
              Amount:
            </label>
            <input
              id="amount"
              type="number"
              {...register('amount', { required: true })}
              className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-700 border border-gray-300"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AnswerCard;

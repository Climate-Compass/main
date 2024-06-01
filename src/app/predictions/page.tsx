'use client';
import React, { useEffect, useState } from 'react';
import { Challenge } from "@/types/types";
import { useGetAllChallengeNames } from "../../hooks/useGetAllChallengeNames";
import { useGetChallengeDetails } from "../../hooks/useGetAllChallngeDetails";
import Link from "next/link";

const ProposalTable: React.FC = () => {
  const { data: challengeNames, isError, isLoading } = useGetAllChallengeNames();
  const [challenges, setChallenges] = useState<Challenge[]>([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      if (challengeNames && challengeNames.length > 0) {
        const challengeDetailsPromises = challengeNames.map((name: string) =>
          useGetChallengeDetails(name)
        );
        const challengeDetails = await Promise.all(challengeDetailsPromises);
        setChallenges(challengeDetails.map(({ data }) => data as Challenge));
        console.log(challengeDetails);
      }
    };

    fetchChallenges();
  }, [challengeNames]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading challenges</div>;

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Predictions</h1>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow-md">
            <div className="min-w-full divide-y divide-gray-200">
              <div className="grid items-center justify-between grid-cols-3 px-6 py-4">
                <div className="font-medium text-slate-300">Name</div>
                <div className="font-medium text-slate-300 text-center">End date</div>
                <div className="font-medium text-slate-300 text-right">Weight</div>
              </div>
              <div className="bg-white divide-y rounded-lg divide-gray-200">
                {challenges.length === 0 ? (
                  <span className="flex flex-row p4 items-center justify-center text-gray-900 px-6 py-4">No challenges found</span>
                ) : (
                  challenges.map((challenge, index) => (
                    <Link
                      href={`/predictions/${challenge.name}`}
                      className="grid grid-cols-3 px-6 py-4"
                      key={index}
                    >
                      <div className="text-gray-900">{challenge.name}</div>
                      <div className="text-gray-900 text-center">
                        {new Date(challenge.lastExecutionTime * 1000).toLocaleDateString()}
                      </div>
                      <div className="text-gray-900 text-right">{challenge.totalFunds}</div>
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalTable;

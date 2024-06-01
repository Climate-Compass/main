import Link from "next/link";
import React from "react";

const ProposalTable: React.FC = () => {
  const proposals = [
    { name: "0x...58", id: "1", tokenWon: 432 },
    { name: "0x...58", id: "1", tokenWon: 432 },
    { name: "0x...58", id: "1", tokenWon: 432 },
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow-md">
            <div className="min-w-full divide-y divide-gray-200">
              <div className="grid items-center justify-between grid-cols-4 px-6 py-4">
                <div className="font-medium text-slate-300">Name</div>
                <div className="font-medium text-slate-300 text-center">
                  Tokens won
                </div>
              </div>
              <div className="bg-white divide-y rounded-lg divide-gray-200">
                {proposals.map((proposal) => (
                  <Link
                    href={`/proposals/${proposal.id}`}
                    className="grid grid-cols-4 px-6 py-4"
                    key={proposal.id}
                  >
                    <div className="text-gray-900">
                      {proposal.name}
                    </div>
                    <div className="text-gray-900 text-center">
                      {proposal.tokenWon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalTable;

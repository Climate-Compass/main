import Link from "next/link";
import React from "react";

const ProposalTable: React.FC = () => {
  const proposals = [
    { name: "Proposal 1", id: "1", date: "2024-06-01", votedFor: 43, votedAgainst: 2 },
    { name: "Proposal 2", id: "2", date: "2024-07-15", votedFor: 3, votedAgainst: 34 },
    { name: "Proposal 3", id: "3", date: "2024-08-20", votedFor: 104, votedAgainst: 28 },
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Proposals</h1>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow-md">
            <div className="min-w-full divide-y divide-gray-200">
              <div className="grid items-center justify-between grid-cols-4 px-6 py-4">
                <div className="font-medium text-slate-300">Name</div>
                <div className="font-medium text-slate-300 text-center">
                  Date
                </div>
                <div className="font-medium text-slate-300 text-center">
                  For
                </div>
                <div className="font-medium text-slate-300 text-right">
                  Against
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
                      {proposal.date}
                    </div>
                    <div className="text-gray-900 text-center">
                      {proposal.votedFor}
                    </div>
                    <div className="text-gray-900 text-right">
                      {proposal.votedAgainst}
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

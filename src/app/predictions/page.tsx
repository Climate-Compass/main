import Link from "next/link";
import React from "react";

const ProposalTable: React.FC = () => {
  const proposals = [
    { name: 'Proposal 1', link: '/', endDate: '2024-06-01', weight: '50kg' },
    { name: 'Proposal 2', link: '/', endDate: '2024-07-15', weight: '30kg' },
    { name: 'Proposal 3', link: '/', endDate: '2024-08-20', weight: '20kg' },
    // Add more proposals as needed
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Predictions Table</h1>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow-md">
            <div className="min-w-full divide-y divide-gray-200">
            <div className="grid items-center justify-between grid-cols-3 px-6 py-4">
                <div className="font-medium text-slate-300">Name</div>
                <div className="font-medium text-slate-300 text-center">End date</div>
                <div className="font-medium text-slate-300 text-right">Weight</div>
            </div>
              <div className="bg-white divide-y sm:rounded-lg divide-gray-200">
                {proposals.map((proposal, index) => (
                  <Link href={proposal.link} key={index} className="grid grid-cols-3 px-6 py-4">
                    <div className="text-gray-900">{proposal.name}</div>
                    <div className="text-gray-900 text-center">{proposal.endDate}</div>
                    <div className="text-gray-900 text-right">{proposal.weight}</div>
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

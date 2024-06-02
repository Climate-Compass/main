'use client'
import Link from "next/link";
import React, { useEffect } from "react";

const ProposalTable: React.FC = () => {

  const proposals =  [
    { name: "Increase Funding for Renewable Energy", id: "1", date: "2024-06-01", votedFor: 43, votedAgainst: 2, description: "Allocate additional resources to renewable energy projects to combat climate change." },
    { name: "Reduce Carbon Emissions by 50%", id: "2", date: "2024-07-15", votedFor: 3, votedAgainst: 34, description: "Implement stricter regulations to cut carbon emissions in half by 2030." },
    { name: "Expand Public Transportation", id: "4", date: "2024-09-05", votedFor: 67, votedAgainst: 15, description: "Increase the reach and efficiency of public transportation to reduce traffic congestion and pollution." },
    { name: "Ban Single-Use Plastics", id: "5", date: "2024-10-10", votedFor: 22, votedAgainst: 8, description: "Prohibit the use of single-use plastics to decrease environmental pollution." },
    { name: "Subsidize Electric Vehicles", id: "7", date: "2024-12-01", votedFor: 45, votedAgainst: 12, description: "Provide financial incentives for purchasing electric vehicles to reduce fossil fuel dependency." },
    { name: "Expand Broadband Access to Rural Areas", id: "9", date: "2025-02-28", votedFor: 77, votedAgainst: 30, description: "Improve internet infrastructure in rural areas to provide high-speed broadband access." },
    { name: "Implement Paid Parental Leave", id: "10", date: "2025-03-20", votedFor: 54, votedAgainst: 18, description: "Introduce paid parental leave policies to support families and improve work-life balance." }
  ];

  useEffect(() => {
    localStorage.setItem('proposals', JSON.stringify(proposals))
  }, [])

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

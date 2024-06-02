'use client'
import React, { useState } from "react";
import Card from "@/components/Card";

const Page: React.FC = () => {
  const [voteForClicked, setVoteForClicked] = useState(false);
  const [voteAgainstClicked, setVoteAgainstClicked] = useState(false);

  const handleVoteForClick = () => {
    setVoteForClicked(true);
    setVoteAgainstClicked(false);
  };

  const handleVoteAgainstClick = () => {
    setVoteAgainstClicked(true);
    setVoteForClicked(false);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold">Increase Funding for Renewable Energy</h1>
      <p className="py-2 max-w-5xl">
        Allocate additional resources to renewable energy projects to combat climate change.
      </p>
      <div className="flex flex-row gap-1">
        <span className="font-thin">Executed: 2024-05-01</span>
      </div>
      <br />
      <div className="sm:flex sm:flex-col lg:grid grid-cols-2 w-full gap-[16px]">
        <Card
          addresses={[
            "0xc55DB377c8539482E8bC40bBea808900DdeB05f1",
            "0xc55DB377c8539482E8bC40bBea808900DdeB05f1",
            "0xc55DB377c8539482E8bC40bBea808900DdeB05f1",
            "0xc55DB377c8539482E8bC40bBea808900DdeB05f1",
            "0xc55DB377c8539482E8bC40bBea808900DdeB05f1",
            "0xc55DB377c8539482E8bC40bBea808900DdeB05f1",
            "0xc55DB377c8539482E8bC40bBea808900DdeB05f1",
            "0xc55DB377c8539482E8bC40bBea808900DdeB05f1",
            "0xc55DB377c8539482E8bC40bBea808900DdeB05f1",
            "0xc55DB377c8539482E8bC40bBea808900DdeB05f1",
          ]}
          stake={123.34}
          title={voteForClicked ? "Voted for 👍" : "Vote for 👍"}
          onClick={handleVoteForClick}
          disabled={voteForClicked || voteAgainstClicked}
        />
        <Card
          addresses={[
            "0xc55DB377c8539482E8bC40bBea808900DdeB05f1",
            "0xc55DB377c8539482E8bC40bBea808900DdeB05f1",
            "0xc55DB377c8539482E8bC40bBea808900DdeB05f1",
            "0xc55DB377c8539482E8bC40bBea808900DdeB05f1",
            "0xc55DB377c8539482E8bC40bBea808900DdeB05f1",
          ]}
          stake={12.34}
          title={voteAgainstClicked ? "Voted against 👎" : "Vote against 👎"}
          onClick={handleVoteAgainstClick}
          disabled={voteForClicked || voteAgainstClicked}
        />
      </div>
    </div>
  );
};

export default Page;

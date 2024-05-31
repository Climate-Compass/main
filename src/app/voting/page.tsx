import Card from "@/components/Card";
import React from "react";

type pageType = {};

const page: React.FC<pageType> = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold">Proposal name</h1>
      <p className="py-2 max-w-5xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque velit
        eos perferendis atque accusamus possimus non, tempore, unde neque
        maxime, ex alias quae doloribus vel est. Quo debitis autem tempora!
      </p>
      <div className="flex flex-row gap-1">
        <span className="font-thin">Executed May 27th, 2024</span>
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
          ]}
          stake={123.34}
          title="Vote for 👍"
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
          title="Vote against 👎"
        />
      </div>
    </div>
  );
};
export default page;

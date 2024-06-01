"use client";
import AnswerCard from "@/components/AnswerCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const predictionDetailsPage = () => {
  //   const router = useRouter();
  //   const { id } = router.query;
  //   const [prediction, setPrediction] = useState(null);

  //   useEffect(() => {
  //     if (id) {
  //       fetch(`/api/predictions/${id}`)
  //         .then((response) => response.json())
  //         .then((data) => setPrediction(data))
  //         .catch((error) => console.error('Error fetching prediction:', error));
  //     }
  //   }, [id]);

  //   if (!prediction) {
  //     return <div>Loading...</div>;
  //   }

  const cardData = [
    {
      id: 1,
      name: "Product 1",
      weight: 5
    },
    {
      id: 2,
      name: "Product 2",
      weight: 8
    },
    {
      id: 3,
      name: "Product 3",
      weight: 3
    }
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-2">
        Is there going to be another heatwave in Paris?
      </h1>
      <br />
      <br />
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-3 items-center justify-center divide-x">
          <div className="flex flex-col items-center px-4 justify-center gap-1">
            <span className="text-2xl font-bold">{`${23}`}</span>
            <span>{`Tokens to win`}</span>
          </div>
          <div className="flex flex-col items-center px-4 justify-center gap-1">
            <span className="text-2xl font-bold">{`${15}`}</span>
            <span>{`Betters`}</span>
          </div>
          <div className="flex flex-col items-center px-4 justify-center gap-1">
            <span className="text-2xl font-bold">{`${123.05}`}</span>
            <span>{`Total weight`}</span>
          </div>
        </div>
        <br />
        <span className="font-thin">{`This challeng will end in ${42} days`}</span>
      </div>
      <br />
      <br />
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-2">
            Answers
        </h2>
        <div className="flex flex-col items-center justify-center gap-2 w-full">
        {
            cardData.map((answer, i) => {
                return <AnswerCard key={i} name={answer.name} onSubmit={() => null} weight={answer.weight}/>
            })
        }
        </div>
      </div>
    </div>
  );
};

export default predictionDetailsPage;

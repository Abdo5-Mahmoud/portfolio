import React from "react";
import Logo from "./logo";

type CardProps = {
  title: string;
  description: string;
};
export default function Card({ title, description }: CardProps) {
  return (
    <div className="flex bg-blue h-80 w-full px-5 py-14   gap-4 justify-center items-start rounded-2xl">
      <div className="w-16 lg:w-20  h-8 flex justify-center items-center">
        <Logo color="darkBlue" size={"small"} />
      </div>
      <div className="text">
        <h3 className="font-bold text-3xl mb-3">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

import React from "react";
import Logo from "../logo";

export default function Row({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-8 items-center">
      <div className="w-8 ">
        <Logo color="skyBlue" size="small" />
      </div>
      <div className="text-lightBlue">
        <h2 className="capitalize">{title}</h2>
        <a href={description}>{description}</a>
      </div>
    </div>
  );
}

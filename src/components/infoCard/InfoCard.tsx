import React from "react";
import { InfoCardProps } from "../../types/types";


export default function InfoCard({ image, title, description }: InfoCardProps): React.JSX.Element {
  return (
    <div className="pt-[10px] md:px-[20px] md:pb-[30px] lg:px-[30px] md:w-[210px] lg:w-[330px] flex md:flex-col items-center gap-[20px] md:gap-[30px] bg-bgSecondary p-[20px] rounded-[20px]">
      <img src={image} className="size-[100px] md:size-[160px] lg:size-[250px]" alt={title} />
      <div className="flex flex-col gap-[10px]">
        <h4 className="font-semibold text-[16px] lg:text-[22px]">{title}</h4>
        <span className="text-[12px] lg:text-[16px]">{description}</span>
      </div>
    </div>
  );
}

import React from "react";
import { InfoCardProps } from "../../types/types";
import imageNotFound from "../../assets/images/imageNotFound.jpg"

export default function InfoCard({ image, title, description }: InfoCardProps): React.JSX.Element {
  return (
    <div className="md:pt-[10px]  md:px-[20px]  md:h-[337px] lg:h-[439px] md:pb-[30px] lg:px-[30px] lg:pb-[30px] md:w-[210px] lg:w-[330px] flex md:flex-col items-center gap-[20px]  bg-bgSecondary p-[20px] rounded-[20px]">
      <img src={image || imageNotFound} className="size-[100px] md:size-[160px] lg:size-[250px]" alt={title} />
      <div className="flex flex-col gap-[10px] md:text-center">
        <h4 className="font-semibold text-[16px] lg:text-[22px]  lg:leading-[30.8px]">{title}</h4>
        <p className="text-[12px] lg:text-[16px] font-normal leading-[16.8px] lg:leading-[22.4px]">{description}</p>
      </div>
    </div>
  );
}

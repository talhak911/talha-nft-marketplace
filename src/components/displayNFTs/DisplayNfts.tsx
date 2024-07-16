import "react-lazy-load-image-component/src/effects/blur.css";
import NftCard from "../nftCard/NftCard";
import React from "react";
import { NftType } from "../../types/types";

export default function DisplayNFTs({
  nfts,
  bgChange,
}: {
  nfts: NftType[] | undefined;
  bgChange?: boolean;
}): React.JSX.Element {
  return (
    <div
      className={
        bgChange
          ? "bg-bgSecondary px-[30px] py-[40px] md:px-[77px] md:pt-[60px] md:pb-[80px] lg:px-[115px]"
          : ""
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg2:grid-cols-3 gap-[30px]  lg2:max-w-[1050px] md:max-w-[680px] mx-auto">
        {nfts?.map((item, key) => (
          <NftCard item={item} key={key} bgChange={bgChange} />
        ))}
      </div>
    </div>
  );
}

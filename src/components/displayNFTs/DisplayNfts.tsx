import "react-lazy-load-image-component/src/effects/blur.css";
import NftCard from "../cards/NftCard";
import { useAppSelector } from "../../hooks/hooks";
import React from "react";

export default function DisplayNFTs(): React.JSX.Element {

  let nfts = useAppSelector((state) => state.NftsByCollectionReducer.nfts?.nfts) || null;

  return (
    <div className="bg-[#3B3B3B] px-[30px] py-[40px] md:px-[77px] md:py-[60px] lg:px-[115px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg2:grid-cols-3 gap-[30px]  lg2:max-w-[1050px] md:max-w-[680px] mx-auto">
        {/* one nft */}
        {nfts?.map((item, key) => (
            <NftCard item={item } key={key}  />
        ))}
      </div>
    </div>
  );
}

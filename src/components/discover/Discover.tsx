import React from "react";
import { ReactComponent as EyeIcon } from "../../assets/icons/eye.svg";
import DisplayNFTs from "../displayNFTs/DisplayNfts";
import { Link } from "react-router-dom";
import { useCollections } from "../../pages/collections/useCollection";
import Loader from "../loader/Loader";

export default function Discover(): React.JSX.Element {
  const {nfts,error,loading} = useCollections({limit:6})

  return (
    <div className="px-[30px] py-[40px] md:px-[72px] lg:px-[115px] lg:py-[80px]">
      <div className="flex flex-col gap-[40px] md:gap-[60px] max-w-[1050px] mx-auto ">
        <div className="flex flex-col gap-[10px]">
          <h3 className="font-semibold text-[28px] lg:text-[38px]">
            Discover More NFTs
          </h3>
          <div className="flex justify-between items-center">
            <p className="text-[16px] lg:text-[22px] ">
              Explore new trending NFTs
            </p>
            <button className=" hidden border-2 border-callToAction w-[187px] h-[60px] rounded-[20px] md:flex items-center justify-center">
              <Link to={`/overworld-incarna`} className="flex items-center justify-center gap-[12px]">
                <EyeIcon />
                <span>See All</span>
              </Link>
            </button>
          </div>
        </div>
        <div className="mx-[-30px] md:mx-[-72px] lg:mx-[-115px]">
          {error && <span className="flex items-center justify-center h-11"><p>{error}</p></span>}
          {loading === 'pending' && <Loader/>}
          <DisplayNFTs nfts={nfts?.nfts} />

    </div>

        <button className=" md:hidden border-2 border-callToAction w-full h-[60px] rounded-[20px] flex items-center justify-center">
          <Link to={`/overworld-incarna`} className="flex items-center justify-center gap-[12px]">
            <EyeIcon />
            <span>See All</span>
          </Link>
        </button>
      </div>
    </div>
  );
}

import { ReactComponent as Search } from "../../assets/icons/search.svg";
import DisplayNFTs from "../../components/displayNFTs/DisplayNfts";
import { useCollections } from "./useCollection";
import LoaderGif from "../../components/loader/Loader";

export default function Collections(): JSX.Element {
  const { nfts, error, loading } = useCollections({ limit: 9 });

  if (loading === "pending") {
    return <LoaderGif />;
  }

  return (
    <>
      <div className="px-[30px] py-[40px]  md:px-[90px] md:yt-[60px] lg:px-[115px] lg:py-[80px]">
        <div className="flex flex-col gap-[30px] mx-auto max-w-[1050px] ">
          <div className="flex flex-col gap-[10px]">
            <h2 className="font-semibold text-[28px] md:text-[38px] lg:text-[51px]">
              {nfts?.nfts[0]?.collection}
            </h2>
            <p className="text-[16px] lg:text-[22px]">
              Browse through more than 50k NFTs on the NFT Marketplace.
            </p>
          </div>
          {/* search bar */}
          <div className="relative h-[60px] border  border-bgSecondary rounded-[20px] w-full px-[20px]">
            <input
              type="search"
              id="search-dropdown"
              className="block h-full p-2.5 w-full z-20 text-[16px]  bg-transparent  focus:outline-none"
              placeholder="Search your favourite NFTs"
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white"
            >
              <Search />
            </button>
          </div>
        </div>
      </div>
      <div className=" border-b-[2px] border-caption max-w-[315px] lg2:max-w-[1050px]  md:max-w-[680px] mx-auto pt-[10px] px-[30px] ">
        <div className="flex items-center justify-center py-[19px] ">
          <div className="flex items-center justify-center gap-[16px]">
            <h5 className="font-semibold text-[16px]">NFTs</h5>
            <span className="rounded-[20px] bg-caption px-[10px] py-[5px] hidden md:block ">
              302
            </span>
          </div>
        </div>
      </div>
      {error && <span>{error}</span>}
      <DisplayNFTs nfts={nfts?.nfts} bgChange={true} />
      <hr className="border border-bgPrimary" />
    </>
  );
}

import Timer from "../../components/timer/Timer";
import { useDetails } from "./useDetails";
import Loader from "../../components/loader/Loader";
import imageNotFound from "../../assets/images/imageNotFound.jpg"

export default function Details(): JSX.Element {

  const { nft, loading, error ,artistName } = useDetails();
  if (loading === "pending") {
    return (
     <Loader/>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h5 className="text-4xl">Error: {error}</h5>
      </div>
    );
  }

  if (!nft) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h5 className="text-4xl">No data found.</h5>
      </div>
    );
  }
  return (
    <div>
      <img
        className=" w-full h-[320px] md:h-[420px] lg:h-[560px] object-contain "
        src={nft?.nft?.display_image_url || imageNotFound}
        alt=""
      />

      {/* page start */}
      <div className=" px-[30px] py-[40px]  md:px-[72px] lg:px-[115px]">
        <div className="relative flex justify-center md:justify-start mx-auto max-w-[1050px] ">
          <div className="absolute top-0 right-0 hidden md:block ">
            <Timer isPlaceBid={true} />
          </div>
          {/* page contant start */}
          <div className="flex flex-col gap-[20px] md:gap-[30px] w-full max-w-[365px] lg:max-w-[605px]">
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[28px] md:text-[38px] lg:text-[51px] font-semibold">
                {nft?.nft?.name}
              </h2>
              <span className="text-caption text-[16px] lg:text-[22px] ">
                Minted on {nft?.nft?.updated_at?.split("T")[0]}
              </span>
            </div>
            <div className="block md:hidden">
              {" "}
              <Timer isPlaceBid={true} />{" "}
            </div>

            {/* Created by */}
            <div className="flex flex-col gap-[10px]">
              <span className="font-mono text-[16px] text-caption md:text-[22px]">
                Created By
              </span>

              <div className="flex items-center gap-[12px]">
                <span>@</span>
                <span className="text-[16px] lg:text-[22px]"> {artistName ?? "unknown"}</span>
                
              </div>
            </div>
            {/* Description */}
            <div className="flex flex-col gap-[10px]">
              <span className=" font-mono text-[16px] text-caption md:text-[22px]">
                Description
              </span>
              <div className="flex items-center gap-[12px]">
                <p className="text-[16px] lg:text-[22px]">
                  {nft?.nft.description || "no description found"}
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-[10px]">
              <span className=" font-mono text-[16px] text-caption md:text-[22px]">
                Details
              </span>
              <div className="flex items-center gap-[10px]">
                <span>@</span>
                <a
                  href={nft?.nft.opensea_url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[16px] lg:text-[22px]"
                >
                  View on OpenSea
                </a>
              </div>
              <div className="flex items-center gap-[10px]">
                <span>@</span>
                <span className="text-[16px] lg:text-[22px]">View Orignal</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-col gap-[10px]">
              <span className=" font-mono text-[16px] text-caption md:text-[22px]">
                Tags
              </span>

              <div className="flex flex-col lg:flex-row gap-[20px]">
                <div className="py-[12px] px-[30px] bg-bgSecondary capitalize w-fit rounded-[20px]">
                  Animation
                </div>
                <div className="py-[12px] px-[30px] bg-bgSecondary capitalize w-fit rounded-[20px]">
                  Animation
                </div>
                <div className="py-[12px] px-[30px] bg-bgSecondary capitalize w-fit rounded-[20px]">
                  Animation
                </div>
                <div className="py-[12px] px-[30px] bg-bgSecondary capitalize w-fit rounded-[20px]">
                  Animation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

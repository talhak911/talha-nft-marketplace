import { LazyLoadImage } from "react-lazy-load-image-component";
import loading from "../../assets/images/loading.gif";
import { Link } from "react-router-dom";
import { NftType } from "../../types/types";
import { useNftCard } from "./useNftCard";
import imageNotFound from "../../assets/images/imageNotFound.jpg";
export default function NftCard({
  item,
  bgChange,
}: {
  bgChange?: boolean;
  item: NftType;
}): React.JSX.Element {
  const { handleImageLoad, loadedImage } = useNftCard();
  return (
    <Link
      to={`/nft/${item?.contract}/${item?.identifier}`}
      className="flex flex-col  items-center md:max-w-[330px] justify-center  h-fit"
    >
      {!loadedImage && (
        <div className=" h-[238px] md:h-[295px]   w-[315px] text-purple  md:w-[330px]   bg-black rounded-t-[20px] flex items-center justify-center">
          <img src={loading} alt="" />
        </div>
      )}
      <LazyLoadImage
        className={`h-[238px] md:h-[295px] w-full min-w-[315px]  md:min-w-[330px]   rounded-t-[20px] ${
          loadedImage ? "" : "hidden"
        }`}
        src={item?.image_url || imageNotFound}
        alt=""
        effect="blur"
        onLoad={() => handleImageLoad()}
      />
      <div
        className={
          bgChange
            ? "bg-bgPrimary h-[164px] md:h-[173px] w-full min-w-[315px] md:w-[330px] max-w-[315px] md:max-w-[330px]  rounded-b-[20px] p-[20px] pb-[25px] md:px-[30px]"
            : "bg-bgSecondary h-[164px] md:h-[173px] w-full min-w-[315px] md:w-[330px] max-w-[315px] md:max-w-[330px]  rounded-b-[20px] p-[20px] pb-[25px] md:px-[30px]"
        }
      >
        <div className="flex flex-col gap-[25px]">
          <div className="flex flex-col gap-[5px]">
            <h5 className="text-[22px] font-semibold leading-[30.8px] ">
              {item?.name}
            </h5>

            <div className="flex gap-[12px]">
              <img
                className="size-[24px] rounded-full"
                src={item?.display_image_url || imageNotFound}
                alt=""
              />
              <span className="text-[16px] font-mono leading-[22.4px]">
                {item.collection}
              </span>
            </div>
          </div>
          <div className="flex justify-between font-mono">
            <div className="flex flex-col  gap-[8px]">
              <span className="text-caption text-[12px] leading-[13.2px]">
                Price
              </span>
              <span className="text-[12px] md:text-[16px] md:leading-[22.4px] ">
                1.63 wETH
              </span>
            </div>
            <div className="flex flex-col gap-[8px] text-right">
              <span className="text-caption text-[12px] leading-[13px] ">
                Higest Bid
              </span>
              <span className="text-[12px] md:text-[16px] leading-[13px] md:leading-[22.4px] ">
                0.33 ETH
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

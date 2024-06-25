import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import loading from "../../assets/loading.gif"
import { Link } from "react-router-dom";
import { NftType } from "../../types/nfts/commonTypes";
export default function NftCard({item}:{item:NftType}):React.JSX.Element {
    
    const [loadedImage, setLoadedImage] = useState< boolean >(false);
      const handleImageLoad = () => {
        setLoadedImage(true)
      };
    return (
        <Link
        to={`/nft/${item.contract}/${item.identifier}`}
        className="flex flex-col  items-center md:max-w-[330px] justify-center  h-fit"
      >
        {/* nft image */}

        {!loadedImage && (
          <div className=" h-[238px] md:h-[295px]   w-[315px]  md:w-[330px]   bg-black rounded-t-[20px] flex items-center justify-center">
            <img src={loading} alt="" />
            
          </div>
        )}
        <LazyLoadImage
          className={`h-[238px] md:h-[295px] w-full min-w-[315px]  md:min-w-[330px]   rounded-t-[20px] ${
            loadedImage ? "" : "hidden"
          }`}
          src={item.image_url}
          alt=""
          effect="blur"
          onLoad={() => handleImageLoad()}
        />
        <div className=" h-fit w-full min-w-[315px] md:w-[330px] max-w-[315px] md:max-w-[330px] bg-[#2B2B2B] rounded-b-[20px] p-[20px] pb-[25px] md:px-[30px]">
              <div className="flex flex-col gap-[25px]">
                <div className="flex flex-col gap-[5px]">
                  <h5 className="text-[22px] font-semibold">{item.name}</h5>

                  <div className="flex gap-[10px]">
                    <span>@</span>
                    <span className="text-[16px] font-mono"> Artist </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-[8px]">
                    <span className="text-[#858584] text-[12px]">Price</span>
                    <span className="text-[12px] md:text-[16px]">1.64 ETH</span>
                  </div>
                  <div className="flex flex-col gap-[8px] text-right">
                    <span className="text-[#858584] text-[12px]">
                      Higest Bid
                    </span>
                    <span className="text-[12px] md:text-[16px]">0.33 ETH</span>
                  </div>
                </div>
              </div>
            </div>
            </Link>
    )
}
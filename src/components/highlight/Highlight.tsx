import { ReactComponent as EyeIcon } from "../../assets/icons/eye.svg";
import Timer from "../timer/Timer";
import image from "../../assets/images/placeholderAvatar.png"
export default function NftHighlight(): JSX.Element {
  return (
    <div className="relative h-[590px] md:h-[630px] lg:h-[640px] bg-cover bg-center bg-no-repeat bg-nft-mobile md:bg-nft-desktop">
      <div className="absolute inset-0 bg-gradient-to-t from-purple to-transparent">
        <div className="pb-[40px] pt-[120px] px-[30px] md:pt-[360px] md:pb-[60px] md:px-[90px]  lg:px-[115px]">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-col gap-[30px]  ">
              <button className="h-[44px] w-[151px] flex justify-center items-center gap-[12px] bg-bgSecondary rounded-[20px]">
              <img
              className="size-[24px] rounded-full"
              src={image}
              alt=""
            />
                <span> Shroomie</span>
              </button>
              <h3 className="text-[38px] font-semibold leading-[45.6px]">Magic Mashrooms</h3>
              <div className="block md:hidden">
                <Timer isPlaceBid={false} />
              </div>
              <button className=" bg-white  w-full md:w-[198px] h-[60px] rounded-[20px] flex items-center justify-center">
                <div className="flex items-center justify-center gap-[12px]">
                  <EyeIcon />
                  <span className="text-bgPrimary font-semibold">See NFT</span>
                </div>
              </button>
            </div>
            <div className=" hidden md:block content-end ">
              <Timer isPlaceBid={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

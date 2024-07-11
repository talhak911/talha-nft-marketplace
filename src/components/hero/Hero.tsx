import { ReactComponent as Rocket } from "../../assets/icons/rocket.svg";
import HeroContant from "../heroContant/HeroContant";

export default function Hero(): JSX.Element {
  return (
    <div className="px-[30px] py-[40px] md:px-[72px]  md:py-[80px] lg:px-[115px]   ">
      <div className="  grid grid-cols-1 md:grid-cols-2 gap-[30px] max-w-[1050px] mx-auto  ">
        <div className=" flex flex-col  gap-[40px] md:gap-[20px] lg:gap-[30px] ">
          <div className="space-y-[10px] md:space-y-[20px]">
          <h1 className=" text-[28px] md:text-[38px] lg:text-[67px] leading-[39px] md:leading-[45px]  lg:leading-[73px] font-semibold ">
            Discover Digital Art & Collect NFTs
          </h1>
          <p className="text-white text-[16px] lg:text-[22px] p-1">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          </div>
          <div className="block w-full max-w-[315px] mx-auto md:hidden">
            <HeroContant />
          </div>

          <button className="flex w-full max-w-[315px] mx-auto md:mx-0 justify-center items-center text-white font-semibold px-12 gap-3 md:max-w-[224px] h-[60px] bg-purple rounded-2xl">
            <Rocket /> Get Started
          </button>
          <div className="mx-auto md:mx-[0px]">
            <div className="flex gap-[30px] font-mono  capitalize ">
              <div className="flex flex-col rounded-[20px] w-[85px] md:w-[90px] lg:w-[150px] ">
                <span className="font-bold text-[22px]  lg:text-[28px]">
                  240k+
                </span>
                <span className="font-sans text-[16px]  lg:text-[24px]   ">
                  Total Sale
                </span>
              </div>
              <div className="flex flex-col rounded-[20px]  w-[85px] md:w-[90px] lg:w-[150px] ">
                <span className="font-bold text-[22px]  lg:text-[28px]  ">
                  100k+
                </span>
                <span className=" font-sans text-[16px]  lg:text-[24px] ">
                  Auctions
                </span>
              </div>
              <div className="flex flex-col rounded-[20px]  w-[85px] md:w-[90px] lg:w-[150px] ">
                <span className="font-bold text-[22px]  lg:text-[28px]  ">
                  240k+
                </span>
                <span className="font-sans text-[16px]  lg:text-[24px] ">
                  Artists
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex  md:justify-center">
          <HeroContant />
        </div>
      </div>
    </div>
  );
}

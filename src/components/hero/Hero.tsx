import { ReactComponent as Rocket } from '../../assets/icons/rocket.svg'

import HeroImage from "./HeroImage";
export default function Hero() {
    return (
        <div className=" px-[30px] py-[20px]  md:px-[90px] md:py-[80px] lg:px-[115px] lg:py-[40px]   ">
            <div className="  flex flex-col md:flex-row gap-[30px] max-w-[1050px] mx-auto  ">
                <div className=" flex flex-col  gap-[20px] md:w-1/2">
                    <h1 className="text-white text-[28px] md:text-[38px] lg:text-[67px] font-semibold ">
                        Discover Digital Art & Collect NFTs
                    </h1>
                    <p className="text-white text-[16px] lg:text-[22px] p-1">
                        NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                    </p>
                    <div className='block max-w-[315px] mx-auto md:hidden'>
                        <HeroImage />
                    </div>

                    <button className="flex w-[315px] mx-auto md:mx-0 justify-center items-center text-white font-semibold px-12 gap-3 md:w-[224px] h-[60px] bg-[#A259FF] rounded-2xl">
                        <Rocket /> Get Started
                    </button>
                    <div className='mx-auto md:mx-[0px]'>
                    <div className="flex gap-[30px]">
                        <div className="flex flex-col rounded-[20px] ">
                            <span className="font-bold text-[22px]  lg:text-[28px] capitalize text-white">240k+</span>
                            <span className="font-normal text-[16px]  lg:text-[24px]  capitalize text-white">Total Sale</span>
                        </div>
                        <div className="flex flex-col rounded-[20px] ">
                            <span className="font-bold text-[22px]  lg:text-[28px] capitalize text-white">100k+</span>
                            <span className="font-normal text-[16px]  lg:text-[24px]  capitalize text-white">Auctions</span>
                        </div>
                        <div className="flex flex-col rounded-[20px]">
                            <span className="font-bold text-[22px]  lg:text-[28px] capitalize text-white">240k+</span>
                            <span className="font-normal text-[16px]  lg:text-[24px] capitalize text-white">Artists</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='hidden md:flex  md:w-1/2  md:justify-center'>
                    <HeroImage />
                </div>
            </div>
        </div>

    );
}

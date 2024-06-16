import { ReactComponent as EyeIcon } from "../../assets/icons/eye.svg";
export default function DiscoverMoreNfts() {
    return (
        <div className="px-[30px] py-[20px] md:px-[90px] md:py-[40px] lg:px-[115px] lg:py-[80px]">
            <div className="flex flex-col gap-[40px] md:gap-[60px]">
                <div className="flex flex-col gap-[10px]">
                    <h3 className="font-semibold text-[28px] lg:text-[38px]">
                        Discover More NFTs
                    </h3>
                    <div className="flex justify-between items-center">
                        <p className="text-[16px] lg:text-[22px] "> Explore new trending NFTs</p>
                        <button className=" hidden border-2 border-[#A259FF] w-[187px] h-[60px] rounded-[20px] md:flex items-center justify-center">
                            <div className="flex items-center justify-center gap-[12px]">
                                <EyeIcon />
                                <span>See All</span>
                            </div>
                        </button>

                    </div>
                </div>

                {/* cards */}
                <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row md:overflow-x-scroll gap-[20px] md:gap-[30px] md:justify-around content-around">
                     {/* one cards */}
                     {/* w-[315px] h-[402px] md:w-[330px] md:h-[469px] donwn here ! */}
                    <div className="flex flex-col  ">
                        {/* nft image */}
                        <div className=" h-[238px] w-[315px] md:w-[330px] md:h-[296px] bg-blue-800 rounded-t-[20px]">
                        
                        </div>
                        {/* nft details */}
                        <div className=" h-[164px] w-[315px] md:w-[330px] md:h-[173px] bg-[#3B3B3B] rounded-b-[20px] p-[20px] md:px-[30px]">
                            <div className="flex flex-col gap-[25px]">
                                <div className="flex flex-col gap-[5px]">
                                    <h5 className="text-[22px] font-semibold">
                                        NFT name
                                    </h5>

                                    <div className="flex gap-[10px]">
                                        <span>AV</span>
                                        <span className="text-[16px]"> Artist name</span>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-[8px]">
                                        <span className="text-[#858584] text-[12px]">Price</span>
                                        <span className="text-[12px] md:text-[16px]">1.64 ETH</span>
                                    </div>
                                    <div className="flex flex-col gap-[8px] text-right">
                                        <span className="text-[#858584] text-[12px]">Higest Bid</span>
                                        <span className="text-[12px] md:text-[16px]">0.33 ETH</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="flex flex-col  ">
                        {/* nft image */}
                        <div className=" h-[238px] w-[315px] md:w-[330px] md:h-[296px] bg-blue-800 rounded-t-[20px]">
                        
                        </div>
                        {/* nft details */}
                        <div className=" h-[164px] w-[315px] md:w-[330px] md:h-[173px] bg-[#3B3B3B] rounded-b-[20px] p-[20px] md:px-[30px]">
                            <div className="flex flex-col gap-[25px]">
                                <div className="flex flex-col gap-[5px]">
                                    <h5 className="text-[22px] font-semibold">
                                        NFT name
                                    </h5>

                                    <div className="flex gap-[10px]">
                                        <span>AV</span>
                                        <span className="text-[16px]"> Artist name</span>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-[8px]">
                                        <span className="text-[#858584] text-[12px]">Price</span>
                                        <span className="text-[12px] md:text-[16px]">1.64 ETH</span>
                                    </div>
                                    <div className="flex flex-col gap-[8px] text-right">
                                        <span className="text-[#858584] text-[12px]">Higest Bid</span>
                                        <span className="text-[12px] md:text-[16px]">0.33 ETH</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="flex flex-col  ">
                        {/* nft image */}
                        <div className=" h-[238px] w-[315px] md:w-[330px] md:h-[296px] bg-blue-800 rounded-t-[20px]">
                        
                        </div>
                        {/* nft details */}
                        <div className=" h-[164px] w-[315px] md:w-[330px] md:h-[173px] bg-[#3B3B3B] rounded-b-[20px] p-[20px] md:px-[30px]">
                            <div className="flex flex-col gap-[25px]">
                                <div className="flex flex-col gap-[5px]">
                                    <h5 className="text-[22px] font-semibold">
                                        NFT name
                                    </h5>

                                    <div className="flex gap-[10px]">
                                        <span>AV</span>
                                        <span className="text-[16px]"> Artist name</span>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-[8px]">
                                        <span className="text-[#858584] text-[12px]">Price</span>
                                        <span className="text-[12px] md:text-[16px]">1.64 ETH</span>
                                    </div>
                                    <div className="flex flex-col gap-[8px] text-right">
                                        <span className="text-[#858584] text-[12px]">Higest Bid</span>
                                        <span className="text-[12px] md:text-[16px]">0.33 ETH</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                    

                </div>
                <button className=" md:hidden border-2 border-[#A259FF] w-full h-[60px] rounded-[20px] flex items-center justify-center">
                            <div className="flex items-center justify-center gap-[12px]">
                                <EyeIcon />
                                <span>See All</span>
                            </div>
                        </button>
            </div>
        </div>
    )
}
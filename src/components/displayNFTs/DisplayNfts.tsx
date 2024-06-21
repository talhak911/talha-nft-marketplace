export default function DisplayNFTs(){
 return(   <div className="bg-[#3B3B3B] px-[30px] py-[40px] md:px-[77px] md:py-[60px] lg:px-[115px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            <div className="flex flex-col  items-center justify-center h-[402px] md:h-[469px]">
                        {/* nft image */}
                        <div className=" h-[238px] w-full min-w-[295px] max-w-[315px] md:max-w-[330px] md:h-[296px] bg-blue-800 rounded-t-[20px]">
                        
                        </div>
                        {/* nft details */}
                        <div className=" h-[164px] w-full min-w-[295px] max-w-[315px] md:max-w-[330px] md:h-[173px] bg-[#2B2B2B] rounded-b-[20px] p-[20px] pb-[25px] md:px-[30px]">
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
    </div>)
}
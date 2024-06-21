import Timer1 from "../components/nftHighlight/timer";

export default function NFTPage() {
    return (
        <div>
            <div className=" w-full h-[320px] md:h-[420px] lg:h-[560px] bg-slate-600">

            </div>
            {/* page start */}
            <div className=" px-[30px] py-[40px]  md:px-[72px] lg:px-[115px]">
                <div className="relative flex justify-center md:justify-start mx-auto max-w-[1050px] " >
                    <div className="absolute top-0 right-0 hidden md:block ">
                        <Timer1 placeBid={true} />
                    </div>
                    {/* page contant start */}
                    <div className="flex flex-col gap-[20px] md:gap-[30px] w-full max-w-[365px] lg:max-w-[605px]">
                        <div className="flex flex-col gap-[10px]">
                            <h2 className="text-[28px] md:text-[38px] lg:text-[51px] font-semibold"> The Orbitians</h2>
                            <span className="text-[#858584] text-[16px] lg:text-[22px] ">Minted on Sep 30, 2022</span>
                        </div>
                        <div className="block md:hidden"> <Timer1 placeBid={true}/> </div>

                        {/* Created by */}
                        <div className="flex flex-col gap-[10px]">
                            <span className=" font-mono text-[16px] text-[#858584] md:text-[22px]">Created By</span>
                            <div className="flex items-center gap-[12px]">
                                <span>@</span>
                                <span className="text-[16px] lg:text-[22px]"> Artist Name</span>
                            </div>
                        </div>
                        {/* Description */}
                        <div className="flex flex-col gap-[10px]">
                            <span className=" font-mono text-[16px] text-[#858584] md:text-[22px]">Description</span>
                            <div className="flex items-center gap-[12px]">
                                <p className="text-[16px] lg:text-[22px]">
                                    been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
                                </p>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="flex flex-col gap-[10px]">
                            <span className=" font-mono text-[16px] text-[#858584] md:text-[22px]">Details</span>
                            <div className="flex items-center gap-[10px]">
                                <span>@</span>
                                <a className="text-[16px] lg:text-[22px]"> View on Etherscan</a>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <span>@</span>
                                <a className="text-[16px] lg:text-[22px]">View Orignal</a>
                            </div>
                        </div>


                        {/* Tags */}
                        <div className="flex flex-col gap-[10px]">
                            <span className=" font-mono text-[16px] text-[#858584] md:text-[22px]">Tags</span>
                            
                            <div className="flex flex-col lg:flex-row gap-[20px]">
                                <div className="py-[12px] px-[30px] bg-[#3B3B3B] capitalize w-fit rounded-[20px]">
                                    Animation
                                </div>
                                <div className="py-[12px] px-[30px] bg-[#3B3B3B] capitalize w-fit rounded-[20px]">
                                    Animation
                                </div>
                                <div className="py-[12px] px-[30px] bg-[#3B3B3B] capitalize w-fit rounded-[20px]">
                                    Animation
                                </div>
                                <div className="py-[12px] px-[30px] bg-[#3B3B3B] capitalize w-fit rounded-[20px]">
                                    Animation
                                </div>
                            </div>
                           
                        </div>
                      </div>
                </div>
            </div>
        </div>
    )
}
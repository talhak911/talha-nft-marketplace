export default function TrendingCollection(){
    return (
        <div className="px-[30px] py-[20px]  md:px-[90px] md:py-[80px] lg:px-[135px] lg:py-[40px]">
                <div className="flex flex-col gap-[40px] lg:gap-[60px]">
                <div className="flex flex-col gap-[10px]">
                    <h3 className="text-[28px] lg:text-[38px] font-semibold" >Trending Collection</h3>
                    <p className="text-[16px] lg:text-[22px] ">Checkout our weekly updated trending collection.</p>
                </div>
                    {/* cards */}
                <div className="flex gap-[30px]">
                    {/* single card */}
                    <div className="flex flex-col gap-[15px]">
                        <div className="bg-blue-300 size-[330px] rounded-[20px]">

                        </div>
                        {/* inner small cards */}
                        <div className="flex gap-[15px]">
                            <div className="bg-blue-500 size-[100px] rounded-[20px]">

                            </div>
                            <div className="bg-blue-500 size-[100px] rounded-[20px]">

                            </div>
                            <div className="bg-blue-500 size-[100px] rounded-[20px]">

                            </div>
                           
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <div className="bg-blue-300 size-[330px] rounded-[20px]">

                        </div>
                        {/* inner small cards */}
                        <div className="flex gap-[15px]">
                            <div className="bg-blue-500 size-[100px] rounded-[20px]">

                            </div>
                           
                            <div className="bg-blue-500 size-[100px] rounded-[20px]">

                            </div>
                           
                            <div className="bg-blue-500 size-[100px] rounded-[20px]">

                            </div>
                           
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <div className="bg-blue-300 size-[330px] rounded-[20px]">

                        </div>
                        {/* inner small cards */}
                        <div className="flex gap-[15px]">
                            <div className="bg-blue-500 size-[100px] rounded-[20px]">

                            </div>
                            <div className="bg-blue-500 size-[100px] rounded-[20px]">

                            </div>
                            <div className="bg-blue-500 size-[100px] rounded-[20px]">

                            </div>
                           
                        </div>
                    </div>
                   
                    
                </div>
                </div>
        </div>
    )
}

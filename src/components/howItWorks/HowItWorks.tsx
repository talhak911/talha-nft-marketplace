import { ReactComponent as Wallet } from "../../assets/howItWorks/wallet.svg"
import { ReactComponent as Collection } from "../../assets/howItWorks/collection.svg"
import { ReactComponent as Earning } from "../../assets/howItWorks/earning.svg"
export default function HowItWorks() {

    return (
        <div className="px-[30px] py-[20px]  md:px-[90px] md:py-[80px] lg:px-[115px] lg:py-[40px]">
            <div className="flex flex-col gap-[48px] lg:gap-[60px] ">
                <div className="flex flex-col gap-[10px]">
                    <h3 className="text-[28px] lg:text-[38px] font-semibold" >Trending Collection</h3>
                    <p className="text-[16px] lg:text-[22px] ">Find out how to get started</p>
                </div>
                {/* cards */}
                <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px] justify-between">
                    {/* single card */}
                    <div className=" pt-[10px] md:px-[20px] md:pb-[30px] lg:px-[30px] md:w-[210px] lg:w-[330px] flex md:flex-col justify-center items-center  gap-[20px] md:gap-[30px] bg-[#3B3B3B] p-[20px] rounded-[20px]">
                    <Wallet   
                    className="sm:w-[100px] sm:h-[100px] md:w-[160px] md:h-[160px] lg:w-[250px] lg:h-[250px] lg" />
                        <div className="flex flex-col gap-[10px] ">
                            <h4 className=" font-semibold text-[16px] lg:text-[22px] ">Setup Your wallet</h4>
                            <span className="text-[12px] lg:text-[16px] ">Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.</span>
                        </div>
                    </div>
                    <div className="pt-[10px] md:px-[20px] md:pb-[30px] lg:px-[30px] md:w-[210px] lg:w-[330px] flex md:flex-col justify-center items-center  gap-[20px] md:gap-[30px] bg-[#3B3B3B] p-[20px] rounded-[20px]">
                    <Collection  
                    className="sm:w-[100px] sm:h-[100px] md:w-[160px] md:h-[160px] lg:w-[250px] lg:h-[250px] lg" />
                        <div className="flex flex-col gap-[10px] ">
                            <h4 className=" font-semibold text-[16px] lg:text-[22px] ">Create Collection</h4>
                            <span className="text-[12px] lg:text-[16px] ">Upload your work and setup your collection. Add a description, social links and floor price.</span>
                        </div>
                    </div>
                    <div className="pt-[10px] md:px-[20px] md:pb-[30px] lg:px-[30px] md:w-[210px] lg:w-[330px] flex md:flex-col justify-center items-center  gap-[20px] md:gap-[30px] bg-[#3B3B3B] p-[20px] rounded-[20px]">
                    <Earning 
                    className="sm:w-[100px] sm:h-[100px] md:w-[160px] md:h-[160px] lg:w-[250px] lg:h-[250px] lg" />
                        <div className="flex flex-col gap-[10px] ">
                            <h4 className=" font-semibold text-[16px] lg:text-[22px] ">Start Earning</h4>
                            <span className="text-[12px] lg:text-[16px] ">Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</span>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}
import Timer1 from "../components/nftHighlight/timer";
import { useParams, Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { useEffect,useState } from 'react';
import { fetchNft ,clearNfts} from "../store/slices/NftSlice";


import { ArtistName } from "../components/data/artistName";

export default  function NFTPage () {

    const { contract, identifier } = useParams()
    console.log("contract is "+ contract + "identifier is " + identifier)
    let nft = useAppSelector((state) => state.NftReducer.nft?.nft)|| null
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(clearNfts())
      if(contract && identifier){ 
        dispatch(fetchNft({contract:contract,identifier:identifier}))
      }

        console.log(nft)

     },[dispatch])



     if (!nft) {
        return <div>Loading...</div>;
      }
    return (
        <div>
            <img className=" w-full h-[320px] md:h-[420px] lg:h-[560px] bg-slate-600" src={nft.display_image_url} alt="" />
            {/* <div className=" w-full h-[320px] md:h-[420px] lg:h-[560px] bg-slate-600">

            </div> */}
            {/* page start */}
            <div className=" px-[30px] py-[40px]  md:px-[72px] lg:px-[115px]">
                <div className="relative flex justify-center md:justify-start mx-auto max-w-[1050px] " >
                    <div className="absolute top-0 right-0 hidden md:block ">
                        <Timer1 placeBid={true} />
                    </div>
                    {/* page contant start */}
                    <div className="flex flex-col gap-[20px] md:gap-[30px] w-full max-w-[365px] lg:max-w-[605px]">
                        <div className="flex flex-col gap-[10px]">
                            <h2 className="text-[28px] md:text-[38px] lg:text-[51px] font-semibold">{nft?.name}</h2>
                            <span className="text-[#858584] text-[16px] lg:text-[22px] ">Minted on {nft.updated_at.split("T")[0]}</span>
                        </div>
                        <div className="block md:hidden"> <Timer1 placeBid={true}/> </div>

                        {/* Created by */}
                        <div className="flex flex-col gap-[10px]">
                            {nft.creator}
                            <ArtistName creator={nft.creator} />
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
                                    {nft.description}
                                     </p>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="flex flex-col gap-[10px]">
                            <span className=" font-mono text-[16px] text-[#858584] md:text-[22px]">Details</span>
                            <div className="flex items-center gap-[10px]">
                                <span>@</span>
                                <a href={nft.opensea_url} className="text-[16px] lg:text-[22px]"> View on OpenSea</a>
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
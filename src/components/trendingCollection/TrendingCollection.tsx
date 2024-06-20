import { useEffect, useState } from "react";
export default function TrendingCollection(){
    const [collections,setCollections]=useState<any>([])
    
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-api-key': `${process.env.REACT_APP_OPEN_SEA_KEY}`}
      };
      
     useEffect(()=>{
        fetch('https://api.opensea.io/api/v2/collections?chain=ethereum&limit=3&order_by=market_cap', options)
        .then(response => response.json())
        
        .then(response => {console.log(response.collections)
            setCollections(response.collections)
            return response.collections
        })
        // .then(response =>{
        //     fetch(`{https://api.opensea.io/api/v2/collection/${response[0].collection}/nfts?limit=3}`, options)
        //     .then(response => response.json())
        //     .then(response => {console.log(response)
        //       setNfts(response.nfts)
        //     })
        // }
        // )
        .catch(err => console.error(err));


     },[])
       //{process.env.REACT_APP_OPEN_SEA_KEY}
    return (
        <div className="px-[30px] py-[40px] md:px-[72px] md:py-[80px] lg:px-[115px] lg:py-[40px] ">
                <div className=" max-w-[1050px]  mx-auto flex flex-col gap-[40px] lg:gap-[60px] ">
                <div className="flex flex-col gap-[10px]">
                    <h3 className="text-[28px] lg:text-[38px] font-semibold" >Trending Collecticon</h3>
                    <p className="text-[16px] lg:text-[22px] ">Checkout our weekly updated trending collection.</p>
                </div>
                    {/* cards */}
                <div className="flex gap-[30px] w-full justify-center ">
                    {/* single card */}
                    {collections?.map((collection:any,index:number)=>
                    <div key={index} className={`flex-col gap-[15px] ${index<1 ? "flex " : "hidden"} md:${index<2 ? "flex" :"hidden" } lg:flex`}>
                    <img src={collection?.image_url} className="  md:max-w-[330px] max-w-[315px] rounded-[20px]"/>

                   
                    {/* inner small cards */}
                    <div className="flex gap-[15px]">
                        {/* <img src={nfts[0]?.image_url} className=" size-[100px] rounded-[20px]"/> */}

                        
                        <div className="bg-blue-500 w-[95px] h-[95px] md:max-w-[100px] md:max-h-[100px] rounded-[20px]">
                          
                        </div>
                        <div className="bg-blue-500 w-[95px] h-[95px]  md:max-w-[100px] md:max-h-[100px] rounded-[20px]">
                          
                        </div>
                        <div className="bg-blue-500 w-[95px] h-[95px]  md:max-w-[100px] md:max-h-[100px] rounded-[20px]">

                        </div>
                       
                    </div>

                    <div className="flex flex-col gap-[10px]">
                        <h5 className=" size-[22px] font-semibold w-full">
                            {collection?.name}
                        </h5>
                        <div className="flex gap-[12px]">
                            <p>AV</p>
                            <p className="size-[16px] ">{collection?.twitter_username}</p>
                        </div>
                    </div>
                </div>
                    )}
                   
                   
                   
                    
                </div>
                </div>
        </div>
    )
}

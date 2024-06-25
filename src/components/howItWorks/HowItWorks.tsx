import InfoCard from "../cards/InfoCard";
import { infoCardsData } from "../data/InfoData";


export default function HowItWorks(): JSX.Element {
  return (
    <div className="px-[30px] py-[40px] md:px-[72px] md:py-[80px] lg:px-[115px] lg:py-[40px]">
      <div className="flex flex-col gap-[48px] lg:gap-[60px] mx-auto max-w-[1050px]">
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[28px] lg:text-[38px] font-semibold capitalize">
            How it Works
          </h3>
          <p className="text-[16px] lg:text-[22px] capitalize">
            Find out how to get started
          </p>
        </div>
        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px]">
          {/* Single card */}
         {infoCardsData.map((item,index)=>
         <InfoCard
         key={index}
         image={item.image}
         title={item.title}
         description={item.description}
       />
        )}
          
        </div>
      </div>
    </div>
  );
}

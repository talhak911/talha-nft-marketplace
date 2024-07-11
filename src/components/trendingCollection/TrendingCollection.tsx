import DisplayCollections from "../topCollections/TopCollections";
export default function TrendingCollection(): JSX.Element {
  
  return (
    <div className="px-[30px] py-[40px] md:px-[72px] md:py-[40px] lg:px-[115px] lg:py-[80px] ">
      <div className=" max-w-[1050px]  mx-auto flex flex-col gap-[40px] lg:gap-[60px] ">
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[28px] lg:text-[38px] font-semibold">
            Trending Collection
          </h3>
          <p className="text-[16px] lg:text-[22px] ">
            Checkout our weekly updated trending collection.
          </p>
        </div>
        <DisplayCollections />
      </div>
    </div>
  );
}

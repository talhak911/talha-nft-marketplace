import CategoryCard from "../cards/CategoryCard";
import { categoryItems } from "../data/CategoryData";

export default function BrowseCategories(): JSX.Element {


  return (
    <div className="px-[30px] py-[40px] md:px-[72px] lg:px-[115px] lg:py-[80px]">
      <div className="flex flex-col gap-[40px] lg:gap-[60px] max-w-[1050px] mx-auto ">
        {/* title */}
        <div>
          <h3 className="font-semibold text-[28px] lg:text-[38px]">
            Browse Categories
          </h3>
        </div>

        {/* categories list */}
        <div className="grid gap-[20px] md:gap-[30px] justify-center grid-cols-2 md:grid-cols-4 mx-auto">
          {categoryItems.map((item, index) => (
            <CategoryCard item={item} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}

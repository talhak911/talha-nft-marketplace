import artImg from "../../assets/categoriesImages/art.png"
import collectiblesImg from "../../assets/categoriesImages/collectibles.png"
import musicImg from "../../assets/categoriesImages/music.png"
import photographyImg from "../../assets/categoriesImages/photography.png"
import sportImg from "../../assets/categoriesImages/sport.png"
import utilityImg from "../../assets/categoriesImages/utility.png"
import videoImg from "../../assets/categoriesImages/video.png"
import virtualWorldsImg from "../../assets/categoriesImages/virtualWorlds.png"

export default function BrowseCategories() {
    type CategoryItem = {
        category: string;
        imgUrl: string;
        link: string;
    };

    const categoryItems: CategoryItem[] = [
        { category: "Art", imgUrl: artImg, link: "<Link to Art category>" },
        { category: "Collectibles", imgUrl: collectiblesImg, link: "<Link to Collectibles category>" },
        { category: "Music", imgUrl: musicImg, link: "<Link to Music category>" },
        { category: "Photography", imgUrl: photographyImg, link: "<Link to Photography category>" },
        { category: "Video", imgUrl: videoImg, link: "<Link to Video category>" },
        { category: "Utility", imgUrl: utilityImg, link: "<Link to Utility category>" },
        { category: "Sport", imgUrl: sportImg, link: "<Link to Sport category>" },
        { category: "Virtual Worlds", imgUrl: virtualWorldsImg, link: "<Link to Virtual Worlds category>" }
    ];

    return (
        <div className="px-[30px] py-[20px] md:px-[90px] md:py-[40px] lg:px-[115px] lg:py-[80px]">
            <div className="flex flex-col gap-[40px] lg:gap-[60px]">
                {/* title */}
                <div>
                    <h3 className="font-semibold text-[28px] lg:text-[38px]">
                        Browse Categories
                    </h3>
                </div>
                {/* categories list */}
                <div className="flex flex-wrap gap-[20px] md:gap-[30px] justify-around ">
                    {categoryItems.map((item, index) => (
                        <div key={index} className="w-[147.5px] md:w-[150px] lg:w-[240px] h-[209px] lg:h-[316px] rounded-t-[20px]">
                            <div className="flex flex-col">
                                <img src={item.imgUrl} alt="" className="w-full  " />
                            </div>
                            <div className="h-[67px] md:h-[76px] bg-[#3B3B3B] rounded-b-[20px] ">
                                <p className=" font-semibold text-[16px] lg:text-[22px] p-[20px] lg:pb-[30px] ">
                                    {item.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

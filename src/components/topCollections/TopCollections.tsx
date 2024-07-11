import { Link } from "react-router-dom";
import { CollectionType } from "../../types/types";
import { useTopCollections } from "./useTopCollections";
import Loader from "../loader/Loader";
import imageNotFound from "../../assets/images/imageNotFound.jpg"

export default function TopCollections() {
  const { collections, error, loading } = useTopCollections();
  if (loading === "pending") {
    return <Loader />;
  }
  if (error) {
    return (
      <div className="flex items-center justify-center h-14">
        <h5> {error}</h5>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mx-auto justify-center ">
      {collections?.collections?.map((item: CollectionType, index: number) => (
        <Link
          to={`${item?.collection}`}
          key={index}
          className={`md:max-w-[330px] max-w-[315px] flex-col gap-[15px] lg:flex`}
        >
          <img
            alt=""
            src={item?.image_url || imageNotFound}
            className=" w-full  size-[315px] md:size-[330px] rounded-[20px]"
          />
      <div className="flex justify-between gap-[15px]">
                        
                        
                        <div className="bg-blue-500 w-[95px] h-[95px] md:max-w-[100px] md:max-h-[100px] rounded-[20px]">
                          
                        </div>
                        <div className="bg-blue-500 w-[95px] h-[95px]  md:max-w-[100px] md:max-h-[100px] rounded-[20px]">
                          
                        </div>
                        <div className="bg-blue-500 w-[95px] h-[95px]  md:max-w-[100px] md:max-h-[100px] rounded-[20px]">
                        </div>
                       
                    </div>
          <div className="flex flex-col gap-[10px] mt-2">
            <h5 className=" size-[22px] font-semibold w-full">
              {item?.collection}
            </h5>
            <div className="flex gap-[12px]">
              <p>@</p>
              <p className="text-[16px] ">{item?.name?.slice(0, 18)}</p>
            </div>
          </div>

    
        </Link>
      ))}
    </div>
  );
}

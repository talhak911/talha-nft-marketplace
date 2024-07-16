import { useAppSelector } from "../../hooks/useStore";
import { Link } from "react-router-dom";
import imageNotFound from "../../assets/images/imageNotFound.jpg";

export default function HeroContant(): JSX.Element {
  const collections = useAppSelector(
    (state) => state?.collections?.collections?.collections
  );

  if (!!collections) {
    return (
      <Link
        to={`/${collections[0]?.collection}`}
        className="flex flex-col w-full h-full rounded-2xl max-h-[315px] max-w-[315px]  md:max-h-[330px] md:max-w-[330px] lg:max-h-[510px] lg:max-w-[510px] "
      >
        <img
          className="max-h-[206px] md:max-h-[221px] lg:max-h-[401px] w-full h-full rounded-t-2xl object-cover"
          src={collections[0]?.image_url || imageNotFound}
          alt=""
        />

        <figcaption className="h-[109px] bg-bgSecondary px-[20px] py-[22px]  rounded-b-2xl space-y-[10px]">
          <h5 className="font-semibold text-[22px] leading-[30.8px]">
            {collections[0]?.collection}
          </h5>
          <div className="flex gap-[12px] text-[16px] ">
            <img
              className="size-[24px] rounded-full"
              src={collections[0]?.image_url || imageNotFound}
              alt=""
            />

            <p>{collections[0]?.name}</p>
          </div>
        </figcaption>
      </Link>
    );
  } else return <></>;
}

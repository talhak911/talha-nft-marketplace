import { useAppSelector } from "../../hooks/hooks";
import { Link } from "react-router-dom";

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
          src={collections[0]?.image_url}
          alt=""
        />

        <figcaption className="h-[109px] bg-bgSecondary p-[20px]  rounded-b-2xl">
          <h5 className="font-semibold text-[22px]">{collections[0]?.collection}</h5>
          <div className="flex gap-2 text-[16px]">
            <p>@</p>
            <p>{collections[0]?.name}</p>
          </div>
        </figcaption>
      </Link>
    );
  } else return <></>;
}

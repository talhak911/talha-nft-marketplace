import astronautImage from "../../assets/astronautImage.png";
import { ReactComponent as EnvelopIcon } from "../../assets/icons/envelope.svg";

export default function SubscribeWidget(): JSX.Element {
  return (
    <div className="px-[30px] py-[40px] md:px-[72px] md:py-[80px] lg:px-[115px] lg:py-[40px]">
      <div className="flex flex-col  mx-auto max-w-[1050px] ">
        <div className=" md:py-[40px] md:px-[30px] lg:p-[60px]   md:bg-bgSecondary rounded-[20px]">
          <div className="flex flex-col md:flex-row justify-center items-center gap-[10px] md:gap-[30px] lg:gap-[80px]">
            <img
              className="h-[255px] object-cover max-w-[315px] w-full md:h-[280px] md:w-[300px] lg:w-[425px]  lg:h-[310px] rounded-[20px]"
              src={astronautImage}
              alt=""
            />

            <div className="flex flex-col gap-[30px] ">
              <div className="flex flex-col gap-[10px]">
                <h4 className=" font-semibold text-[28px] lg:text-[38px] capitalize">
                  Join our weekly digest
                </h4>
                <span className="text-[16px] lg:text-[22px] font-normal capitalize ">
                  Get exclusive promotions & updates straight to your inbox.
                </span>
              </div>
              <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-0 justify-between lg:bg-white rounded-[20px]">
                <input
                  className="text-bgPrimary  placeholder-opacity-100 h-[46px] rounded-[20px] py-[16px] px-[20px] border border-caption lg:border-none  lg:focus:outline-none "
                  type="text"
                  placeholder ="Enter your email here"
                />

                <button className="flex gap-[12px] items-center justify-center h-[46px] rounded-[20px]  bg-callToAction lg:w-[211px] ">
                  <EnvelopIcon />
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import useCountDown from "./useTimer";

const Timer: React.FC<{ isPlaceBid: boolean }> = ({
  isPlaceBid,
}: {
  isPlaceBid: boolean;
}) => {
  const countDownTime = useCountDown();
  return (
    <div className=" bg-opacity-50 bg-bgSecondary w-full md:w-[295px] h-fit rounded-[30px] p-[30px]">
      <div className="flex justify-center items-center  ">
        <div className="flex justify-center flex-col gap-[10px]">
          <h4 className="text-[12px] leading-[13.2px]">Auction ends in:</h4>
          <div className="flex gap-[10px] ">
            <div className="flex flex-col gap-[5px] w-[53px]">
              <div className="flex">
                <span className="  text-[38px] font-bold  leading-[45.6px]">
                  {countDownTime?.hours?.charAt(0)}
                </span>
                <span className=" text-[38px] font-bold   leading-[45.6px]">
                  {countDownTime?.hours?.charAt(1)}
                </span>
              </div>
              <p className=" text-[12px]">Hours</p>
            </div>
            <span className="text-[38px] font-bold  leading-[45.6px] w-[18px]">:</span>
            <div className="flex flex-col gap-[5px] w-[53px]">
              <div className="flex">
                <span className=" text-[38px] font-bold  leading-[45.6px]">
                  {countDownTime?.minutes?.charAt(0)}
                </span>
                <span className=" text-[38px] font-bold   leading-[45.6px]">
                  {countDownTime?.minutes?.charAt(1)}
                </span>
              </div>
              <p className=" text-[12px]">Minutes</p>
            </div>
            <span className="text-[38px] font-bold  leading-[45.6px] w-[18px]">:</span>
            <div className="flex flex-col gap-[5px] w-[53px]">
              <div className="flex">
                <span className=" text-[38px] font-bold  leading-[45.6px]">
                  {countDownTime?.seconds?.charAt(0)}
                </span>
                <span className=" text-[38px] font-bold   leading-[45.6px]">
                  {countDownTime?.seconds?.charAt(1)}
                </span>
              </div>
              <p className=" text-[12px]">Seconds</p>
            </div>
          </div>
          {isPlaceBid && (
            <button className="mt-[20px] font-semibold w-full h-[60px] flex items-center justify-center bg-purple rounded-[20px]">
              Place Bid
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;

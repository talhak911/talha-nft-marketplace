import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as EnvelopIcon } from "../../assets/icons/envelope.svg";

export default function Footer(): JSX.Element {
  return (
    <footer className="px-[30px] py-[40px] md:px-[72px]  lg:px-[115px]  bg-bgSecondary">
      <div className="flex flex-col lg:flex-row mx-auto max-w-[1050px] gap-[30px] lg:justify-between">
        <div className="flex flex-col gap-[20px] lg:max-w-[327.41px]">
          <div className="flex items-center">
            <Logo className="size-[32px] mr-2" />
            <h2 className="text-[14.85px] lg:text-[19.8px] font-bold font-mono">
              NFT marketplace
            </h2>
          </div>

          <span className="text-[16px] text-footerText">
            NFT marketplace UI created with Anima for Figma.
          </span>
          <div className="flex flex-col gap-[15px]">
            <span className="text-[16px] text-footerText">
              Join our community
            </span>
            <div className="flex gap-[10px]">
              <Discord />
              <Youtube />
              <Twitter />
              <Instagram />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] text-footerText lg:w-[240px]">
          <h4 className="font-bold text-[22px] text-white font-mono capitalize">Explore</h4>
          <span >Marketplace</span>
          <span>Rankings</span>
          <span >Connect a wallet</span>
        </div>

        <div className="flex flex-col gap-[20px] text-footerText">
          <h4 className="font-bold text-[22px] text-white font-mono capitalize">
            Join our weekly digest
          </h4>
          <span>
            Get exclusive promotions & updates straight to your inbox.
          </span>
          <div className="flex flex-col md:flex-row gap-[16px] md:gap-0 justify-between md:bg-white rounded-[20px] md:max-w-[420px]">
            <input
              className=" text-bgPrimary h-[46px] rounded-[20px] py-[16px] px-[20px] border border-caption md:border-none  md:focus:outline-none "
              type="text"
              placeholder="Enter your email here"
            />

            <button className="flex gap-[12px] items-center justify-center h-[46px] rounded-[20px]  bg-purple md:w-[211px] ">
              <EnvelopIcon />
              <span className="font-semibold text-white">Subscribe</span>
            </button>
          </div>
        </div>
      </div>

      <hr className="w-full border border-caption mt-[30px] " />
      <p className="pt-[20px] text-footerText text-[12px]">
        Ⓒ NFT Market. Use this template freely.
      </p>
    </footer>
  );
}

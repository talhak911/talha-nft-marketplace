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
        <div className="flex flex-col gap-[30px] lg:max-w-[327.41px]">
          <div className="flex items-center gap-[12px]">
            <Logo className="size-[32px]" />
            <h2 className="text-[22px] font-bold font-mono">NFT marketplace</h2>
          </div>

          <div className="flex flex-col gap-[20px]">
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
        </div>

        <div className="flex flex-col gap-[20px] lg:gap-[25px] text-footerText lg:w-[240px]">
          <h4 className="font-bold text-[22px] text-white font-mono capitalize">
            Explore
          </h4>
          <div className="flex flex-col gap-[20px]">
            <span>Marketplace</span>
            <span>Rankings</span>
            <span>Connect a wallet</span>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] text-footerText">
          <h4 className="font-bold text-[22px] text-white font-mono capitalize">
            Join our weekly digest
          </h4>
          <span className="lg:max-w-[330px]">
            Get exclusive promotions & updates straight to your inbox.
          </span>
          <div className="flex flex-col md:flex-row gap-[16px] md:gap-0 justify-between items-center md:bg-white rounded-[20px] w-full md:max-w-[420px]  md:h-[60px]">
            <input
              className=" text-bgPrimary rounded-[20px] py-[19px] h-[46px] w-full md:max-w-[241px] md:w-auto md:h-full placeholder-bgPrimary px-[20px] border placeholder:leading-[22.4px] border-caption placeholder:text-[16px] md:border-none  md:focus:outline-none "
              type="text"
              placeholder="Enter your email here"
            />

            <button className="flex gap-[12px] items-center justify-center w-full h-[46px] md:h-full rounded-[20px]  bg-purple md:w-[179px] ">
              <EnvelopIcon />
              <span className="font-semibold text-white">Subscribe</span>
            </button>
          </div>
        </div>
      </div>

      <hr className="w-full border border-caption mt-[30px] md:mt-[49px] lg:mt-[30px] " />
      <p className="pt-[20px] text-footerText text-[12px]">
        Ⓒ NFT Market. Use this template freely.
      </p>
    </footer>
  );
}

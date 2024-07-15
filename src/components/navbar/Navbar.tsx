import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { ReactComponent as Menu } from "../../assets/icons/burgerMenu.svg";
import Close from "../../assets/images/closeMenu.png";
import { Link } from "react-router-dom";
import { useNavbar } from "./useNavbar";

function Navbar(): JSX.Element {
  const { isMenuOpen, toggleMenu } = useNavbar();
  return (
    <nav className="flex justify-between items-center text-white py-[15px] px-[30px] md:px-[50px] md:py-[15px] lg:py-[34px] h-[54px] lg:h-[100px]">
      <Link to="/" className="flex items-center gap-[10px]">
       {/*     h-[20px] lg:h-[30px] w-8 */}
        <Logo className="
          size-[24px]
         lg:size-[32px]  " />
        <h2 className="text-[16px] lg:text-[20px]  font-bold font-mono">
          NFT Marketplace
        </h2>
      </Link>

      <div className="hidden lg:block">
        <ul className="flex space-x-[36px] ml-auto items-center font-medium">
          <li className="hover:text-caption cursor-pointer">Marketplace</li>
          <li className="hover:text-caption cursor-pointer">Rankings</li>
          <li className="hover:text-caption cursor-pointer">
            Connect a wallet
          </li>
          <button className="bg-purple h-[60px] w-[152px] rounded-2xl py-[19px] px-[30px] flex items-center gap-2">
            <User /> Sign Up
          </button>
        </ul>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {!isMenuOpen && <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-75 z-10 flex flex-col items-center justify-center">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-10 focus:outline-none"
          >
            <img className="size-5 " src={Close} alt="close" />
          </button>
          <ul className="space-y-8 text-white text-center">
            <li className="hover:text-caption cursor-pointer"> Marketplace</li>
            <li className="hover:text-caption cursor-pointer"> Rankings</li>
            <li className="hover:text-caption cursor-pointer">
              Connect a wallet
            </li>
            <button className="bg-purple rounded-2xl py-3 px-7 flex items-center gap-2">
              <User /> Sign Up
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

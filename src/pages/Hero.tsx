import myImage from "../assets/heroImage.png";
import { ReactComponent as Rocket } from '../assets/rocket.svg'
import { ReactComponent as New } from '../assets/new.svg'
export default function Hero() {
    return (
        <div className="h-screen py-[20px] lg:px-[135px] md:px-[90px] md:py-[80px]">
            <div className="flex gap-[30px] ">
                <div className="flex flex-col flex-1 gap-[20px] w-1/2">
                    <h1 className="text-white text-6xl font-semibold p-1">
                        Discover Digital Art & Collect NFTs
                    </h1>
                    <p className="text-white text-xl p-1">
                        NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                    </p>
                    <button className="flex justify-center items-center text-white font-semibold px-12 gap-3 w-[224px] h-[60px] bg-[#A259FF] rounded-2xl">
                        <Rocket /> Get Started
                    </button>
                    <New/>
                </div>



                <figure className="relative  rounded-2xl h-[450px] ">

                    <img className="h-full w-full rounded-2xl" src={myImage} alt="image description" />

                    <figcaption className=" bg-[#3B3B3B] absolute bottom-0 left-0 right-0 px-4 text-lg text-white  rounded-b-2xl">
                        <p className=" font-semibold pt-4">Space Walking</p>
                        <div className="flex py-2">
                            <p>AV</p>
                            <p>Animakid</p>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

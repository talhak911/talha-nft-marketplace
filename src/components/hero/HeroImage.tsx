import myImage from "../../assets/heroImage.png";
export default function HeroImage(){
    return (
        <figure className="flex flex-col w-full h-full rounded-2xl max-h-[315px] max-w-[315px]  md:max-h-[330px] md:max-w-[330px] lg:max-h-[510px] lg:max-w-[510px] ">
        <img className="max-h-[206px] md:max-h-[221px] lg:max-h-[401px] w-full h-full rounded-t-2xl object-cover" src={myImage} alt="Hero image" />
        <figcaption className="h-[109px] bg-[#3B3B3B] p-[20px] text-lg text-white rounded-b-2xl">
            <h5 className="font-semibold">Space Walking</h5>
            <div className="flex">
                <p>AV</p>
                <p>Animakid</p>
            </div>
        </figcaption>
    </figure>
    )
}
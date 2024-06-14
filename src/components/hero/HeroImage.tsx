import myImage from "../../assets/heroImage.png";
export default function HeroImage(){
    return (
        <figure className="flex flex-col rounded-2xl size-[315px] md:size-[330px] lg:size-[510px] ">
        <img className="h-[206px] md:h-[221px] lg:h-[401px] w-full rounded-t-2xl" src={myImage} alt="image description" />
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
import BrowseCategories from "../components/browseCategories/BrowseCategories";
import NftHighlight from "../components/nftHighlight/NftHighlight";
import DiscoverMoreNfts from "../components/discoverMoreNfts/DiscoverMoreNfts";
import Hero from "../components/hero/Hero";
import TrendingCollection from "../components/trendingCollection/TrendingCollection";
import HowItWorks from "../components/howItWorks/HowItWorks";

export default function Home(){
    return (
        <>
        <Hero/>
        <TrendingCollection/>
        <BrowseCategories/>
        <DiscoverMoreNfts/>
        <NftHighlight/>
        <HowItWorks/>
        </>
    )
}
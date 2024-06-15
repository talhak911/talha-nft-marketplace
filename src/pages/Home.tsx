import BrowseCategories from "../components/browseCategories/BrowseCategories";
import DiscoverMoreNfts from "../components/discoverMoreNfts/DiscoverMoreNfts";
import Hero from "../components/hero/Hero";
import TrendingCollection from "../components/trendingCollection/TrendingCollection";

export default function Home(){
    return (
        <>
        <Hero/>
        <TrendingCollection/>
        <BrowseCategories/>
        <DiscoverMoreNfts/>
        </>
    )
}
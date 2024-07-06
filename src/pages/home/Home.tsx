import BrowseCategories from "../../components/categories/Categories";
import NftHighlight from "../../components/highlight/Highlight";
import DiscoverMoreNfts from "../../components/discover/Discover";
import Hero from "../../components/hero/Hero";
import TrendingCollection from "../../components/trendingCollection/TrendingCollection";
import Mechanism from "../../components/mechanism/Mechanism";
import SubscribeWidget from "../../components/subscribeSection/SubscribeSection";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <TrendingCollection />
      <BrowseCategories />
      <DiscoverMoreNfts />
      <NftHighlight />
      <Mechanism />
      <SubscribeWidget />
    </>
  );
}

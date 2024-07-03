export type CategoryItem = {
  category: string;
  imgUrl: string;
  link: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
};
export type ArtistNameProps = {
  creator: string;
};

export type CollectionType = {
  collection: string;
  name: string;
  description: string;
  image_url: string;
  banner_image_url: string;
  owner: string;
  safelist_status: string;
  category: string;
  is_disabled: false;
  is_nsfw: false;
  trait_offers_enabled: false;
  collection_offers_enabled: true;
  opensea_url: string;
  project_url: string;
  wiki_url: string;
  discord_url: string;
  telegram_url: string;
  twitter_username: string;
  instagram_username: string;
  contracts: [
    {
      address: string;
      chain: string;
    }
  ];
};

export type GetCollectionsResponse = {
  collections: CollectionType[];
  next: string;
};
export type InfoCardProps ={
  image: string;
  title: string;
  description: string;
}

export type fetchNftByCollectionParams = {
  collection_slug?: string | undefined;
  limit?: number;
};

export type NftType = {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: string;
  name: string;
  description: string;
  image_url: string;
  display_image_url: string;
  display_animation_url: string;
  metadata_url: string;
  opensea_url: string;
  updated_at: string;
  is_disabled: boolean;
  is_nsfw: boolean;
};

export type GetNftsByCollectionResponse = {
  nfts: NftType[];
  next: string;
};

type Trait = {
  trait_type: string;
  display_type: string;
  max_value: string;
  value: number;
};

type Owner = {
  address: string;
  quantity: number;
};

type RankingFeatures = {
  unique_attribute_count: number;
};

type Rarity = {
  strategy_version: string;
  rank: number;
  score: number;
  calculated_at: string;
  max_rank: number;
  total_supply: number;
  ranking_features: RankingFeatures;
};

type SingleNftType = {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: string;
  name: string;
  description: string;
  image_url: string;
  display_image_url: string;
  display_animation_url: string;
  metadata_url: string;
  opensea_url: string;
  updated_at: string;
  is_disabled: boolean;
  is_nsfw: boolean;
  animation_url: string;
  is_suspicious: boolean;
  creator: string;
  traits: Trait[];
  owners: Owner[];
  rarity: Rarity;
};

export type getNftParamsType = {
  identifier: string | undefined;
  contract: string | undefined;
};

export type GetNftResponse = {
  nft: SingleNftType;
};

export type AccountInfoResponseType = {
  address: string;
  username: string;
  profile_image_url: string;
  banner_image_url: string;
  website: string;
  social_media_accounts: {
    platform: string;
    username: string;
  }[];
  bio: string;
  joined_date: string;
};

export type CollectionsState = {
  collections: GetCollectionsResponse | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
};

export type NftsByCollectionState = {
  nfts: GetNftsByCollectionResponse | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
};

export type NftState = {
  nft: GetNftResponse | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  artistName: string | null;
};

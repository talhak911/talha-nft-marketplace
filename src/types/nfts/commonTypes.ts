// for collections
export interface CollectionType  {
    collection: string,
    name: string,
    description: string,
    image_url: string,
    banner_image_url: string,
    owner: string,
    safelist_status: string,
    category: string,
    is_disabled: false,
    is_nsfw: false,
    trait_offers_enabled: false,
    collection_offers_enabled: true,
    opensea_url: string,
    project_url: string,
    wiki_url: string,
    discord_url: string,
    telegram_url: string,
    twitter_username:string,
    instagram_username: string,
    contracts: [
      {
        address: string,
        chain: string
      }
    ]
  }
export interface GetCollectionsResponse {
    collections: CollectionType[],
    next: string
  }

// for nfts and nfts within collection
export interface NftType{
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
}

export interface GetNftsByCollectionResponse{
    
      nfts: NftType[],
      next: string
    
  }
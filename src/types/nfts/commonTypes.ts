interface Collections  {
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
interface CollectionsState {
    collections: Collections[]}
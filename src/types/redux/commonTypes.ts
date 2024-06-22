import {  GetCollectionsResponse, GetNftsByCollectionResponse } from "../nfts/commonTypes"

export interface CollectionsState {
    collections: GetCollectionsResponse
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    error:string | null
  }

export interface NftsByCollectionState{
  nfts: GetNftsByCollectionResponse
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error:string | null
}
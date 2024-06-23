import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GetNftsByCollectionResponse } from '../../types/nfts/commonTypes'
import { NftsByCollectionState } from '../../types/redux/commonTypes'

export const fetchNftsByCollection = createAsyncThunk(
    'NftsByCollection/fetchNftsByCollection',
    async (collection_slug:string,{rejectWithValue}) => {
      try{
        const response = await axios.get<GetNftsByCollectionResponse>(`https://api.opensea.io/api/v2/collection/${collection_slug}/nfts?limit=12`, {
          method: 'GET',
          headers: {accept: 'application/json', 'x-api-key': `${process.env.REACT_APP_OPEN_SEA_KEY}`}
          
        })
      
        return response.data as GetNftsByCollectionResponse
      }
      catch (error) {
        return rejectWithValue('There was an error fetching the data');
      }
    },
  )

  const initialState:NftsByCollectionState = {
    nfts:null,
    loading: 'idle',
    error:null
  } 

  export const nftsByCollectionSlice = createSlice({
    name: 'nftsByCollection',
    initialState,
    reducers: {
      clearNfts: (state) => {
        state.nfts = null;
      },
    },
    extraReducers:(builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(fetchNftsByCollection.fulfilled, (state, action: PayloadAction<GetNftsByCollectionResponse>) => {
        // Add user to the state array
        state.nfts=(action.payload)
      })
      .addCase(fetchNftsByCollection.rejected,(state,action)=>{
        if (action.payload) {
          // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
          state.error = action.payload as string
        }
      })
    },
  })
  export const { clearNfts } = nftsByCollectionSlice.actions;

  export default nftsByCollectionSlice.reducer

import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import type { CollectionsState } from '../../types/redux/commonTypes'

import type { PayloadAction } from '@reduxjs/toolkit'
import { GetCollectionsResponse } from '../../types/nfts/commonTypes'

export const fetchCollections = createAsyncThunk(
  'NftCollections/fetchCollections',
  async (_,{rejectWithValue}) => {
    try{
      const response = await axios.get<GetCollectionsResponse>('https://api.opensea.io/api/v2/collections?limit=6&order_by=market_cap', {
        method: 'GET',
        headers: {accept: 'application/json', 'x-api-key': `${process.env.REACT_APP_OPEN_SEA_KEY}`}
        
      })
      console.log(response)
      return response.data as GetCollectionsResponse
    }
    catch (error) {
      return rejectWithValue('There was an error fetching the data');
    }
  },
)



const initialState:CollectionsState = {
  collections: {
    collections:[],
    next:""
  },
  loading: 'idle',
  error:null
} 

export const collectionsSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {

  },
  extraReducers:(builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchCollections.fulfilled, (state, action: PayloadAction<GetCollectionsResponse>) => {
      // Add user to the state array
      state.collections=(action.payload)
    })
    .addCase(fetchCollections.rejected,(state,action)=>{
      if (action.payload) {
        state.error = action.payload as string
      }
    })
    // .addCase(fetchCollections.fulfilled,(state, action: PayloadAction<GetCollectionsResponse>) => {
    //   // Add user to the state array
    //   state.collections=(action.payload)
    // })
  },
})

// Action creators are generated for each case reducer function
export const {  } = collectionsSlice.actions

export default collectionsSlice.reducer
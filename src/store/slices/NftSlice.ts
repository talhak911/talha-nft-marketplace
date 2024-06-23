import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GetNftResponse, getNftParamsType } from '../../types/nfts/commonTypes'
import { NftState } from '../../types/redux/commonTypes'


export const fetchNft = createAsyncThunk(
    'Nft/fetchNft',
    async (data:getNftParamsType,{rejectWithValue}) => {
      try{
        const response = await axios.get<GetNftResponse>(`https://api.opensea.io/api/v2/chain/ethereum/contract/${data.contract}/nfts/${data.identifier}`, {
          method: 'GET',
          headers: {accept: 'application/json', 'x-api-key': `${process.env.REACT_APP_OPEN_SEA_KEY}`}
          
        })
        console.log(response)
        return response.data 
      }
      catch (error) {
        return rejectWithValue('There was an error fetching the data');
      }
    },
  )

  const initialState:NftState = {
    nft:null,
    loading: 'idle',
    error:null
   } 

   export const nftSlice = createSlice({
    name: 'nft',
    initialState,
    reducers: {
  
    },
    extraReducers:(builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(fetchNft.fulfilled, (state, action: PayloadAction<GetNftResponse>) => {
        // Add user to the state array
        state.nft=(action.payload)
      })
      .addCase(fetchNft.rejected,(state,action)=>{
        if (action.payload) {
          // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
          state.error = action.payload as string
        }
      })
    },
  })
  export default nftSlice.reducer
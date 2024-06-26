import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GetNftsByCollectionResponse, fetchNftByCollectionParams,NftsByCollectionState } from "../../types/types";
import openSeaApi from "../../axiosInstance/api";

export const fetchNftsByCollection = createAsyncThunk<
  GetNftsByCollectionResponse,
  fetchNftByCollectionParams,
  { rejectValue: string }
>(
  "NftsByCollection/fetchNftsByCollection",
async ({ collection_slug, limit }: fetchNftByCollectionParams, { rejectWithValue }) => {
    try {
      const response = await openSeaApi.get<GetNftsByCollectionResponse>(
        `/collection/${collection_slug}/nfts?limit=${limit}`,
        {
          method: "GET",
          headers: { "x-api-key": `${process.env.REACT_APP_OPEN_SEA_KEY}` },
        }
      );
      return response.data as GetNftsByCollectionResponse;
    } catch (error) {
      return rejectWithValue(`${error}`);
    }
  }
);

const initialState: NftsByCollectionState = {
  nfts: null,
  loading: "idle",
  error: null,
};

export const nftsByCollectionSlice = createSlice({
  name: "nftsByCollection",
  initialState,
  reducers: {
    clearNfts: (state) => {
      state.nfts = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchNftsByCollection.fulfilled,
        (state, action: PayloadAction<GetNftsByCollectionResponse>) => {
          state.nfts = action.payload;
          state.loading ='succeeded'
        }
      )
      .addCase(fetchNftsByCollection.rejected, (state, action) => {
       
        if (action.payload) {
          state.error = action.payload as string;
        } else {
          state.error = action.error.message as string;
        }
          state.loading = 'failed'
        }
      )
      .addCase(fetchNftsByCollection.pending,(state,action)=>{
        state.loading = 'pending'
      })
  },
});
export const { clearNfts } = nftsByCollectionSlice.actions;

export default nftsByCollectionSlice.reducer;

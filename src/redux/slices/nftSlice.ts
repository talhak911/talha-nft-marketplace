import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GetNftResponse,NftState, getNftParamsType } from "../../types/types";
import { AxiosResponse } from "axios";
import openSeaApi from "../../axiosInstance/api";

export const fetchNft = createAsyncThunk<
  GetNftResponse,
  getNftParamsType,
  { rejectValue: string }
>("Nft/fetchNft", async (data: getNftParamsType, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<GetNftResponse> =
      await openSeaApi.get<GetNftResponse>(
        `/chain/ethereum/contract/${data.contract}/nfts/${data.identifier}`,
        {
          method: "GET",
          headers: {
            "x-api-key": `${process.env.REACT_APP_OPEN_SEA_KEY}`,
          },
        }
      );
    return response.data as GetNftResponse
  } catch (error) {
    return rejectWithValue(`${error}`);
  }
});

const initialState: NftState = {
  nft: null,
  loading: "idle",
  error: null,
  artistName:null
};

export const nftSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {
    clearNfts: (state) => {
      state.nft = null;
      state.artistName = null;
      state.loading = "idle";
      state.error = null;
    },
    setArtistName: (state, action: PayloadAction<string | null>) => {
      state.artistName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNft.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        fetchNft.fulfilled,
        (state, action: PayloadAction<GetNftResponse>) => {
          state.nft = action.payload; 
          state.loading = "succeeded"; 
          state.error = null; 
        }
      )
      .addCase(fetchNft.rejected, (state, action) => {
        state.loading = "failed"; 
        state.error = action.payload as string;
      });
  },
});
export const { clearNfts ,setArtistName} = nftSlice.actions;
export default nftSlice.reducer;

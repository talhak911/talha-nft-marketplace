import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { CollectionsState,GetCollectionsResponse } from "../../types/types";
import openSeaApi from "../../axiosInstance/api";
import type { PayloadAction } from "@reduxjs/toolkit";

export const fetchCollections = createAsyncThunk<
  GetCollectionsResponse,
  void,
  { rejectValue: string }
>("Collections/fetchCollections", async (_, { rejectWithValue }) => {
  try {
    const response = await openSeaApi.get<GetCollectionsResponse>(
      "/collections?chain=ethereum&order_by=seven_day_volume&limit=6",
      {
        method: "GET",
        headers: {
          "x-api-key": `${process.env.REACT_APP_OPEN_SEA_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(`${error}`);
  }
});

const initialState: CollectionsState = {
  collections: null,
  loading: "idle",
  error: null,
};

export const collectionsSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
  
    builder
      .addCase(
        fetchCollections.fulfilled,
        (state, action: PayloadAction<GetCollectionsResponse>) => {
          state.collections = action.payload;
          state.loading='succeeded'
        }
      )
      .addCase(fetchCollections.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload as string;
          state.loading='failed'
        }
      })
      .addCase(fetchCollections.pending, (state) => {
        state.loading = "pending";
      })

  
  },
});


export default collectionsSlice.reducer;

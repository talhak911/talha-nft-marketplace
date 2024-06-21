
import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const fetchCollections = createAsyncThunk(
  'fetchCollections',
  async () => {
    const response = await axios.get('https://api.opensea.io/api/v2/collections', {
      method: 'GET',
      headers: {accept: 'application/json', 'x-api-key': `${process.env.REACT_APP_OPEN_SEA_KEY}`}
    })
    return response.data
  },
)

// Define a type for the slice state



const initialState:CollectionsState = {
  collections: [],
  loading: 'idle',
} 

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {

  },
  extraReducers:(builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchCollections.fulfilled, (state, action) => {
      // Add user to the state array
      state.collections.push(action.payload)
    })
  },
})

// Action creators are generated for each case reducer function
export const {  } = collectionSlice.actions

export default collectionSlice.reducer
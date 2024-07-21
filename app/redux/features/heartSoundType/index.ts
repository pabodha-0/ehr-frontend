import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { HeartSoundTypeState } from "../../types/HeartSoundStateTypes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialState: HeartSoundTypeState = {
  allHeartSoundTypes: null,
};

export const getAllHeartSoundTypes = createAsyncThunk(
  "heart-sound-type/get-all",
  async (_, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    };

    try {
      return await axios
        .get(`${BASE_URL}/heart-sound-type`, config)
        .then((res) => res.data);
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const heartSoundTypeSlice = createSlice({
  name: "heart-sound-type",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Heart Sound Types
    builder.addCase(
      getAllHeartSoundTypes.pending,
      (state: HeartSoundTypeState, action: PayloadAction) => {
        console.log("get all heart sound types pending", action);
        state.allHeartSoundTypes = {
          isLoading: true,
          isLoadedSuccessfully: false,
          dataMessage: "Loading",
          data: [],
        };
      }
    );

    builder.addCase(
      getAllHeartSoundTypes.fulfilled,
      (state: HeartSoundTypeState, action: PayloadAction<any>) => {
        console.log("get all heart sound types fulfilled", action);
        state.allHeartSoundTypes = {
          isLoading: false,
          isLoadedSuccessfully: true,
          dataMessage: "Get all successful",
          data: action.payload,
        };
      }
    );

    builder.addCase(
      getAllHeartSoundTypes.rejected,
      (state: HeartSoundTypeState, action: PayloadAction<any>) => {
        console.log("get all heart sound types rejected", action);
        state.allHeartSoundTypes = {
          isLoading: false,
          isLoadedSuccessfully: false,
          dataMessage: action.payload,
          data: [],
        };
      }
    );
  },
});

export default heartSoundTypeSlice.reducer;

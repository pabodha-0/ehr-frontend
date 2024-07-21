import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { HeartRhythmTypeState } from "../../types/HeartRhythmStateTypes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialState: HeartRhythmTypeState = {
  allHeartRhythmTypes: null,
};

export const getAllHeartRhythmTypes = createAsyncThunk(
  "heart-rhythm-type/get-all",
  async (_, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    };

    try {
      return await axios
        .get(`${BASE_URL}/heart-rhythm-type`, config)
        .then((res) => res.data);
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const heartRhythmTypeSlice = createSlice({
  name: "heart-rhythm-type",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Heart Rhythm Types
    builder.addCase(
      getAllHeartRhythmTypes.pending,
      (state: HeartRhythmTypeState, action: PayloadAction) => {
        console.log("get all heart rhythm types pending", action);
        state.allHeartRhythmTypes = {
          isLoading: true,
          isLoadedSuccessfully: false,
          dataMessage: "Loading",
          data: [],
        };
      }
    );

    builder.addCase(
      getAllHeartRhythmTypes.fulfilled,
      (state: HeartRhythmTypeState, action: PayloadAction<any>) => {
        console.log("get all heart rhythm types fulfilled", action);
        state.allHeartRhythmTypes = {
          isLoading: false,
          isLoadedSuccessfully: true,
          dataMessage: "Get all successful",
          data: action.payload,
        };
      }
    );

    builder.addCase(
      getAllHeartRhythmTypes.rejected,
      (state: HeartRhythmTypeState, action: PayloadAction<any>) => {
        console.log("get all heart rhythm types rejected", action);
        state.allHeartRhythmTypes = {
          isLoading: false,
          isLoadedSuccessfully: false,
          dataMessage: action.payload,
          data: [],
        };
      }
    );
  },
});

export default heartRhythmTypeSlice.reducer;

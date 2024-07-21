import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { NoseInfectionTypeState } from "../../types/NoseInfectionStateTypes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialState: NoseInfectionTypeState = {
  allNoseInfectionTypes: null,
};

export const getAllNoseInfectionTypes = createAsyncThunk(
  "nose-infection-type/get-all",
  async (_, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    };

    try {
      return await axios
        .get(`${BASE_URL}/nose-infection-type`, config)
        .then((res) => res.data);
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const noseInfectionTypeSlice = createSlice({
  name: "nose-infection-type",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All NoseInfection Types
    builder.addCase(
      getAllNoseInfectionTypes.pending,
      (state: NoseInfectionTypeState, action: PayloadAction) => {
        console.log("get all nose infection types pending", action);
        state.allNoseInfectionTypes = {
          isLoading: true,
          isLoadedSuccessfully: false,
          dataMessage: "Loading",
          data: [],
        };
      }
    );

    builder.addCase(
      getAllNoseInfectionTypes.fulfilled,
      (state: NoseInfectionTypeState, action: PayloadAction<any>) => {
        console.log("get all nose infection types fulfilled", action);
        state.allNoseInfectionTypes = {
          isLoading: false,
          isLoadedSuccessfully: true,
          dataMessage: "Get all successful",
          data: action.payload,
        };
      }
    );

    builder.addCase(
      getAllNoseInfectionTypes.rejected,
      (state: NoseInfectionTypeState, action: PayloadAction<any>) => {
        console.log("get all nose infection types rejected", action);
        state.allNoseInfectionTypes = {
          isLoading: false,
          isLoadedSuccessfully: false,
          dataMessage: action.payload,
          data: [],
        };
      }
    );
  },
});

export default noseInfectionTypeSlice.reducer;

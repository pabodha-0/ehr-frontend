import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { EarInfectionTypeState } from "../../types/EarInfectionStateTypes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialState: EarInfectionTypeState = {
  allEarInfectionTypes: null,
};

export const getAllEarInfectionTypes = createAsyncThunk(
  "ear-infection-type/get-all",
  async (_, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    };

    try {
      return await axios
        .get(`${BASE_URL}/ear-infection-type`, config)
        .then((res) => res.data);
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const earInfectionTypeSlice = createSlice({
  name: "ear-infection-type",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Ear Infection Types
    builder.addCase(
      getAllEarInfectionTypes.pending,
      (state: EarInfectionTypeState, action: PayloadAction) => {
        console.log("get all ear infection types pending", action);
        state.allEarInfectionTypes = {
          isLoading: true,
          isLoadedSuccessfully: false,
          dataMessage: "Loading",
          data: [],
        };
      }
    );

    builder.addCase(
      getAllEarInfectionTypes.fulfilled,
      (state: EarInfectionTypeState, action: PayloadAction<any>) => {
        console.log("get all ear infection types fulfilled", action);
        state.allEarInfectionTypes = {
          isLoading: false,
          isLoadedSuccessfully: true,
          dataMessage: "Get all successful",
          data: action.payload,
        };
      }
    );

    builder.addCase(
      getAllEarInfectionTypes.rejected,
      (state: EarInfectionTypeState, action: PayloadAction<any>) => {
        console.log("get all ear infection types rejected", action);
        state.allEarInfectionTypes = {
          isLoading: false,
          isLoadedSuccessfully: false,
          dataMessage: action.payload,
          data: [],
        };
      }
    );
  },
});

export default earInfectionTypeSlice.reducer;

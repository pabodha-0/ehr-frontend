import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { LungsInfectionTypeState } from "../../types/LungsInfectionStateTypes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialState: LungsInfectionTypeState = {
  allLungsInfectionTypes: null,
};

export const getAllLungsInfectionTypes = createAsyncThunk(
  "lungs-infection-type/get-all",
  async (_, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    };

    try {
      return await axios
        .get(`${BASE_URL}/lungs-infection-type`, config)
        .then((res) => res.data);
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const lungsInfectionTypeSlice = createSlice({
  name: "lungs-infection-type",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Lungs Infection Types
    builder.addCase(
      getAllLungsInfectionTypes.pending,
      (state: LungsInfectionTypeState, action: PayloadAction) => {
        console.log("get all lungs infection types pending", action);
        state.allLungsInfectionTypes = {
          isLoading: true,
          isLoadedSuccessfully: false,
          dataMessage: "Loading",
          data: [],
        };
      }
    );

    builder.addCase(
      getAllLungsInfectionTypes.fulfilled,
      (state: LungsInfectionTypeState, action: PayloadAction<any>) => {
        console.log("get all lungs infection types fulfilled", action);
        state.allLungsInfectionTypes = {
          isLoading: false,
          isLoadedSuccessfully: true,
          dataMessage: "Get all successful",
          data: action.payload,
        };
      }
    );

    builder.addCase(
      getAllLungsInfectionTypes.rejected,
      (state: LungsInfectionTypeState, action: PayloadAction<any>) => {
        console.log("get all lungs infection types rejected", action);
        state.allLungsInfectionTypes = {
          isLoading: false,
          isLoadedSuccessfully: false,
          dataMessage: action.payload,
          data: [],
        };
      }
    );
  },
});

export default lungsInfectionTypeSlice.reducer;

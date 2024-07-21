import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AbdomenInfectionTypeState } from "../../types/AbdomenInfectionStateTypes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialState: AbdomenInfectionTypeState = {
  allAbdomenInfectionTypes: null,
};

export const getAllAbdomenInfectionTypes = createAsyncThunk(
  "abdomen-infection-type/get-all",
  async (_, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    };

    try {
      return await axios
        .get(`${BASE_URL}/abdomen-infection-type`, config)
        .then((res) => res.data);
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const abdomenInfectionTypeSlice = createSlice({
  name: "abdomen-infection-type",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Abdomen Infection Types
    builder.addCase(
      getAllAbdomenInfectionTypes.pending,
      (state: AbdomenInfectionTypeState, action: PayloadAction) => {
        console.log("get all abdomen infection types pending", action);
        state.allAbdomenInfectionTypes = {
          isLoading: true,
          isLoadedSuccessfully: false,
          dataMessage: "Loading",
          data: [],
        };
      }
    );

    builder.addCase(
      getAllAbdomenInfectionTypes.fulfilled,
      (state: AbdomenInfectionTypeState, action: PayloadAction<any>) => {
        console.log("get all abdomen infection types fulfilled", action);
        state.allAbdomenInfectionTypes = {
          isLoading: false,
          isLoadedSuccessfully: true,
          dataMessage: "Get all successful",
          data: action.payload,
        };
      }
    );

    builder.addCase(
      getAllAbdomenInfectionTypes.rejected,
      (state: AbdomenInfectionTypeState, action: PayloadAction<any>) => {
        console.log("get all abdomen infection types rejected", action);
        state.allAbdomenInfectionTypes = {
          isLoading: false,
          isLoadedSuccessfully: false,
          dataMessage: action.payload,
          data: [],
        };
      }
    );
  },
});

export default abdomenInfectionTypeSlice.reducer;

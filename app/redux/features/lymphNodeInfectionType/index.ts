import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { LymphNodeInfectionTypeState } from "../../types/LymphNodeInfectionStateTypes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialState: LymphNodeInfectionTypeState = {
  allLymphNodeInfectionTypes: null,
};

export const getAllLymphNodeInfectionTypes = createAsyncThunk(
  "lymph-node-infection/get-all",
  async (_, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    };

    try {
      return await axios
        .get(`${BASE_URL}/lymph-node-infection-type`, config)
        .then((res) => res.data);
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const lymphNodeInfectionTypeSlice = createSlice({
  name: "lymph-node-infection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Lymph Node Infection Types
    builder.addCase(
      getAllLymphNodeInfectionTypes.pending,
      (state: LymphNodeInfectionTypeState, action: PayloadAction) => {
        console.log("get all lymph node infection types pending", action);
        state.allLymphNodeInfectionTypes = {
          isLoading: true,
          isLoadedSuccessfully: false,
          dataMessage: "Loading",
          data: [],
        };
      }
    );

    builder.addCase(
      getAllLymphNodeInfectionTypes.fulfilled,
      (state: LymphNodeInfectionTypeState, action: PayloadAction<any>) => {
        console.log("get all lymph node infection types fulfilled", action);
        state.allLymphNodeInfectionTypes = {
          isLoading: false,
          isLoadedSuccessfully: true,
          dataMessage: "Get all successful",
          data: action.payload,
        };
      }
    );

    builder.addCase(
      getAllLymphNodeInfectionTypes.rejected,
      (state: LymphNodeInfectionTypeState, action: PayloadAction<any>) => {
        console.log("get all lymph node infection types rejected", action);
        state.allLymphNodeInfectionTypes = {
          isLoading: false,
          isLoadedSuccessfully: false,
          dataMessage: action.payload,
          data: [],
        };
      }
    );
  },
});

export default lymphNodeInfectionTypeSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SymptomState } from "../../types/SymptomStateTypes";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialState: SymptomState = {
  allSymptoms: null,
};

export const getAllSymptoms = createAsyncThunk(
  "symptom/get-all",
  async (_, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    };

    try {
      return await axios
        .get(`${BASE_URL}/symptom`, config)
        .then((res) => res.data);
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const symptomSlice = createSlice({
  name: "symptom",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Symptoms
    builder.addCase(
      getAllSymptoms.pending,
      (state: SymptomState, action: PayloadAction) => {
        console.log("get all symptoms pending", action);
        state.allSymptoms = {
          isLoading: true,
          isLoadedSuccessfully: false,
          dataMessage: "Loading",
          data: [],
        };
      }
    );

    builder.addCase(
      getAllSymptoms.fulfilled,
      (state: SymptomState, action: PayloadAction<any>) => {
        console.log("get all symptoms fulfilled", action);
        state.allSymptoms = {
          isLoading: false,
          isLoadedSuccessfully: true,
          dataMessage: "Get all successful",
          data: action.payload,
        };
      }
    );

    builder.addCase(
      getAllSymptoms.rejected,
      (state: SymptomState, action: PayloadAction<any>) => {
        console.log("get all symptoms rejected", action);
        state.allSymptoms = {
          isLoading: false,
          isLoadedSuccessfully: false,
          dataMessage: action.payload,
          data: [],
        };
      }
    );
  },
});

export default symptomSlice.reducer;

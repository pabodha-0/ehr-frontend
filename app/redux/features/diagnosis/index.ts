import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { DiagnosisState } from "../../types/DiagnosisStateTypes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialState: DiagnosisState = {
  allDiagnoses: null,
};

export const getAllDiagnoses = createAsyncThunk(
  "diagnosis/get-all",
  async (_, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    };

    try {
      return await axios
        .get(`${BASE_URL}/diagnosis`, config)
        .then((res) => res.data);
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const diagnosisSlice = createSlice({
  name: "diagnosis",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Diagnoses
    builder.addCase(
      getAllDiagnoses.pending,
      (state: DiagnosisState, action: PayloadAction) => {
        console.log("get all diagnoses pending", action);
        state.allDiagnoses = {
          isLoading: true,
          isLoadedSuccessfully: false,
          dataMessage: "Loading",
          data: [],
        };
      }
    );

    builder.addCase(
      getAllDiagnoses.fulfilled,
      (state: DiagnosisState, action: PayloadAction<any>) => {
        console.log("get all diagnoses fulfilled", action);
        state.allDiagnoses = {
          isLoading: false,
          isLoadedSuccessfully: true,
          dataMessage: "Get all successful",
          data: action.payload,
        };
      }
    );

    builder.addCase(
      getAllDiagnoses.rejected,
      (state: DiagnosisState, action: PayloadAction<any>) => {
        console.log("get all diagnoses rejected", action);
        state.allDiagnoses = {
          isLoading: false,
          isLoadedSuccessfully: false,
          dataMessage: action.payload,
          data: [],
        };
      }
    );
  },
});

export default diagnosisSlice.reducer;

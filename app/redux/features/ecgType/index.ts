import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ECGTypeState } from "../../types/ECGStateTypes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialState: ECGTypeState = {
  allECGTypes: null,
};

export const getAllECGTypes = createAsyncThunk(
  "ecg-type/get-all",
  async (_, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    };

    try {
      return await axios
        .get(`${BASE_URL}/ecg-type`, config)
        .then((res) => res.data);
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const ecgTypeSlice = createSlice({
  name: "ecg-type",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All ECG Types
    builder.addCase(
      getAllECGTypes.pending,
      (state: ECGTypeState, action: PayloadAction) => {
        console.log("get all ecg types pending", action);
        state.allECGTypes = {
          isLoading: true,
          isLoadedSuccessfully: false,
          dataMessage: "Loading",
          data: [],
        };
      }
    );

    builder.addCase(
      getAllECGTypes.fulfilled,
      (state: ECGTypeState, action: PayloadAction<any>) => {
        console.log("get all ecg types fulfilled", action);
        state.allECGTypes = {
          isLoading: false,
          isLoadedSuccessfully: true,
          dataMessage: "Get all successful",
          data: action.payload,
        };
      }
    );

    builder.addCase(
      getAllECGTypes.rejected,
      (state: ECGTypeState, action: PayloadAction<any>) => {
        console.log("get all ecg types rejected", action);
        state.allECGTypes = {
          isLoading: false,
          isLoadedSuccessfully: false,
          dataMessage: action.payload,
          data: [],
        };
      }
    );
  },
});

export default ecgTypeSlice.reducer;

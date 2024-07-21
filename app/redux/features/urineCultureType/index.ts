import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { UrineCultureTypeState } from "../../types/UrineCultureStateTypes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialState: UrineCultureTypeState = {
  allUrineCultureTypes: null,
};

export const getAllUrineCultureTypes = createAsyncThunk(
  "urine-culture-type/get-all",
  async (_, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    };

    try {
      return await axios
        .get(`${BASE_URL}/urine-culture-type`, config)
        .then((res) => res.data);
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const urineCultureTypeSlice = createSlice({
  name: "urine-culture-type",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Urine Culture Types
    builder.addCase(
      getAllUrineCultureTypes.pending,
      (state: UrineCultureTypeState, action: PayloadAction) => {
        console.log("get all urine culture types pending", action);
        state.allUrineCultureTypes = {
          isLoading: true,
          isLoadedSuccessfully: false,
          dataMessage: "Loading",
          data: [],
        };
      }
    );

    builder.addCase(
      getAllUrineCultureTypes.fulfilled,
      (state: UrineCultureTypeState, action: PayloadAction<any>) => {
        console.log("get all urine culture types fulfilled", action);
        state.allUrineCultureTypes = {
          isLoading: false,
          isLoadedSuccessfully: true,
          dataMessage: "Get all successful",
          data: action.payload,
        };
      }
    );

    builder.addCase(
      getAllUrineCultureTypes.rejected,
      (state: UrineCultureTypeState, action: PayloadAction<any>) => {
        console.log("get all urine culture types rejected", action);
        state.allUrineCultureTypes = {
          isLoading: false,
          isLoadedSuccessfully: false,
          dataMessage: action.payload,
          data: [],
        };
      }
    );
  },
});

export default urineCultureTypeSlice.reducer;

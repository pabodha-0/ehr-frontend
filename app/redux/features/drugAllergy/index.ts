import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { DrugAllergyState } from "../../types/DrugAllergyStateTypes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialState: DrugAllergyState = {
  allDrugAllergies: null,
};

export const getAllDrugAllergies = createAsyncThunk(
  "drug-allergy/get-all",
  async (_, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    };

    try {
      return await axios
        .get(`${BASE_URL}/drug-allergy`, config)
        .then((res) => res.data);
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const drugAllergySlice = createSlice({
  name: "drug-allergy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Drug Allergies
    builder.addCase(
      getAllDrugAllergies.pending,
      (state: DrugAllergyState, action: PayloadAction) => {
        console.log("get all drug allergies pending", action);
        state.allDrugAllergies = {
          isLoading: true,
          isLoadedSuccessfully: false,
          dataMessage: "Loading",
          data: [],
        };
      }
    );

    builder.addCase(
      getAllDrugAllergies.fulfilled,
      (state: DrugAllergyState, action: PayloadAction<any>) => {
        console.log("get all drug allergies fulfilled", action);
        state.allDrugAllergies = {
          isLoading: false,
          isLoadedSuccessfully: true,
          dataMessage: "Get all successful",
          data: action.payload,
        };
      }
    );

    builder.addCase(
      getAllDrugAllergies.rejected,
      (state: DrugAllergyState, action: PayloadAction<any>) => {
        console.log("get all drug allergies rejected", action);
        state.allDrugAllergies = {
          isLoading: false,
          isLoadedSuccessfully: false,
          dataMessage: action.payload,
          data: [],
        };
      }
    );
  },
});

export default drugAllergySlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { FoodAllergyState } from "../../types/FoodAllergyStateTypes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialState: FoodAllergyState = {
  allFoodAllergies: null,
};

export const getAllFoodAllergies = createAsyncThunk(
  "food-allergy/get-all",
  async (_, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    };

    try {
      return await axios
        .get(`${BASE_URL}/food-allergy`, config)
        .then((res) => res.data);
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const foodAllergySlice = createSlice({
  name: "food-allergy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Food Allergies
    builder.addCase(
      getAllFoodAllergies.pending,
      (state: FoodAllergyState, action: PayloadAction) => {
        console.log("get all food allergies pending", action);
        state.allFoodAllergies = {
          isLoading: true,
          isLoadedSuccessfully: false,
          dataMessage: "Loading",
          data: [],
        };
      }
    );

    builder.addCase(
      getAllFoodAllergies.fulfilled,
      (state: FoodAllergyState, action: PayloadAction<any>) => {
        console.log("get all food allergies fulfilled", action);
        state.allFoodAllergies = {
          isLoading: false,
          isLoadedSuccessfully: true,
          dataMessage: "Get all successful",
          data: action.payload,
        };
      }
    );

    builder.addCase(
      getAllFoodAllergies.rejected,
      (state: FoodAllergyState, action: PayloadAction<any>) => {
        console.log("get all food allergies rejected", action);
        state.allFoodAllergies = {
          isLoading: false,
          isLoadedSuccessfully: false,
          dataMessage: action.payload,
          data: [],
        };
      }
    );
  },
});

export default foodAllergySlice.reducer;

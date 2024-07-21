import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ThroatInfectionTypeState } from "../../types/ThroatInfectionStateTypes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialState: ThroatInfectionTypeState = {
  allThroatInfectionType: null,
};

export const getAllThroatInfectionTypes = createAsyncThunk(
  "throat-infection-type/get-all",
  async (_, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    };

    try {
      return await axios
        .get(`${BASE_URL}/throat-infection-type`, config)
        .then((res) => res.data);
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const throatInfectionTypeSlice = createSlice({
  name: "throat-infection-type",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Throat infection Types
    builder.addCase(
      getAllThroatInfectionTypes.pending,
      (state: ThroatInfectionTypeState, action: PayloadAction) => {
        console.log("get all throat infection types pending", action);
        state.allThroatInfectionType = {
          isLoading: true,
          isLoadedSuccessfully: false,
          dataMessage: "Loading",
          data: [],
        };
      }
    );

    builder.addCase(
      getAllThroatInfectionTypes.fulfilled,
      (state: ThroatInfectionTypeState, action: PayloadAction<any>) => {
        console.log("get all throat infection types fulfilled", action);
        state.allThroatInfectionType = {
          isLoading: false,
          isLoadedSuccessfully: true,
          dataMessage: "Get all successful",
          data: action.payload,
        };
      }
    );

    builder.addCase(
      getAllThroatInfectionTypes.rejected,
      (state: ThroatInfectionTypeState, action: PayloadAction<any>) => {
        console.log("get all throat infection types rejected", action);
        state.allThroatInfectionType = {
          isLoading: false,
          isLoadedSuccessfully: false,
          dataMessage: action.payload,
          data: [],
        };
      }
    );
  },
});

export default throatInfectionTypeSlice.reducer;

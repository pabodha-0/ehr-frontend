import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { PatientState } from "../../types/PatientStateTypes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialState: PatientState = {
  allPatients: null,
  activePatient: null,
};

interface urlParams {
  pageNo: number;
  pageSize: number;
}

export const getAllPatients = createAsyncThunk(
  "patient/get-all",
  async ({ pageNo, pageSize }: urlParams, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        pageNo,
        pageSize,
      },
      // withCredentials: true,
    };

    try {
      return await axios
        .get(`${BASE_URL}/patient`, config)
        .then((res) => res.data);
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getPatientById = createAsyncThunk(
  "patient/get-by-id",
  async ({ id }: { id: string | number }, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    };

    try {
      return await axios
        .get(`${BASE_URL}/patient/${id}`, config)
        .then((res) => res.data);
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Patients
    builder.addCase(
      getAllPatients.pending,
      (state: PatientState, action: PayloadAction) => {
        console.log("get all patients pending", action);
        state.allPatients = {
          isLoading: true,
          isLoadedSuccessfully: false,
          dataMessage: "Loading",
          data: [],
          totalElements: 0,
          totalPages: 0,
          pageNo: 0,
          pageSize: 0,
        };
      }
    );

    builder.addCase(
      getAllPatients.fulfilled,
      (state: PatientState, action: PayloadAction<any>) => {
        console.log("get all patients fulfilled", action);
        state.allPatients = {
          isLoading: false,
          isLoadedSuccessfully: true,
          dataMessage: "Get all successful",
          data: action.payload.content,
          totalElements: action.payload.totalElements,
          totalPages: action.payload.totalPages,
          pageNo: action.payload.number,
          pageSize: action.payload.numberOfElements,
        };
      }
    );

    builder.addCase(
      getAllPatients.rejected,
      (state: PatientState, action: PayloadAction<any>) => {
        console.log("get all patients rejected", action);
        state.allPatients = {
          isLoading: false,
          isLoadedSuccessfully: false,
          dataMessage: action.payload,
          data: [],
          totalElements: 0,
          totalPages: 0,
          pageNo: 0,
          pageSize: 0,
        };
      }
    );

    // Get Patient By Id
    builder.addCase(
      getPatientById.pending,
      (state: PatientState, action: PayloadAction) => {
        console.log("get patient by id pending", action);
        state.activePatient = {
          isLoading: true,
          isLoadedSuccessfully: false,
          dataMessage: "Loading",
          data: null,
        };
      }
    );

    builder.addCase(
      getPatientById.fulfilled,
      (state: PatientState, action: PayloadAction<any>) => {
        console.log("get patient by id fulfilled", action);
        state.activePatient = {
          isLoading: false,
          isLoadedSuccessfully: true,
          dataMessage: "Get By Id Successful",
          data: action.payload,
        };
      }
    );

    builder.addCase(
      getPatientById.rejected,
      (state: PatientState, action: PayloadAction<any>) => {
        console.log("get patient by id rejected", action);
        state.activePatient = {
          isLoading: false,
          isLoadedSuccessfully: false,
          dataMessage: action.payload,
          data: null,
        };
      }
    );
  },
});

export default patientSlice.reducer;

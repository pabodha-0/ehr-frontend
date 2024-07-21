import { AppointmentState } from "@/app/redux/types/AppointmentStateTypes";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialState: AppointmentState = {
  createAppointment: null,
  activeAppointment: null,
  allAppointments: null,
};

const convertToArray = (obj: any) => {
  if (Array.isArray(obj)) return obj;
  else return [obj];
};

const familyRelationMapper = (dataObject: any, relations: string[]) => {
  const relationArray = [];

  for (const relation of relations) {
    const relationLowercase = relation.toLowerCase();

    if (Array.isArray(dataObject[`${relationLowercase}Name`])) {
      for (let i = 0; i < dataObject[`${relationLowercase}Name`].length; i++) {
        const relationListItem = {
          relation: relation,
          relatedPatient: {
            name: dataObject[`${relationLowercase}Name`][i],
            occupation: convertToArray(
              dataObject[`${relationLowercase}Occupation`]
            )[i],
            medicalHistory: {
              dm: convertToArray(dataObject[`${relationLowercase}DM`])[i],
              epilepsy: convertToArray(
                dataObject[`${relationLowercase}Epilepsy`]
              )[i],
              ht: convertToArray(dataObject[`${relationLowercase}HT`])[i],
              cancer: convertToArray(dataObject[`${relationLowercase}Cancer`])[
                i
              ],
              ihd: convertToArray(dataObject[`${relationLowercase}IHD`])[i],
              ba: convertToArray(dataObject[`${relationLowercase}BA`])[i],
              cva: convertToArray(dataObject[`${relationLowercase}CVA`])[i],
            },
            socialHistory: {
              alcoholic: convertToArray(
                dataObject[`${relationLowercase}Alcoholic`]
              )[i],
              smoking: convertToArray(
                dataObject[`${relationLowercase}Smoking`]
              )[i],
            },
            surgicalHistory: {
              surgery: convertToArray(
                dataObject[`${relationLowercase}Surgery`]
              )[i],
            },
          },
        };

        relationArray.push(relationListItem);
      }
    } else {
      const relationListItem = {
        relation: relation,
        relatedPatient: {
          name: dataObject[`${relationLowercase}Name`],
          occupation: dataObject[`${relationLowercase}Occupation`],
          medicalHistory: {
            dm: dataObject[`${relationLowercase}DM`],
            epilepsy: dataObject[`${relationLowercase}Epilepsy`],
            ht: dataObject[`${relationLowercase}HT`],
            cancer: dataObject[`${relationLowercase}Cancer`],
            ihd: dataObject[`${relationLowercase}IHD`],
            ba: dataObject[`${relationLowercase}BA`],
            cva: dataObject[`${relationLowercase}CVA`],
          },
          socialHistory: {
            alcoholic: dataObject[`${relationLowercase}Alcoholic`],
            smoking: dataObject[`${relationLowercase}Smoking`],
          },
          surgicalHistory: {
            surgery: dataObject[`${relationLowercase}Surgery`],
          },
        },
      };

      relationArray.push(relationListItem);
    }
  }

  return relationArray;
};

export const createAppointment = createAsyncThunk(
  "appointment/create",
  async (dataObject: any, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    };

    const body = JSON.stringify({
      patient: {
        name: dataObject["patientName"],
        gender: dataObject["patientGender"],
        dob: dataObject["patientDOB"],
        age: dataObject["patientAge"],
        address: dataObject["patientAddress"],
        phone: dataObject["patientPhoneNum"],
        occupation: dataObject["patientOccupation"],
        height: dataObject["patientHeight"],
        weight: dataObject["patientWeight"],
        bmi: dataObject["patientBMI"],
        medicalHistory: {
          dm: dataObject["patientDM"],
          epilepsy: dataObject["patientEpilepsy"],
          ht: dataObject["patientHT"],
          cancer: dataObject["patientCancer"],
          ihd: dataObject["patientIHD"],
          ba: dataObject["patientBA"],
          cva: dataObject["patientCVA"],
        },
        socialHistory: {
          alcoholic: dataObject["patientIsAlcoholic"],
          smoking: dataObject["patientIsSmoking"],
        },
        surgicalHistory: { surgery: dataObject["patientHadSurgery"] },
        foodAllergies:
          convertToArray(dataObject["patientFoodAllergies"]).length > 0
            ? convertToArray(dataObject["patientFoodAllergies"])?.map(
                (allergy: FormDataEntryValue | null) => ({ name: allergy })
              )
            : null,
        drugAllergies:
          convertToArray(dataObject["patientDrugAllergies"]).length > 0
            ? convertToArray(dataObject["patientDrugAllergies"])?.map(
                (allergy: FormDataEntryValue | null) => ({ name: allergy })
              )
            : null,
        relations: familyRelationMapper(dataObject, [
          "Mother",
          "Father",
          "Child",
        ]).filter(Boolean),
      },
      appointmentSymptoms:
        convertToArray(dataObject["patientSymptoms"]).length > 0
          ? convertToArray(dataObject["patientSymptoms"])?.map(
              (symptom: FormDataEntryValue | null, i) => ({
                symptom: { name: symptom },
                duration: convertToArray(dataObject["patientSymptomDurations"])[
                  i
                ]
                  ? convertToArray(dataObject["patientSymptomDurations"])[i]
                  : "",
              })
            )
          : null,
      examinationReport: {
        pale: dataObject["patientIsPale"],
        temperature: dataObject["patientTemperature"],
        earInfectionType: { name: dataObject["patientEarInfectionType"] },
        noseInfectionType: { name: dataObject["patientNoseInfectionType"] },
        throatInfectionType: { name: dataObject["patientThroatInfectionType"] },
        abdomenInfectionType: {
          name: dataObject["patientAbdomenInfectionType"],
        },
        lymphNodeInfectionType: {
          name: dataObject["patientLymphNodeInfectionType"],
        },
        lungsInfectionType: { name: dataObject["patientLungsInfectionType"] },
        heartSoundType: { name: dataObject["patientHeartSoundType"] },
        heartRhythmType: { name: dataObject["patientHeartRhythmType"] },
        pulse: dataObject["patientPulse"],
        firstBloodPressure:
          convertToArray(dataObject["patientFirstBloodPressure"]).length == 2
            ? `${convertToArray(dataObject["patientFirstBloodPressure"])[0]}/${
                convertToArray(dataObject["patientFirstBloodPressure"])[1]
              }`
            : null,
        secondBloodPressure:
          convertToArray(dataObject["patientSecondBloodPressure"]).length == 2
            ? `${convertToArray(dataObject["patientSecondBloodPressure"])[0]}/${
                convertToArray(dataObject["patientSecondBloodPressure"])[1]
              }`
            : null,
        leftEye:
          convertToArray(dataObject["patientLeftVision"]).length == 2
            ? `${convertToArray(dataObject["patientLeftVision"])[0]}/${
                convertToArray(dataObject["patientLeftVision"])[1]
              }`
            : null,
        rightEye:
          convertToArray(dataObject["patientRightVision"]).length == 2
            ? `${convertToArray(dataObject["patientRightVision"])[0]}/${
                convertToArray(dataObject["patientRightVision"])[1]
              }`
            : null,
      },
      bloodReport: {
        wbc: dataObject["patientWBC"],
        n: dataObject["patientN"],
        l: dataObject["patientL"],
        e: dataObject["patientE"],
        m: dataObject["patientM"],
        b: dataObject["patientB"],
        hemoglobin: dataObject["patientHemoglobin"],
        pcv: dataObject["patientPCV"],
        platelets: dataObject["patientPlatelets"],
      },
      bloodSugarReport: {
        fbs: dataObject["patientFBS"],
        ppbs: dataObject["patientPPBS"],
        rbs: dataObject["patientRBS"],
        hba1c: dataObject["patientHBA1C"],
      },
      kidneyReport: {
        serumCreatinine: dataObject["patientSerumCreatinine"],
        bloodUrea: dataObject["patientBloodUrea"],
        serumElectrolytesNA: dataObject["patientSerumElectrolytesNA"],
        serumElectrolytesK: dataObject["patientSerumElectrolytesK"],
        serumElectrolytesCL: dataObject["patientSerumElectrolytesCL"],
      },
      lipidProfile: {
        totalCholesterol: dataObject["patientTotalCholesterol"],
        stg: dataObject["patientSTG"],
        hdl: dataObject["patientHDL"],
        ldl: dataObject["patientLDL"],
        choHDL: dataObject["patientCHOHDL"],
      },
      liverReport: {
        gammaGT: dataObject["patientGammaGT"],
        sgotAST: dataObject["patientSGOTAST"],
        sgptALT: dataObject["patientSGPTALT"],
        totalBilirubin: dataObject["patientTotalBilirubin"],
        directBilirubin: dataObject["patientDirectBilirubin"],
        indirectBilirubin: dataObject["patientIndirectBilirubin"],
      },
      otherTestReport: {
        ecgType: { name: dataObject["patientECG"] },
        esr: dataObject["patientESR"],
        crp: dataObject["patientCRP"],
      },
      thyroidReport: {
        tsh: dataObject["patientTSH"],
        t3: dataObject["patientT3"],
        t4: dataObject["patientT4"],
      },
      urineReport: {
        urineCultureType: { name: dataObject["patientUrineCulture"] },
        albumin: dataObject["patientAlbumin"],
        sugar: dataObject["patientSugar"],
        pusCells: dataObject["patientPusCells"],
        redCells: dataObject["patientRedCells"],
      },
      diagnoses:
        convertToArray(dataObject["patientDiagnoses"]).length > 0
          ? convertToArray(dataObject["patientDiagnoses"])?.map(
              (diagnosis: FormDataEntryValue | null) => ({ name: diagnosis })
            )
          : null,
    });

    try {
      return await axios
        .post(`${BASE_URL}/appointment`, body, config)
        .then((res) => res.data);
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Create Appointment
    builder.addCase(
      createAppointment.pending,
      (state: AppointmentState, action: PayloadAction) => {
        console.log("appointment creation pending", action);
        state.createAppointment = {
          isCreating: true,
          isCreatedSuccessfully: false,
          dataMessage: "Creating",
          data: null,
        };
      }
    );

    builder.addCase(
      createAppointment.fulfilled,
      (state: AppointmentState, action: PayloadAction<any>) => {
        console.log("appointment creation fulfilled", action);
        state.createAppointment = {
          isCreating: false,
          isCreatedSuccessfully: true,
          dataMessage: "Created Successfully",
          data: action.payload,
        };
      }
    );

    builder.addCase(
      createAppointment.rejected,
      (state: AppointmentState, action: PayloadAction<any>) => {
        console.log("appointment creation rejected", action);
        state.createAppointment = {
          isCreating: false,
          isCreatedSuccessfully: false,
          dataMessage: action.payload,
          data: null,
        };
      }
    );
  },
});

export default appointmentSlice.reducer;

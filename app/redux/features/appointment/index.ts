import {Appointment, AppointmentState} from "@/app/redux/types/AppointmentStateTypes";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialState: AppointmentState = {
    createAppointment: null,
    activeAppointment: null,
    allAppointments: null
}

export const createAppointment = createAsyncThunk(
    "appointment/create",
    async(dataObject: any, {rejectWithValue}) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        }

        const body = JSON.stringify({
            patient: {
                name: dataObject["patientName"],
                gender: dataObject["patientGender"],
                dob: dataObject["patientDOB"],
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
                    cva: dataObject["patientCVA"]
                },
                socialHistory: {
                    alcoholic: dataObject["patientIsAlcoholic"],
                    smoking: dataObject["patientIsSmoking"]
                },
                surgicalHistory: {surgery: dataObject["patientHadSurgery"]},
                foodAllergies: [dataObject["patientFoodAllergies"]]?.map((allergy: FormDataEntryValue | null) => ({name: allergy})),
                drugAllergies: [dataObject["patientDrugAllergies"]]?.map((allergy: FormDataEntryValue | null) => ({name: allergy})),
                relations: []
            },
            symptoms: [dataObject["patientSymptoms"]]?.map((symptom: FormDataEntryValue | null) => ({name: symptom})),
            examinationReport: {
                pale: dataObject["patientIsPale"],
                temperature: dataObject["patientTemperature"],
                earInfectionType: {name: dataObject["patientEarInfectionType"]},
                noseInfectionType: {name: dataObject["patientNoseInfectionType"]},
                throatInfectionType: {name: dataObject["patientNhroatInfectionType"]},
                abdomenInfectionType: {name: dataObject["patientAbdomenInfectionType"]},
                lymphNodeInfectionType: {name: dataObject["patientLymphNodeInfectionType"]},
                lungsInfectionType: {name: dataObject["patientLungsInfectionType"]},
                heartSoundType: {name: dataObject["patientHeartSoundType"]},
                heartRhythmType: {name: dataObject["patientHeartRhythmType"]},
                pulse: dataObject["patientPulse"],
                firstBloodPressure: `${[dataObject["patientFirstBloodPressure"]][0]}/${[dataObject["patientRightVision"]][1]}`,
                secondBloodPressure: `${[dataObject["patientSecondBloodPressure"]][0]}/${[dataObject["patientRightVision"]][1]}`,
                leftEye: `${[dataObject["patientLeftViision"]][0]}/${[dataObject["patientRightVision"]][1]}`,
                rightEye: `${[dataObject["patientRightVision"]][0]}/${[dataObject["patientRightVision"]][1]}`
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
                platelets: dataObject["patientPlatelets"]
            },
            bloodSugarReport: {
                fbs: dataObject["patientFBS"],
                ppbs: dataObject["patientPPBS"],
                rbs: dataObject["patientRBS"],
                hba1c: dataObject["patientHBA1C"]
            },
            kidneyReport: {
                serumCreatinine: dataObject["patientSerumCreatinine"],
                bloodUrea: dataObject["patientBloodUrea"],
                serumElectrolytesNA: dataObject["patientSerumElectrolytesNA"],
                serumElectrolytesK: dataObject["patientSerumElectrolytesK"],
                serumElectrolytesCL: dataObject["patientSerumElectrolytesCL"]
            },
            lipidProfile: {
                totalCholesterol: dataObject["patientTotalCholesterol"],
                stg: dataObject["patientSTG"],
                hdl: dataObject["patientHDL"],
                ldl: dataObject["patientLDL"],
                choHDL: dataObject["patientCHOHDL"]
            },
            liverReport: {
                gammaGT: dataObject["patientGammaGT"],
                sgotAST: dataObject["patientSGOTAST"],
                sgptALT: dataObject["patientSGPTALT"],
                totalBilirubin: dataObject["patientTotalBilirubin"],
                directBilirubin: dataObject["patientDirectBilirubin"],
                indirectBilirubin: dataObject["patientIndirectBilirubin"]
            },
            otherTestReport: {
                ecgType: {name: dataObject["patientECG"]},
                esr: dataObject["patientESR"],
                crp: dataObject["patientCRP"]
            },
            thyroidReport: {
                tsh: dataObject["patientTSH"],
                t3: dataObject["patientT3"],
                t4: dataObject["patientT4"]
            },
            urineReport: {
                urineCultureType: {name: dataObject["patientUrineCulture"]},
                albumin: dataObject["patientAlbumin"],
                sugar: dataObject["patientSugar"],
                pusCells: dataObject["patientPusCells"],
                redCells: dataObject["patientRedCells"]
            }
        })

        try {
            let response = await axios
                .post(`${BASE_URL}/api/appointment`, body, config)
                .then(res => res.data);
            return response;
        } catch (error: any) {
            return rejectWithValue(error)
        }
    }
)

const appointmentSlice = createSlice({
    name: "appointment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Create Appointment
        builder.addCase(createAppointment.pending, (state: AppointmentState, action: PayloadAction) => {
            console.log("appointment creation pending", action);
            state.createAppointment = {
                isCreating: true,
                isCreatedSuccessfully: false,
                dataMessage: "Creating",
                data: null
            }
        })

        builder.addCase(createAppointment.fulfilled, (state: AppointmentState, action: PayloadAction<any>) => {
            console.log("appointment creation fulfilled", action);
            state.createAppointment = {
                isCreating: false,
                isCreatedSuccessfully: true,
                dataMessage: "Created Successfully",
                data: action.payload
            }
        })

        builder.addCase(createAppointment.rejected, (state: AppointmentState, action: PayloadAction<any>) => {
            console.log("appointment creation rejected", action);
            state.createAppointment = {
                isCreating: false,
                isCreatedSuccessfully: false,
                dataMessage: action.payload,
                data: null
            }
        })
    }
})

export default appointmentSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from "./features/appointment";
import abdomenInfectionTypeReducer from "./features/abdomenInfectionType";
import diagnosisReducer from "./features/diagnosis";
import drugAllergyReducer from "./features/drugAllergy";
import earInfectionTypeReducer from "./features/earInfectionType";
import ecgTypeReducer from "./features/ecgType";
import foodAllergyReducer from "./features/foodAllergy";
import heartRhythmTypeReducer from "./features/heartRhythmType";
import heartSoundTypeReducer from "./features/heartSoundType";
import lungsInfectionTypeReducer from "./features/lungsInfectionType";
import lymphNodeInfectionTypeReducer from "./features/lymphNodeInfectionType";
import noseInfectionTypeReducer from "./features/noseInfectionType";
import patientReducer from "./features/patient";
import symptomReducer from "./features/symptom";
import throatInfectionTypeReducer from "./features/throatInfectionType";
import urineCultureTypeReducer from "./features/urineCultureType";

export const store = configureStore({
  reducer: {
    appointment: appointmentReducer,
    abdomenInfectionType: abdomenInfectionTypeReducer,
    diagnose: diagnosisReducer,
    drugAllergie: drugAllergyReducer,
    earInfectionType: earInfectionTypeReducer,
    ecgType: ecgTypeReducer,
    foodAllergie: foodAllergyReducer,
    heartRhythmType: heartRhythmTypeReducer,
    heartSoundType: heartSoundTypeReducer,
    lungsInfectionType: lungsInfectionTypeReducer,
    lymphNodeInfectionType: lymphNodeInfectionTypeReducer,
    noseInfectionType: noseInfectionTypeReducer,
    patient: patientReducer,
    symptom: symptomReducer,
    throatInfectionType: throatInfectionTypeReducer,
    urineCultureType: urineCultureTypeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

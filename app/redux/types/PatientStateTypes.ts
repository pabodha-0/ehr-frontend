import { MedicalHistory } from "@/app/redux/types/MedicalHistoryStateTypes";
import { SocialHistory } from "@/app/redux/types/SocialHistoryStateTypes";
import { SurgicalHistory } from "@/app/redux/types/SurgicalHistoryStateTypes";
import { FoodAllergy } from "@/app/redux/types/FoodAllergyStateTypes";
import { DrugAllergy } from "@/app/redux/types/DrugAllergyStateTypes";
import { Appointment } from "./AppointmentStateTypes";

export interface PatientState {
  allPatients: AllPatients | null;
  activePatient: ActivePatient | null;
}

export interface AllPatients {
  isLoading: boolean;
  isLoadedSuccessfully: boolean;
  dataMessage: string;
  data: Patient[];
  totalPages: number;
  totalElements: number;
  pageNo: number;
  pageSize: number;
}

export interface ActivePatient {
  isLoading: boolean;
  isLoadedSuccessfully: boolean;
  dataMessage: string;
  data: Patient | null;
}

export interface Patient {
  id: number;
  name: string;
  gender: "Male" | "Female";
  dob: Date;
  age: string | number;
  address: string;
  phone: number;
  occupation: string;
  height: string;
  weight: string;
  bmi: string;
  medicalHistory: MedicalHistory;
  socialHistory: SocialHistory;
  surgicalHistory: SurgicalHistory;
  foodAllergies: FoodAllergy[];
  drugAllergies: DrugAllergy[];
  appointments: Appointment[];
  relations: Relation[];
  createdOn: string;
  lastUpdatedOn: string;
}

export interface Relation {
  id: number;
  relatedPatient: Patient;
  relation: string;
}

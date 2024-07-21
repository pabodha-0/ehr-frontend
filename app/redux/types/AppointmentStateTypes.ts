import { Patient } from "@/app/redux/types/PatientStateTypes";
import {
  AppointmentSymptom,
  Symptom,
} from "@/app/redux/types/SymptomStateTypes";
import { ExaminationReport } from "@/app/redux/types/ExaminationReportTypes";
import { BloodReport } from "@/app/redux/types/BloodReportStateTypes";
import { BloodSugarReport } from "@/app/redux/types/BloodSugarReportStateTypes";
import { KidneyReport } from "@/app/redux/types/KidneyReportStateTypes";
import { LipidProfile } from "@/app/redux/types/LipidProfileStateTypes";
import { LiverReport } from "@/app/redux/types/LiverReportStateTypes";
import { OtherTestReport } from "@/app/redux/types/OtherTestReportStateTypes";
import { ThyroidReport } from "@/app/redux/types/ThyroidReportStateTypes";
import { UrineReport } from "@/app/redux/types/UrineReportStateTypes";
import { Diagnosis } from "./DiagnosisStateTypes";

export interface AppointmentState {
  createAppointment: CreateAppointment | null;
  activeAppointment: ActiveAppointment | null;
  allAppointments: AllAppointments | null;
}

export interface CreateAppointment {
  isCreating: boolean;
  isCreatedSuccessfully: boolean;
  dataMessage: string;
  data: Appointment | null;
}

export interface ActiveAppointment {
  isLoading: boolean;
  isLoadedSuccessfully: boolean;
  dataMessage: string;
  data: Appointment;
}

export interface AllAppointments {
  isLoading: boolean;
  isLoadedSuccessfully: boolean;
  dataMessage: string;
  pageCount: number;
  data: Appointment[];
}

export interface Appointment {
  id: number;
  patient: Patient;
  appointmentSymptoms: AppointmentSymptom[];
  examinationReport: ExaminationReport;
  bloodReport: BloodReport;
  bloodSugarReport: BloodSugarReport;
  kidneyReport: KidneyReport;
  lipidProfile: LipidProfile;
  liverReport: LiverReport;
  otherTestReport: OtherTestReport;
  thyroidReport: ThyroidReport;
  urineReport: UrineReport;
  diagnoses: Diagnosis[];
  createdOn: string;
  lastUpdatedOn: string;
}

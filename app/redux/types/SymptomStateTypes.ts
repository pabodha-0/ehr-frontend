export interface SymptomState {
  allSymptoms: AllSymptoms | null;
}

export interface AllSymptoms {
  isLoading: boolean;
  isLoadedSuccessfully: boolean;
  dataMessage: string;
  data: Symptom[];
}

export interface Symptom {
  id: number;
  name: string;
}

export interface AppointmentSymptom {
  symptom: Symptom;
  duration: string;
}

export interface DiagnosisState {
  allDiagnoses: AllDiagnoses | null;
}

export interface AllDiagnoses {
  isLoading: boolean;
  isLoadedSuccessfully: boolean;
  dataMessage: string;
  data: Diagnosis[];
}

export interface Diagnosis {
  id: number;
  name: string;
}

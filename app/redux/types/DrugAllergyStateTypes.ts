export interface DrugAllergyState {
  allDrugAllergies: AllDrugAllergies | null;
}

export interface AllDrugAllergies {
  isLoading: boolean;
  isLoadedSuccessfully: boolean;
  dataMessage: string;
  data: DrugAllergy[];
}

export interface DrugAllergy {
  id: number;
  name: string;
}

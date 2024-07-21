export interface EarInfectionTypeState {
  allEarInfectionTypes: AllEarInfectionTypes | null;
}

export interface AllEarInfectionTypes {
  isLoading: boolean;
  isLoadedSuccessfully: boolean;
  dataMessage: string;
  data: EarInfectionType[];
}

export interface EarInfectionType {
  id: number;
  name: string;
}

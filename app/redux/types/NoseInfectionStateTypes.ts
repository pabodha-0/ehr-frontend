export interface NoseInfectionTypeState {
  allNoseInfectionTypes: AllNoseInfectionTypes | null;
}

export interface AllNoseInfectionTypes {
  isLoading: boolean;
  isLoadedSuccessfully: boolean;
  dataMessage: string;
  data: NoseInfectionType[];
}

export interface NoseInfectionType {
  id: number;
  name: string;
}

export interface LungsInfectionTypeState {
  allLungsInfectionTypes: AllLungsInfectionTypes | null;
}

export interface AllLungsInfectionTypes {
  isLoading: boolean;
  isLoadedSuccessfully: boolean;
  dataMessage: string;
  data: LungsInfectionType[];
}

export interface LungsInfectionType {
  id: number;
  name: string;
}

export interface LymphNodeInfectionTypeState {
  allLymphNodeInfectionTypes: AllLymphNodeInfectionTypes | null;
}

export interface AllLymphNodeInfectionTypes {
  isLoading: boolean;
  isLoadedSuccessfully: boolean;
  dataMessage: string;
  data: LymphNodeInfectionType[];
}

export interface LymphNodeInfectionType {
  id: number;
  name: string;
}

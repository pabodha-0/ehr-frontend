export interface AbdomenInfectionTypeState {
  allAbdomenInfectionTypes: AllAbdomenInfectionTypes | null;
}

export interface AllAbdomenInfectionTypes {
  isLoading: boolean;
  isLoadedSuccessfully: boolean;
  dataMessage: string;
  data: AbdomenInfectionType[];
}

export interface AbdomenInfectionType {
  id: number;
  name: string;
}

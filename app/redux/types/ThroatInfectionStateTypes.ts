export interface ThroatInfectionTypeState {
  allThroatInfectionType: AllThroatInfectionType | null;
}

export interface AllThroatInfectionType {
  isLoading: boolean;
  isLoadedSuccessfully: boolean;
  dataMessage: string;
  data: ThroatInfectionType[];
}

export interface ThroatInfectionType {
  id: number;
  name: string;
}

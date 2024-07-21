export interface UrineCultureTypeState {
  allUrineCultureTypes: AllUrineCultureTypes | null;
}

export interface AllUrineCultureTypes {
  isLoading: boolean;
  isLoadedSuccessfully: boolean;
  dataMessage: string;
  data: UrineCultureType[];
}

export interface UrineCultureType {
  id: number;
  name: string;
}

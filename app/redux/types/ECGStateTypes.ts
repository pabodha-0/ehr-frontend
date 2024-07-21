export interface ECGTypeState {
  allECGTypes: AllECGTypes | null;
}

export interface AllECGTypes {
  isLoading: boolean;
  isLoadedSuccessfully: boolean;
  dataMessage: string;
  data: ECGType[];
}

export type ECGType = {
  id: number;
  name: string;
};

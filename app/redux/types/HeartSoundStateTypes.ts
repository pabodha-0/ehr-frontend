export interface HeartSoundTypeState {
  allHeartSoundTypes: AllHeartSoundTypes | null;
}

export interface AllHeartSoundTypes {
  isLoading: boolean;
  isLoadedSuccessfully: boolean;
  dataMessage: string;
  data: HeartSoundType[];
}

export interface HeartSoundType {
  id: number;
  name: string;
}

export interface HeartRhythmTypeState {
  allHeartRhythmTypes: AllHeartRhythmTypes | null;
}

export interface AllHeartRhythmTypes {
  isLoading: boolean;
  isLoadedSuccessfully: boolean;
  dataMessage: string;
  data: HeartRhythmType[];
}

export interface HeartRhythmType {
  id: number;
  name: string;
}

export interface FoodAllergyState {
  allFoodAllergies: AllFoodAllergies | null;
}

export interface AllFoodAllergies {
  isLoading: boolean;
  isLoadedSuccessfully: boolean;
  dataMessage: string;
  data: FoodAllergy[];
}

export interface FoodAllergy {
  id: number;
  name: string;
}

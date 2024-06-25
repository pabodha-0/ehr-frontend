import {MedicalHistory} from "@/app/redux/types/MedicalHistoryStateTypes";
import {SocialHistory} from "@/app/redux/types/SocialHistoryStateTypes";
import {SurgicalHistory} from "@/app/redux/types/SurgicalHistoryStateTypes";
import {FoodAllergy} from "@/app/redux/types/FoodAllergyStateTypes";
import {DrugAllergy} from "@/app/redux/types/DrugAllergyStateTypes";

export interface Patient {
    id: number,
    name: string,
    gender: "Male" | "Female",
    dob: Date,
    address: string,
    phone: number,
    occupation: string,
    medicalHistory: MedicalHistory,
    socialHistory: SocialHistory,
    surgicalHistory: SurgicalHistory,
    foodAllergies: FoodAllergy[],
    drugAllergies: DrugAllergy[],
    relations: null
}
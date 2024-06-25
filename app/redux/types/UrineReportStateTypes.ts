import {UrineCultureType} from "@/app/redux/types/UrineCultureStateTypes";

export interface UrineReport {
    id: number,
    urineCultureType: UrineCultureType,
    albumin: string,
    sugar: string,
    pusCells: number,
    redCells: number
}
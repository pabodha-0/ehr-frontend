import {ECGType} from "@/app/redux/types/ECGStateTypes";

export interface OtherTestReport {
    id: number,
    ecgType: ECGType,
    esr: string,
    crp: string
}
import {EarInfectionType} from "@/app/redux/types/EarInfectionStateTypes";
import {NoseInfectionType} from "@/app/redux/types/NoseInfectionStateTypes";
import {ThroatInfectionType} from "@/app/redux/types/ThroatInfectionStateTypes";
import {AbdomenInfectionType} from "@/app/redux/types/AbdomenInfectionStateTypes";
import {LymphNodeInfectionType} from "@/app/redux/types/LymphNodeInfectionStateTypes";
import {LungsInfectionType} from "@/app/redux/types/LungsInfectionStateTypes";
import {HeartSoundsType} from "@/app/redux/types/HeartSoundStateTypes";
import {HeartRhythmType} from "@/app/redux/types/HeartRhythmStateTypes";

export interface ExaminationReport {
    id: number,
    pale: boolean,
    temperature: number,
    appointment: null,
    earInfectionType: EarInfectionType,
    noseInfectionType: NoseInfectionType,
    throatInfectionType: ThroatInfectionType,
    abdomenInfectionType: AbdomenInfectionType,
    lymphNodeInfectionType: LymphNodeInfectionType,
    lungsInfectionType: LungsInfectionType,
    heartSoundType: HeartSoundsType
    heartRhythmType: HeartRhythmType,
    pulse: number,
    firstBloodPressure: number,
    secondBloodPressure: number,
    leftEye: number,
    rightEye: number
}
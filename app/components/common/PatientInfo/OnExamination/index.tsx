"use client";

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { getAllEarInfectionTypes } from "@/app/redux/features/earInfectionType";
import { getAllNoseInfectionTypes } from "@/app/redux/features/noseInfectionType";
import { getAllThroatInfectionTypes } from "@/app/redux/features/throatInfectionType";
import { getAllLymphNodeInfectionTypes } from "@/app/redux/features/lymphNodeInfectionType";
import { getAllLungsInfectionTypes } from "@/app/redux/features/lungsInfectionType";
import { getAllAbdomenInfectionTypes } from "@/app/redux/features/abdomenInfectionType";
import { getAllHeartSoundTypes } from "@/app/redux/features/heartSoundType";
import { getAllHeartRhythmTypes } from "@/app/redux/features/heartRhythmType";
import { InputWithSuggestion } from "../../InputWithSuggestion";
import { ExaminationReport } from "@/app/redux/types/ExaminationReportTypes";

const OnExamination = ({
  allDisabled,
  existingUser,
  examinationReport,
}: {
  allDisabled?: boolean;
  existingUser?: boolean;
  examinationReport?: ExaminationReport;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const earInfectionTypeSuggestionList = useSelector(
    (state: RootState) => state.earInfectionType.allEarInfectionTypes?.data
  );
  const noseInfectionTypeSuggestionList = useSelector(
    (state: RootState) => state.noseInfectionType.allNoseInfectionTypes?.data
  );
  const throatInfectionTypeSuggestionList = useSelector(
    (state: RootState) => state.throatInfectionType.allThroatInfectionType?.data
  );
  const lymphNodeInfectionTypeSuggestionList = useSelector(
    (state: RootState) =>
      state.lymphNodeInfectionType.allLymphNodeInfectionTypes?.data
  );
  const lungsInfectionTypeSuggestionList = useSelector(
    (state: RootState) => state.lungsInfectionType.allLungsInfectionTypes?.data
  );
  const abdomenInfectionTypeSuggestionList = useSelector(
    (state: RootState) =>
      state.abdomenInfectionType.allAbdomenInfectionTypes?.data
  );
  const heartSoundTypeSuggestionList = useSelector(
    (state: RootState) => state.heartSoundType.allHeartSoundTypes?.data
  );
  const heartRhythmTypeSuggestionList = useSelector(
    (state: RootState) => state.heartRhythmType.allHeartRhythmTypes?.data
  );

  useEffect(() => {
    dispatch(getAllEarInfectionTypes());
    dispatch(getAllNoseInfectionTypes());
    dispatch(getAllThroatInfectionTypes());
    dispatch(getAllLymphNodeInfectionTypes());
    dispatch(getAllLungsInfectionTypes());
    dispatch(getAllAbdomenInfectionTypes());
    dispatch(getAllHeartSoundTypes());
    dispatch(getAllHeartRhythmTypes());
  }, [dispatch]);

  const [temp, setTemp] = useState(
    examinationReport?.temperature ? examinationReport?.temperature : 98.6
  );

  return (
    <div className="boxWrapper">
      <h5>On Examination</h5>
      <div className={styles.grid}>
        <div>
          <h6>Pale</h6>
          <div className={styles.booleanWrapper}>
            {(examinationReport?.pale || !existingUser) && (
              <label>
                <input
                  type="radio"
                  name="patientIsPale"
                  value="true"
                  defaultChecked={examinationReport?.pale}
                  disabled={allDisabled}
                />
                <div className={styles.booleanBtn}>Yes</div>
              </label>
            )}
            {(!examinationReport?.pale || !existingUser) && (
              <label>
                <input
                  type="radio"
                  name="patientIsPale"
                  value="false"
                  defaultChecked={examinationReport?.pale == false}
                  disabled={allDisabled}
                />
                <div className={styles.booleanBtn}>No</div>
              </label>
            )}
          </div>
        </div>

        <div>
          <h6>Temp</h6>
          <div className={styles.equalGrid}>
            <label
              className={`inputField ${allDisabled ? "inputDisabled" : ""}`}
            >
              <input
                type="text"
                name="patientTemperature"
                inputMode="numeric"
                onChange={(e: any) => setTemp(e.target.value)}
                defaultValue={examinationReport?.temperature}
                disabled={allDisabled}
              />
              <span>F</span>
            </label>
            {temp <= 98.6 ? (
              <div className={styles.tempNoWarning}></div>
            ) : (
              <div className={styles.tempWarning}>Fever</div>
            )}
          </div>
        </div>

        <div>
          <h6>Ear</h6>
          <InputWithSuggestion
            inputName="patientEarInfectionType"
            suggestionList={earInfectionTypeSuggestionList}
            defaultValue={examinationReport?.earInfectionType.name}
            disabled={allDisabled}
          />
        </div>

        <div>
          <h6>Nose</h6>
          <InputWithSuggestion
            inputName="patientNoseInfectionType"
            suggestionList={noseInfectionTypeSuggestionList}
            defaultValue={examinationReport?.noseInfectionType.name}
            disabled={allDisabled}
          />
        </div>
        <div>
          <h6>Throat</h6>
          <InputWithSuggestion
            inputName="patientThroatInfectionType"
            suggestionList={throatInfectionTypeSuggestionList}
            defaultValue={examinationReport?.throatInfectionType.name}
            disabled={allDisabled}
          />
        </div>
        <div>
          <h6>Lymph Node</h6>
          <InputWithSuggestion
            inputName="patientLymphNodeInfectionType"
            suggestionList={lymphNodeInfectionTypeSuggestionList}
            defaultValue={examinationReport?.lymphNodeInfectionType.name}
            disabled={allDisabled}
          />
        </div>
        <div>
          <h6>Lungs</h6>
          <InputWithSuggestion
            inputName="patientLungsInfectionType"
            suggestionList={lungsInfectionTypeSuggestionList}
            defaultValue={examinationReport?.lungsInfectionType.name}
            disabled={allDisabled}
          />
        </div>
        <div>
          <h6>Abdomen</h6>
          <InputWithSuggestion
            inputName="patientAbdomenInfectionType"
            suggestionList={abdomenInfectionTypeSuggestionList}
            defaultValue={examinationReport?.abdomenInfectionType.name}
            disabled={allDisabled}
          />
        </div>
        <div></div>
        <div></div>
        <div>
          <h6>Heart Sounds</h6>
          <InputWithSuggestion
            inputName="patientHeartSoundType"
            suggestionList={heartSoundTypeSuggestionList}
            defaultValue={examinationReport?.heartSoundType.name}
            disabled={allDisabled}
          />
        </div>

        <div>
          <h6>Pulse</h6>
          <div className={styles.verticalGrid}>
            <div className={styles.subGrid}>
              <span>Pulse</span>
              <label
                className={`inputField ${allDisabled ? "inputDisabled" : ""}`}
              >
                <input
                  type="text"
                  name="patientPulse"
                  defaultValue={examinationReport?.pulse}
                  disabled={allDisabled}
                />
                <span>per M.</span>
              </label>
            </div>
            <div className={styles.subGrid}>
              <span>Rhythm</span>
              <InputWithSuggestion
                inputName="patientHeartRhythmType"
                suggestionList={heartRhythmTypeSuggestionList}
                defaultValue={examinationReport?.heartRhythmType.name}
                disabled={allDisabled}
              />
            </div>
          </div>
        </div>

        <div>
          <h6>Blood Pressure</h6>
          <div className={styles.verticalGrid}>
            <div className={styles.bpGridWrapper}>
              <span>1.</span>
              <div className={styles.bpGrid}>
                <input
                  type="text"
                  name="patientFirstBloodPressure"
                  className="inputField"
                  defaultValue={
                    examinationReport?.firstBloodPressure
                      .toString()
                      .split("/")[0]
                  }
                  disabled={allDisabled}
                />
                <hr />
                <input
                  type="text"
                  name="patientFirstBloodPressure"
                  className="inputField"
                  defaultValue={
                    examinationReport?.firstBloodPressure
                      .toString()
                      .split("/")[1]
                  }
                  disabled={allDisabled}
                />
              </div>
            </div>

            <div className={styles.bpGridWrapper}>
              <span>2.</span>
              <div className={styles.bpGrid}>
                <input
                  type="text"
                  name="patientSecondBloodPressure"
                  className="inputField"
                  defaultValue={
                    examinationReport?.secondBloodPressure
                      .toString()
                      .split("/")[0]
                  }
                  disabled={allDisabled}
                />
                <hr />
                <input
                  type="text"
                  name="patientSecondBloodPressure"
                  className="inputField"
                  defaultValue={
                    examinationReport?.secondBloodPressure
                      .toString()
                      .split("/")[1]
                  }
                  disabled={allDisabled}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h6>Vision</h6>
          <div className={styles.verticalGrid}>
            <div className={styles.visionGridWrapper}>
              <span>Left</span>
              <div className={styles.equalGrid}>
                <input
                  type="text"
                  name="patientLeftVision"
                  className="inputField"
                  defaultValue={
                    examinationReport?.leftEye.toString().split("/")[0]
                  }
                  disabled={allDisabled}
                />
                <input
                  type="text"
                  name="patientLeftVision"
                  className="inputField"
                  defaultValue={
                    examinationReport?.leftEye.toString().split("/")[1]
                  }
                  disabled={allDisabled}
                />
              </div>
            </div>

            <div className={styles.visionGridWrapper}>
              <span>Right</span>
              <div className={styles.equalGrid}>
                <input
                  type="text"
                  name="patientRightVision"
                  className="inputField"
                  defaultValue={
                    examinationReport?.rightEye.toString().split("/")[0]
                  }
                  disabled={allDisabled}
                />
                <input
                  type="text"
                  name="patientRightVision"
                  className="inputField"
                  defaultValue={
                    examinationReport?.rightEye.toString().split("/")[1]
                  }
                  disabled={allDisabled}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnExamination;

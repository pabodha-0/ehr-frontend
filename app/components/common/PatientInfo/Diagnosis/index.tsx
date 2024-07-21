"use client";

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { InputWithSuggestion } from "../../InputWithSuggestion";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { getAllDiagnoses } from "@/app/redux/features/diagnosis";
import { Diagnosis } from "@/app/redux/types/DiagnosisStateTypes";

const DiagnosisCard = ({
  existingUser,
  diagnosisList,
}: {
  existingUser?: boolean;
  diagnosisList?: Diagnosis[];
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const diagnosesSuggestionList = useSelector(
    (state: RootState) => state.diagnose.allDiagnoses?.data
  );

  useEffect(() => {
    dispatch(getAllDiagnoses());
  }, [dispatch]);

  const [diagnosisAmount, setDiagnosisAmount] = useState(4);

  return (
    <div className="boxWrapper">
      <h5>Diagnosis</h5>
      {!existingUser && (
        <div className={styles.grid}>
          {Array.from(Array(diagnosisAmount)).map((_, i) => (
            <div key={i}>
              <InputWithSuggestion
                inputName="patientDiagnoses"
                suggestionList={diagnosesSuggestionList}
              />
            </div>
          ))}
          <div
            className={styles.addNew}
            onClick={() => setDiagnosisAmount(diagnosisAmount + 1)}
          >
            <FaPlus />
          </div>
        </div>
      )}

      {existingUser && diagnosisList && (
        <div className={styles.grid}>
          {diagnosisList?.map(({ name }, i) => (
            <div key={i}>
              <InputWithSuggestion
                inputName="patientDiagnoses"
                suggestionList={diagnosesSuggestionList}
                disabled
                defaultValue={name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DiagnosisCard;

"use client";

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { InputWithSuggestion } from "../../InputWithSuggestion";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { getAllSymptoms } from "@/app/redux/features/symptom";

const PatientComplaint = () => {
  const dispatch = useDispatch<AppDispatch>();

  const complaintsSuggestionList = useSelector(
    (state: RootState) => state.symptom.allSymptoms?.data
  );

  useEffect(() => {
    dispatch(getAllSymptoms());
  }, [dispatch]);

  const [complaintsAmount, setComplaintsAmount] = useState(5);
  return (
    <div className="boxWrapper">
      <h5>Patient Complaint</h5>
      <div className={styles.contentWrapper}>
        <div className={styles.headerWrapper}>
          <h6>Symptom</h6>
          <h6>Duration</h6>
        </div>
        <div className={styles.grid}>
          {Array.from(Array(complaintsAmount)).map((_, i) => (
            <div key={i} className={styles.inputWrapper}>
              <InputWithSuggestion
                inputName="patientSymptoms"
                suggestionList={complaintsSuggestionList}
              />
              <hr />
              <label className={`inputField ${styles.durationInput}`}>
                <input type="text" name="patientSymptomDurations" />
                <span>days</span>
              </label>
            </div>
          ))}
          <div
            className={styles.addNew}
            onClick={() => setComplaintsAmount(complaintsAmount + 1)}
          >
            <FaPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientComplaint;

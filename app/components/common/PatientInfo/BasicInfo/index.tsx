"use client";

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { PiGenderFemaleBold, PiGenderMaleBold } from "react-icons/pi";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const BasicInfo = ({
  existingUser,
  allDisabled,
}: {
  existingUser?: boolean;
  allDisabled?: boolean;
}) => {
  const [bmiValue, setBMIValue] = useState(1);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  useEffect(() => {
    if (height && weight) {
      const bmi = weight / ((height / 100) ^ 2);
      setBMIValue(Math.round(bmi * 100) / 100);
    } else {
      setBMIValue(0);
    }
  }, [height, weight]);

  const patient = useSelector(
    (state: RootState) => state.patient.activePatient?.data
  );

  return (
    <div className="boxWrapper">
      <div>
        <h5>Basic Information</h5>
        <div>{/* proflile picture */}</div>
      </div>
      <div className={styles.grid}>
        <label className={styles.inputLabel}>
          <h6>Patient ID</h6>
          <input
            defaultValue={patient?.id}
            className="inputField"
            type="text"
            inputMode="numeric"
            name="patientId"
            disabled
          />
        </label>

        <label className={styles.inputLabel}>
          <h6>Name</h6>
          <input
            defaultValue={patient?.name ? patient?.name : ""}
            className="inputField"
            type="text"
            name="patientName"
            disabled={allDisabled}
          />
        </label>

        <div className={styles.equalGrid}>
          <label className={styles.inputLabel}>
            <h6>Date of Birth</h6>
            <input
              className={`inputField ${styles.dateInput}`}
              type="date"
              name="patientDOB"
              disabled={allDisabled}
            />
          </label>

          <label className={styles.inputLabel}>
            <h6>Age</h6>
            <input
              defaultValue={patient?.age}
              className="inputField"
              type="text"
              inputMode="numeric"
              name="patientAge"
              disabled={allDisabled}
            />
          </label>
        </div>

        <label className={styles.inputLabel}>
          <h6>Occupation</h6>
          <input
            defaultValue={patient?.occupation}
            className="inputField"
            type="text"
            name="patientOccupation"
            disabled={allDisabled}
          />
        </label>

        <label className={styles.inputLabel}>
          <h6>Phone Number</h6>
          <input
            defaultValue={patient?.phone}
            className="inputField"
            type="tel"
            name="patientPhoneNum"
            disabled={allDisabled}
          />
        </label>

        <label className={styles.inputLabel}>
          <h6>Address</h6>
          <input
            defaultValue={patient?.address}
            className="inputField"
            type="text"
            name="patientAddress"
            disabled={allDisabled}
          />
        </label>

        <div className={styles.inputLabel}>
          <h6>Gender</h6>
          <div className={styles.genderCardWrapper}>
            {(patient?.gender == "Male" || !existingUser) && (
              <label
                className={
                  patient?.gender == "Male" ? styles.genderSelected : ""
                }
              >
                <input
                  className={styles.genderInput}
                  type="radio"
                  name="patientGender"
                  value="Male"
                  disabled={allDisabled}
                />

                <div className={styles.genderCard} id={styles.male}>
                  <PiGenderMaleBold />
                  <span>Male</span>
                </div>
              </label>
            )}
            {(patient?.gender == "Female" || !existingUser) && (
              <label
                className={
                  patient?.gender == "Female" ? styles.genderSelected : ""
                }
              >
                <input
                  className={styles.genderInput}
                  type="radio"
                  name="patientGender"
                  value="Female"
                  disabled={allDisabled}
                />
                <div className={styles.genderCard} id={styles.female}>
                  <PiGenderFemaleBold />
                  <span>Female</span>
                </div>
              </label>
            )}
          </div>
        </div>

        <div className={styles.bmiWrapper}>
          <div className={styles.equalGrid}>
            <div className={styles.inputLabel}>
              <h6>Height</h6>
              <label
                className={`inputField ${allDisabled ? "inputDisabled" : ""}`}
              >
                <input
                  defaultValue={patient?.height}
                  type="text"
                  inputMode="numeric"
                  name="patientHeight"
                  onChange={(e) => setHeight(parseInt(e.target.value))}
                  disabled={allDisabled}
                />
                <span>cm</span>
              </label>
            </div>
            <div className={styles.inputLabel}>
              <h6>Weight</h6>
              <label
                className={`inputField ${allDisabled ? "inputDisabled" : ""}`}
              >
                <input
                  defaultValue={patient?.weight}
                  type="text"
                  inputMode="numeric"
                  name="patientWeight"
                  onChange={(e) => setWeight(parseInt(e.target.value))}
                  disabled={allDisabled}
                />
                <span>kg</span>
              </label>
            </div>
          </div>
          <div className={styles.bmiDisplay}>
            <span>BMI - </span>
            <input
              name="patientBMI"
              defaultValue={patient?.bmi ? patient?.bmi : bmiValue}
              // onChange={(e) => setBMIValue(parseInt(e.target.value))}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;

import React from "react";
import styles from "./index.module.css";
import { PiGenderFemaleBold, PiGenderMaleBold } from "react-icons/pi";

const BasicInfo = () => {
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
            className="inputField"
            type="text"
            inputMode="numeric"
            name="patientId"
            disabled
          />
        </label>

        <label className={styles.inputLabel}>
          <h6>Name</h6>
          <input className="inputField" type="text" name="patientName" />
        </label>

        <div className={styles.equalGrid}>
          <label className={styles.inputLabel}>
            <h6>Date of Birth</h6>
            <input
              className={`inputField ${styles.dateInput}`}
              type="date"
              name="patientDOB"
            />
          </label>

          <label className={styles.inputLabel}>
            <h6>Age</h6>
            <input
              className="inputField"
              type="text"
              inputMode="numeric"
              name="patientAge"
            />
          </label>
        </div>

        <label className={styles.inputLabel}>
          <h6>Occupation</h6>
          <input className="inputField" type="text" name="patientOccupation" />
        </label>

        <label className={styles.inputLabel}>
          <h6>Phone Number</h6>
          <input className="inputField" type="tel" name="patientPhoneNum" />
        </label>

        <label className={styles.inputLabel}>
          <h6>Address</h6>
          <input className="inputField" type="text" name="patientAddress" />
        </label>

        <div className={styles.inputLabel}>
          <h6>Gender</h6>
          <div className={styles.genderCardWrapper}>
            <label>
              <input
                className={styles.genderInput}
                type="radio"
                name="patientGender"
                value="male"
              />

              <div className={styles.genderCard} id={styles.male}>
                <PiGenderMaleBold />
                <span>Male</span>
              </div>
            </label>
            <label>
              <input
                className={styles.genderInput}
                type="radio"
                name="patientGender"
                value="female"
              />
              <div className={styles.genderCard} id={styles.female}>
                <PiGenderFemaleBold />
                <span>Female</span>
              </div>
            </label>
          </div>
        </div>

        <div className={styles.bmiWrapper}>
          <div className={styles.equalGrid}>
            <div className={styles.inputLabel}>
              <h6>Height</h6>
              <label className="inputField">
                <input type="text" inputMode="numeric" name="patientHeight" />
                <span>cm</span>
              </label>
            </div>
            <div className={styles.inputLabel}>
              <h6>Weight</h6>
              <label className="inputField">
                <input type="text" inputMode="numeric" name="patientWeight" />
                <span>kg</span>
              </label>
            </div>
          </div>
          <div className={styles.bmiDisplay}>
            {/*add input named patientBMI*/}
            <span>BMI - </span>
            <span>56</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;

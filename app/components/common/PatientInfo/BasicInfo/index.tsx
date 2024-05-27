import React from "react";
import styles from "./index.module.css";
import { PiGenderFemaleBold, PiGenderMaleBold } from "react-icons/pi";

const BasicInfo = () => {
  return (
    <div className={styles.main}>
      <div>
        <h5>Basic Information</h5>
        <div>{/* proflile picture */}</div>
      </div>
      <div className={styles.grid}>
        <label className={styles.inputLabel}>
          <span>Patient ID</span>
          <input
            className="inputField"
            type="text"
            inputMode="numeric"
            name="patientID"
            disabled
          />
        </label>

        <label className={styles.inputLabel}>
          <span>Name</span>
          <input className="inputField" type="text" name="patientName" />
        </label>

        <div className={styles.equalGrid}>
          <label className={styles.inputLabel}>
            <span>Date of Birth</span>
            <input
              className={`inputField ${styles.dateInput}`}
              type="date"
              name="dob"
            />
          </label>

          <label className={styles.inputLabel}>
            <span>Age</span>
            <input
              className="inputField"
              type="text"
              inputMode="numeric"
              name="age"
            />
          </label>
        </div>

        <label className={styles.inputLabel}>
          <span>Occupation</span>
          <input className="inputField" type="text" name="occupation" />
        </label>

        <label className={styles.inputLabel}>
          <span>Phone Number</span>
          <input className="inputField" type="tel" name="phoneNum" />
        </label>

        <label className={styles.inputLabel}>
          <span>Address</span>
          <input className="inputField" type="text" name="address" />
        </label>

        <div className={styles.inputLabel}>
          <span>Gender</span>
          <div className={styles.genderCardWrapper}>
            <label>
              <input
                className={styles.genderInput}
                type="radio"
                name="gender"
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
                name="gender"
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
            <label className={styles.inputLabel}>
              <span>Height</span>
              <input
                className="inputField"
                type="text"
                inputMode="numeric"
                name="height"
              />
            </label>
            <label className={styles.inputLabel}>
              <span>Weight</span>
              <input
                className="inputField"
                type="text"
                inputMode="numeric"
                name="weight"
              />
            </label>
          </div>
          <div className={`inputField ${styles.bmiDisplay}`}>
            <span>BMI - </span>
            <span>56</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;

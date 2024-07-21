import React from "react";
import styles from "./index.module.css";
import {
  AppointmentSymptom,
  Symptom,
} from "@/app/redux/types/SymptomStateTypes";

const PatientComplaintReadOnly = ({
  symptoms,
}: {
  symptoms?: AppointmentSymptom[];
}) => {
  return (
    <div className="boxWrapper">
      <h5>Patient Complaint</h5>
      <div className={styles.grid}>
        <div className={`${styles.subGrid} ${styles.subGridHeader}`}>
          <span>Symptom</span>
          <span></span>
          <span>Duration</span>
        </div>
        <div className={`${styles.subGrid} ${styles.subGridHeader}`}>
          <span>Symptom</span>
          <span></span>
          <span>Duration</span>
        </div>

        {symptoms?.map(({ symptom, duration }, i) => (
          <div className={styles.subGrid} key={i}>
            <input
              type="text"
              className="inputField"
              disabled
              defaultValue={symptom.name}
            />
            <hr />
            <input
              type="text"
              className="inputField"
              disabled
              defaultValue={duration}
            />
          </div>
        ))}
        {/* <div  className={styles.subGrid}>
          <input type="text" className="inputField" disabled />
          <hr />
          <input type="text" className="inputField" disabled />
        </div> */}
      </div>
    </div>
  );
};

export default PatientComplaintReadOnly;

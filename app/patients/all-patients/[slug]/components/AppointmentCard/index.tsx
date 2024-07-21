"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import OnExamination from "@/app/components/common/PatientInfo/OnExamination";
import { FaChevronUp } from "react-icons/fa6";
import { Appointment } from "@/app/redux/types/AppointmentStateTypes";
import Treatment from "@/app/components/common/PatientInfo/Treatment";
import DiagnosisCard from "@/app/components/common/PatientInfo/Diagnosis";
import PatientComplaintReadOnly from "../PatientComplaint";

const AppointmentCard = ({ appointment }: { appointment: Appointment }) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  return (
    <div className={styles.main}>
      <div
        className={styles.subGrid}
        onClick={() => setDropdownActive(!dropdownActive)}
      >
        <span>Common Cold / Fever</span>
        <span>24/4/2024</span>
        <FaChevronUp
          className={`${styles.icon} ${
            dropdownActive ? "" : styles.iconReverse
          }`}
        />
      </div>

      <div className={dropdownActive ? styles.unhide : styles.hide}>
        <div className={styles.transition}>
          <PatientComplaintReadOnly
            symptoms={appointment.appointmentSymptoms}
          />
          <OnExamination
            examinationReport={appointment.examinationReport}
            allDisabled
            existingUser
          />
          <div className={styles.bottomGrid}>
            <DiagnosisCard diagnosisList={appointment.diagnoses} existingUser />
            <Treatment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;

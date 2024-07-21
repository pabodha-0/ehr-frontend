"use client";

import OnExamination from "@/app/components/common/PatientInfo/OnExamination";
import React, { useState } from "react";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import AppointmentCard from "../AppointmentCard";

const AppointmentGrid = () => {
  const patient = useSelector(
    (state: RootState) => state.patient.activePatient?.data
  );

  return (
    <div className={styles.main}>
      <div className={styles.subGrid}>
        <span>Diagnosis</span>
        <span>Date</span>
        <span></span>
      </div>

      {patient?.appointments?.map((appointment, i) => (
        <div key={i}>
          <AppointmentCard appointment={appointment} />
        </div>
      ))}
    </div>
  );
};

export default AppointmentGrid;

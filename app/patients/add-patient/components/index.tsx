"use client";

import React from "react";
import styles from "./index.module.css";
import PageHeader from "@/app/components/common/PageHeader";
import BasicInfo from "@/app/components/common/PatientInfo/BasicInfo";
import PatientComplaint from "@/app/components/common/PatientInfo/PatientComplaint";
import OnExamination from "@/app/components/common/PatientInfo/OnExamination";
import Treatment from "@/app/components/common/PatientInfo/Treatment";
import PriceSubmt from "@/app/components/common/PatientInfo/PriceSubmit";
import ExppandingList from "@/app/components/common/PatientInfo/ExpandingList";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { createAppointment } from "@/app/redux/features/appointment";
import DiagnosisCard from "@/app/components/common/PatientInfo/Diagnosis";

const AddPatientPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const formSubmit = (e: any) => {
    e.preventDefault();
    const formData: FormData = new FormData(e.target);
    const dataObject: any = {};

    formData.forEach((value, key) => {
      if (dataObject[key]) {
        if (Array.isArray(dataObject[key])) {
          if (value != "") {
            dataObject[key] = [...dataObject[key], value];
          }
        } else {
          dataObject[key] = [dataObject[key], value];
        }
      } else {
        dataObject[key] = value;
      }
    });

    dispatch(createAppointment(dataObject));
  };

  return (
    <form onSubmit={formSubmit}>
      <div className={styles.main}>
        <PageHeader header="Add Patient" />
        <div className={styles.equalGrid}>
          <BasicInfo />
          <PatientComplaint />
        </div>

        <ExppandingList />
        <OnExamination />
        <div className={styles.bottomGrid}>
          <DiagnosisCard />
          <Treatment />
        </div>
        <PriceSubmt />
      </div>
    </form>
  );
};

export default AddPatientPage;

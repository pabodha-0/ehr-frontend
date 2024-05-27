import PageHeader from "@/app/components/common/PageHeader";
import BasicInfo from "@/app/components/common/PatientInfo/BasicInfo";
import PatientComplain from "@/app/components/common/PatientInfo/PatientComplain";
import React from "react";
import styles from "./page.module.css";

const AddPatient = () => {
  return (
    <div className={styles.main}>
      <PageHeader />
      <div className={styles.equalGrid}>
        <BasicInfo />
        <PatientComplain />
      </div>
    </div>
  );
};

export default AddPatient;

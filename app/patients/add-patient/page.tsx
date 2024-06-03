import PageHeader from "@/app/components/common/PageHeader";
import BasicInfo from "@/app/components/common/PatientInfo/BasicInfo";
import PatientComplaint from "@/app/components/common/PatientInfo/PatientComplaint";
import React from "react";
import styles from "./page.module.css";
import MedicalHistory from "@/app/components/common/PatientInfo/MedicalHistory";
import Allergies from "@/app/components/common/PatientInfo/Allergies";
import FamilyHistory from "@/app/components/common/PatientInfo/FamilyHistory";
import Investigations from "@/app/components/common/PatientInfo/Investigations";
import OnExamination from "@/app/components/common/PatientInfo/OnExamination";
import Diagnosis from "@/app/components/common/PatientInfo/Diagnosis";
import Treatment from "@/app/components/common/PatientInfo/Treatment";
import PriceSubmt from "@/app/components/common/PatientInfo/PriceSubmit";
import ExppandingList from "@/app/components/common/PatientInfo/ExpandingList";

const AddPatient = () => {
  return (
    <div className={styles.main}>
      <PageHeader />
      <div className={styles.equalGrid}>
        <BasicInfo />
        <PatientComplaint />
      </div>

      <ExppandingList />
      <OnExamination />
      <div className={styles.bottomGrid}>
        <Diagnosis />
        <Treatment />
      </div>
      <PriceSubmt />
    </div>
  );
};

export default AddPatient;

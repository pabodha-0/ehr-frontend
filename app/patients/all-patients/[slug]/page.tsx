"use client";

import PageHeader from "@/app/components/common/PageHeader";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import BasicInfo from "@/app/components/common/PatientInfo/BasicInfo";
import PatientComplaint from "@/app/components/common/PatientInfo/PatientComplaint";
import MedicalHistory from "@/app/components/common/PatientInfo/MedicalHistory";
import FamilyHistory from "@/app/components/common/PatientInfo/FamilyHistory";
import AllergyList from "@/app/components/common/PatientInfo/AllergyList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { getPatientById } from "@/app/redux/features/patient";
import AppointmentCard from "./components/AppointmentGrid";
import AppointmentGrid from "./components/AppointmentGrid";

const SinglePatient = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPatientById({ id: 1 }));
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <PageHeader header="Patient Name" />
      <div className={styles.equalGrid}>
        <BasicInfo allDisabled={true} existingUser={true} />
        <AllergyList />
      </div>
      <MedicalHistory
        showMedicalHistory={true}
        setShowMedicalHistory={null}
        existingUser
        allDisabled
      />
      <FamilyHistory
        showFamilyHistory={true}
        setShowFamilyHistory={null}
        existingUser
        allDisabled
      />
      <AppointmentGrid />
    </div>
  );
};

export default SinglePatient;

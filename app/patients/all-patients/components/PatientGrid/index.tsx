"use client";

import React, { useEffect } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { getAllPatients } from "@/app/redux/features/patient";

const PatientGrid = () => {
  const dispatch = useDispatch<AppDispatch>();

  const allPatients = useSelector(
    (state: RootState) => state.patient.allPatients
  );

  useEffect(() => {
    dispatch(getAllPatients({ pageNo: 0, pageSize: 10 }));
  }, [dispatch]);

  const changePage = (pageNo: number) => {
    dispatch(getAllPatients({ pageNo, pageSize: 10 }));
  };

  const convertDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  return (
    <div className={styles.main}>
      <div className={styles.grid}>
        <span>Name</span>
        <span>Age</span>
        <span>Gender</span>
        <span>Last Visit</span>
      </div>
      {allPatients?.data?.length != 0 &&
        allPatients?.data.map((patient, i) => (
          <Link
            href={`/patients/all-patients/${patient.id}`}
            key={i}
            className={`${styles.grid} ${styles.patientCard}`}
          >
            <div className={styles.patientProfile}>
              <Image
                src={"/images/profile-icon.jpg"}
                height={40}
                width={40}
                alt={patient.name}
              />
              <span>{patient.name}</span>
            </div>
            <span>{patient.age ? patient.age : "-"}</span>
            <span>{patient.gender ? patient.gender : "-"}</span>
            <span>
              {patient.appointments[0]?.createdOn
                ? convertDate(patient.appointments[0]?.createdOn)
                : "Never Visited"}
            </span>
          </Link>
        ))}
      {allPatients?.totalPages != 1 && (
        <div className={styles.pagination}>
          {Array.from(Array(allPatients?.totalPages)).map((_, i) => (
            <div key={i} onClick={() => changePage(i)}>
              {i + 1}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientGrid;

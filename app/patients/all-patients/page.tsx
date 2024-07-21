import PageHeader from "@/app/components/common/PageHeader";
import React from "react";
import PatientGrid from "./components/PatientGrid";

const AllPatients = () => {
  return (
    <div>
      <PageHeader header="All Patients" />
      {/* Search */}
      <PatientGrid />
    </div>
  );
};

export default AllPatients;

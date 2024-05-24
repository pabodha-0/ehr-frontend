import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { IoChevronForward } from "react-icons/io5";
import { RiMentalHealthLine } from "react-icons/ri";

const DesktopSidebar = () => {
  return (
    <nav className={styles.sidebarMain}>
      <div>Logo</div>
      <ul>
        {/* Dashboard */}
        <li>
          <Link href={""} className={styles.navLink}>
            <MdOutlineMonitorHeart className={styles.Navicon} />
            <span>Dashboard</span>
          </Link>
        </li>

        {/* Patients */}
        <li>
          <Link href={""} className={styles.navLink}>
            <GoPeople className={styles.Navicon} />
            <span>Patients</span>
          </Link>
          <ul className={styles.navInnerList}>
            <li>
              <Link href={""} className={styles.navLink}>
                <IoChevronForward className={styles.NavChevicon} />
                <span>Add Patient</span>
              </Link>
            </li>

            <li>
              <Link href={""} className={styles.navLink}>
                <IoChevronForward className={styles.NavChevicon} />
                <span>Add Clinic Patient</span>
              </Link>
            </li>

            <li>
              <Link href={""} className={styles.navLink}>
                <IoChevronForward className={styles.NavChevicon} />
                <span>All Patients</span>
              </Link>
            </li>
          </ul>
        </li>

        {/* Drugs */}
        <li>
          <Link href={""} className={styles.navLink}>
            <RiMentalHealthLine className={styles.Navicon} />
            <span>Drugs</span>
          </Link>
          <ul className={styles.navInnerList}>
            <li>
              <Link href={""} className={styles.navLink}>
                <IoChevronForward className={styles.NavChevicon} />
                <span>Add Drugs</span>
              </Link>
            </li>
            <li>
              <Link href={""} className={styles.navLink}>
                <IoChevronForward className={styles.NavChevicon} />
                <span>Inventory</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopSidebar;

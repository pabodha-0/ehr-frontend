import React from "react";
import DesktopSidebar from "./DesktopSidebar";
import styles from "./index.module.css";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <DesktopSidebar />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;

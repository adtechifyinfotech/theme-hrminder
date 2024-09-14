import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import clsx from "clsx";
import styles from "./AuthLayout.module.css";

export const AuthLayout = () => {
  return (
    <Layout
      className={clsx(
        styles.AuthWrapper,
        "d-flex flex-column align-items-center justify-content-center vh-100"
      )}
    >
      <Outlet />
    </Layout>
  );
};

export default AuthLayout;

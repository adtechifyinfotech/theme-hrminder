import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { HMHeader, HMSidebar } from "@/components";
import styles from "./DashboardLayout.module.css";
import clsx from "clsx";

const { Content } = Layout;

export const DashboardLayout = ({ items }) => {
  return (
    <Layout className={styles.main}>
      <HMSidebar
        width={280}
        items={items}
        // className={clsx(show === true ? styles.Sidebar : "")}
      />
      <Layout>
        <HMHeader />
        <Content className={clsx(styles.content, "card")}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

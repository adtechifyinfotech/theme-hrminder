import { useState } from "react";
import { Outlet } from "react-router-dom";
import clsx from "clsx";
import { Layout } from "antd";
import { HMHeader, HMSidebar } from "@/components";
import styles from "./StyleGuideLayout.module.css";

const { Content } = Layout;

export const StyleGuideLayout = ({ items }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileCollapsed, setMobileCollapsed] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <Layout className={styles.main}>
      <HMSidebar
        width={280}
        collapsed={collapsed}
        collapsedHandle={() => setCollapsed(!collapsed)}
        mobileCollapsed={mobileCollapsed}
        mobileCollapsedHandle={() => setMobileCollapsed(true)}
        items={items}
        className={clsx(show === true ? styles.Sidebar : "")}
      />
      <Layout className="">
        <HMHeader
          collapsed={collapsed}
          collapseHandle={() => setCollapsed(!collapsed)}
          mobileShow={() => setShow(!show)}
          show={show}
        />
        <Content
          className={clsx(
            styles.content,
            "container styleguide-card d-flex flex-column"
          )}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

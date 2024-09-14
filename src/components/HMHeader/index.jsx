import { Avatar, Dropdown, Layout, Space } from "antd";
import { useTitle } from "../../App";
import clsx from "clsx";
import { Icons, menuItems } from "@/constants";
import styles from "./HMHeader.module.css";
import { HMButton, HMDropdown, HMInput } from "../";

const { Header } = Layout;

export const HMHeader = () => {
  const { headerText } = useTitle();
  return (
    <Header
      className={clsx(
        styles.header,
        "d-flex align-items-center justify-content-between"
      )}
    >
      <div className="d-flex align-items-center justify-content-center gap-xl">
        <HMButton
          // icon={collapsed ? Icons.NotificationBall : Icons.AllEmployees}
          className={"d-md-none"}
        />
        <h1 className="clr-dark fw-semibold">{headerText}</h1>
      </div>
      <div className="d-flex align-items-center justify-content-center gap-xl">
        <HMInput placeholder={"Search"} prefix={Icons.Search} />
        <HMButton icon={Icons.NotificationBall} />
        {/* <HMDropdown items={menuItems}>children</HMDropdown> */}
        <Dropdown
          overlayStyle={{
            background: "#1f1f1f",
            borderRadius: "8px",
          }}
        >
          <a
            onClick={(e) => e.preventDefault()}
            className="d-flex align-items-center justify-content-start gap-xs"
          >
            <Avatar src="A" alt="Lucifer"  />
            <div className="d-flex flex-column">
              <span className="font-semibold p d-block lh-base clr-white">
                Lucifer
              </span>
              <span className="text-xs text-gray-400 p d-block lh-base clr-gray">
                HR Manager
              </span>
            </div>
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};
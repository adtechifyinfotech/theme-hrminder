import clsx from "clsx";
import { useTitle } from "@/App";
import { HMButton, HMInput, HMTable } from "@/components";
import { employeeColumns, employeeData, Icons } from "@/constants";
import styles from "./Payroll.module.css";

export const Payroll = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Payroll");
  return (
    <>
      <div className={clsx(styles.pageTop, "d-grid grid-columns")}>
        <HMInput
          parentClassName={styles.Serach}
          placeholder={"Search"}
          prefix={Icons.Search}
        />
        <div className={styles.button}>
          <HMButton variant={"primary"} icon={Icons.Export}>
            Export
          </HMButton>
        </div>
      </div>
      <HMTable tableColumn={employeeColumns} tableDataSource={employeeData} />
    </>
  );
};

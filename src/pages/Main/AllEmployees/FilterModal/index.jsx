import clsx from "clsx";
import { HMCheckbox, HMInput } from "@/components";
import { Icons } from "@/constants";
import styles from "../AllEmployees.module.css";

export const FilterModal = () => {
  return (
    <div className="d-flex flex-column gap-xl">
      <HMInput placeholder={"Search Employee"} prefix={Icons.Search} />
      <div className={clsx(styles.FilterModalContent, "d-flex flex-column")}>
        <h5 className="p fw-semibold lh-base">Department</h5>
        <div
          className={clsx(
            styles.FilterModalContentCheckbox,
            "d-flex flex-wrap"
          )}
        >
          <HMCheckbox>Design</HMCheckbox>
          <HMCheckbox>Java</HMCheckbox>
          <HMCheckbox>HR</HMCheckbox>
          <HMCheckbox>Python</HMCheckbox>
          <HMCheckbox>Sales</HMCheckbox>
          <HMCheckbox>React JS</HMCheckbox>
          <HMCheckbox>Business Analyst</HMCheckbox>
          <HMCheckbox>Account</HMCheckbox>
          <HMCheckbox>Project Manager</HMCheckbox>
          <HMCheckbox>Nods JS</HMCheckbox>
        </div>
      </div>
      <div className={clsx(styles.FilterModalContent, "d-flex flex-column")}>
        <h5 className="p fw-semibold lh-base">Select Type</h5>
        <div
          className={clsx(styles.FilterModalContentRadio, "d-flex flex-wrap")}
        >
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    </div>
  );
};

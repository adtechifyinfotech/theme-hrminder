import { useTitle } from "@/App";
import { HMButton, HMInput, HMTable } from "@/components";
import styles from "./AllEmployees.module.css";
import { AllEmployeesColumns, AllEmployeesData, Icons } from "@/constants";
import { useNavigate } from "react-router-dom";

export const AllEmployees = () => {
  const navigate = useNavigate();
  const { setHeaderText } = useTitle();
  setHeaderText("All Employees");
  return (
    <>
      <div className="d-grid grid-columns">
        <HMInput
          parentClassName={styles.Serach}
          placeholder={"Search"}
          prefix={Icons.Search}
        />
        <div className="d-flex align-self-center justify-content-end gap-xl">
          <HMButton
            variant={"primary"}
            icon={Icons.PlusWithBorder}
            onClick={() => navigate("add-new-employee")}
          >
            Add New Employee
          </HMButton>
          <HMButton variant={"default"} icon={Icons.Filter}>
            Filter
          </HMButton>
        </div>
      </div>
      <HMTable
        tableColumn={AllEmployeesColumns}
        tableDataSource={AllEmployeesData}
        showPagination={true}
      />
    </>
  );
};

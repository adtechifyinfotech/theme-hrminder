import { useTitle } from "@/App";
import { HMButton, HMInput, HMModal, HMTable } from "@/components";
import styles from "./AllEmployees.module.css";
import { AllEmployeesColumns, AllEmployeesData, Icons } from "@/constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FilterModal } from "./FilterModal";

export const AllEmployees = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          <HMButton
            onClick={() => setIsModalOpen(true)}
            variant={"default"}
            icon={Icons.Filter}
          >
            Filter
          </HMButton>
        </div>
      </div>
      <HMTable
        tableColumn={AllEmployeesColumns}
        tableDataSource={AllEmployeesData}
        showPagination={true}
      />

      {/* Filter Modal */}
      <HMModal
        title={"Filter"}
        width={383}
        closeOnOutsideClick
        open={isModalOpen}
        handleOk={() => setIsModalOpen(false)}
        handleClose={() => setIsModalOpen(false)}
        handleCancel={() => setIsModalOpen(false)}
        IsFooter
        handleContent={"Apply"}
      >
        <FilterModal />
      </HMModal>
    </>
  );
};

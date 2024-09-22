import { useTitle } from "@/App";
import { HMButton, HMInput, HMModal } from "@/components";
import { useState } from "react";
import { Icons } from "@/constants";
import { AddNewHolidays } from "./AddNewHolidays";
import styles from "./Holidays.module.css";

export const Holidays = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setHeaderText } = useTitle();
  setHeaderText("Holidays");
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
            onClick={() => setIsModalOpen(true)}
            icon={Icons.PlusWithBorder}
          >
            Add New Holiday
          </HMButton>
        </div>
      </div>

      {/* Filter Modal */}
      <HMModal
        title={"Add New Holiday"}
        width={383}
        closeOnOutsideClick
        open={isModalOpen}
        handleOk={() => setIsModalOpen(false)}
        handleClose={() => setIsModalOpen(false)}
        handleCancel={() => setIsModalOpen(false)}
        IsFooter
        handleContent={"Add"}
      >
        <AddNewHolidays  />
      </HMModal>
    </>
  );
};

import { useState } from "react";
import { useTitle } from "@/App";
import { HMButton, HMInput, HMModal } from "@/components";
import { Icons } from "@/constants";
import { AddNewJobModal } from "./AddNewJobModal";
import styles from "./Jobs.module.css";

export const Jobs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setHeaderText } = useTitle();
  setHeaderText("Jobs");
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
            onClick={() => setIsModalOpen(true)}
          >
            Add New Job
          </HMButton>
        </div>
      </div>
      <div></div>

      {/* Add New Job Modal */}
      <HMModal
        title={"Add New Job"}
        width={383}
        closeOnOutsideClick
        open={isModalOpen}
        handleOk={() => setIsModalOpen(false)}
        handleClose={() => setIsModalOpen(false)}
        handleCancel={() => setIsModalOpen(false)}
        IsFooter
        handleContent={"Add"}
      >
        <AddNewJobModal />
      </HMModal>
    </>
  );
};

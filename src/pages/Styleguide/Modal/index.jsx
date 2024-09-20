import { useTitle } from "@/App";
import { HMButton, HMModal, HMSuccessModal } from "@/components";
import { useState } from "react";

export const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const { setHeaderText } = useTitle();
  setHeaderText("Modal");
  return (
    <>
      <div>
        <HMButton onClick={() => setIsModalOpen(true)}>
          Open Modal Button
        </HMButton>
        <HMModal
          title={"Testing"}
          open={isModalOpen}
          closeIcon
          handleOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
          handleClose={() => setIsModalOpen(false)}
          IsFooter
          handleContent={"Apply"}
        >
          <h2>This Is The Demo Modal</h2>
        </HMModal>
      </div>
      <div>
        <HMButton onClick={() => setIsSuccessOpen(true)}>
          Open Success Modal Button
        </HMButton>
        <HMSuccessModal
          open={isSuccessOpen}
          handleClose={() => setIsSuccessOpen(false)}
        />
      </div>
    </>
  );
};

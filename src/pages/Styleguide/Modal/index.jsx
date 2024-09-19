import { useTitle } from "@/App";
import { HMButton, HMModal } from "@/components";
import { useState } from "react";

export const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { setHeaderText } = useTitle();
  setHeaderText("Modal");
  return (
    <div>
      <HMButton onClick={() => setIsModalOpen(true)}>
        Open Modal Button
      </HMButton>
      <HMModal
        title={"Hello"}
        closeIcon
        open={isModalOpen}
        handleOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        IsFooter
        handleContent={"Te"}
      />
    </div>
  );
};

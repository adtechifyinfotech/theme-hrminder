import { Modal } from "antd";
import { clsx } from "clsx";
import { Icons } from "@/constants";
import styles from "./HMModal.module.css";
import { HMButton } from "@/components";

export const HMModal = ({
  open,
  title,
  width,
  children,
  className,
  handleClose,
  handleOk,
  contentClassName,
  closeOnOutsideClick,
  handleContent,
  IsFooter = false,
  ...rest
}) => {
  const finalClassName = {
    body: styles.body,
    content: clsx(styles.content, contentClassName),
    header: styles.header,
    footer: styles.footer,
    mask: styles.mask,
  };

  return (
    <Modal
      classNames={finalClassName}
      rootClassName={styles.modalParent}
      open={open}
      className={clsx(styles.modal, className)}
      title={title}
      maskClosable={closeOnOutsideClick}
      width={width}
      footer={
        IsFooter &&
        (() => (
          <div className="d-flex align-items-center gap-xl justify-content-center">
            <HMButton block onClick={handleClose}>
              Cancel
            </HMButton>
            <HMButton block variant={"primary"} onClick={handleOk}>
              {handleContent}
            </HMButton>
          </div>
        ))
      }
      closeIcon={
        <div
          className={clsx(
            styles.closeBtn,
            "clr-black d-flex align-items-center"
          )}
        >
          {Icons.CloseCircle}
        </div>
      }
      centered
      {...rest}
    >
      {children}
    </Modal>
  );
};

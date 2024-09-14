import { Button } from "antd";
import clsx from "clsx";
import styles from "./HMButton.module.css";

export const HMButton = ({
  size,
  type,
  icon,
  className,
  children,
  onClick,
  variant,
  shape,
  ...rest
}) => {
  return (
    <Button
      shape={shape}
      size={size}
      icon={icon}
      htmlType={type}
      type={variant}
      onClick={onClick}
      className={clsx(styles.Button, className)}
      {...rest}
    >
      {children}
    </Button>
  );
};

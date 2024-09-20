import { Checkbox } from "antd";
import styles from "./HMCheckbox.module.css"
import clsx from "clsx";

export const HMCheckbox = ({
  value,
  onChange,
  disabled,
  className,
  children,
  checked,
  id,
  name,
  ...rest
}) => {
  return (
    <Checkbox
      value={value}
      onChange={onChange}
      className={clsx(styles.CheckBox,className)}
      disabled={disabled}
      id={id}
      name={name}
      {...(checked && checked)}
      {...rest}
    >
      {children}
    </Checkbox>
  );
};

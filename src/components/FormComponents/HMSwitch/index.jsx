import { Switch } from "antd";
import styles from "./HMSwitch.module.css";
import clsx from "clsx";

export const HMSwitch = ({
  wrapperClassName,
  checked,
  className,
  onChange,
  onClick,
  labelClassName,
  disabled,
  label,
  loading,
  id,
  name,
  value,
  ...rest
}) => {
  return (
    <div className={clsx(styles.switch, wrapperClassName)}>
      <Switch
        id={id}
        name={name}
        checked={checked}
        value={value}
        loading={loading}
        disabled={disabled}
        className={className}
        onChange={onChange}
        onClick={onClick}
        {...rest}
      />
      <span className={clsx(labelClassName, "p-lg")}>{label}</span>
    </div>
  );
};

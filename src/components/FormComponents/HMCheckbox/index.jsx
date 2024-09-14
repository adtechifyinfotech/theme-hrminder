import { Checkbox } from "antd";

export const HMCheckbox = ({
  value,
  onChange,
  disabled,
  className,
  children,
  checked,
  ...rest
}) => {
  return (
    <Checkbox
      value={value}
      onChange={onChange}
      className={className}
      disabled={disabled}
      // checked={checked}
      {...(checked && checked)}
      {...rest}
    >
      {children}
    </Checkbox>
  );
};

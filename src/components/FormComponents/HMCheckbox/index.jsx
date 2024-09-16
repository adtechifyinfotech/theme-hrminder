import { Checkbox } from "antd";

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
      className={className}
      disabled={disabled}
      id={id}
      name={name}
      // checked={checked}
      {...(checked && checked)}
      {...rest}
    >
      {children}
    </Checkbox>
  );
};

import { useTitle } from "@/App";
import { HMButton, HMInput, HMTable } from "@/components";
import { employeeColumns, employeeData } from "@/constants";

export const Payroll = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Payroll");
  return (
    <div className="card">
      <div>
        <HMInput type="search" />
        <HMButton>Export</HMButton>
      </div>
      <HMTable tableColumn={employeeColumns} tableDataSource={employeeData} />
    </div>
  );
};

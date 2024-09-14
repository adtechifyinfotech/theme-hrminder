import { useTitle } from "@/App";

export const AllEmployees = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("All Employees");
  return <div>AllEmployees</div>;
};

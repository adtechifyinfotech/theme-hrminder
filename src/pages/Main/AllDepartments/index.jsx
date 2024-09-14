import { useTitle } from "@/App";

export const AllDepartments = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("All Departments");
  return <div>AllDepartments</div>;
};

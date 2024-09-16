import { useTitle } from "@/App";
import { Link } from "react-router-dom";

export const AllEmployees = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("All Employees");
  return (
    <>
      <div>AllEmployees</div>
      <div>
        <Link to={"/all-employees/add-new-employee"}>add-new-employee</Link>
      </div>
    </>
  );
};

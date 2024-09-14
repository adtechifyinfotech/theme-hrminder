import { useTitle } from "@/App";

export const Jobs = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Jobs");
  return <div>Jobs</div>;
};

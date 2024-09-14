import { useTitle } from "@/App";

export const Candidates = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Candidates");
  return <div>Candidates</div>;
};

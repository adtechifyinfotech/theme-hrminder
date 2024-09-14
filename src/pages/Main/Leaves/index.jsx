import { useTitle } from "@/App";

export const Leaves = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Leaves");
  return <div>Leaves</div>;
};

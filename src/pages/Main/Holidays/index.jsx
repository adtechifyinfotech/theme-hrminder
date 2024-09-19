import { useTitle } from "@/App";

export const Holidays = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Holidays");
  return;
};

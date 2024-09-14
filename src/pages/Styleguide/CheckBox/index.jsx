import { useTitle } from "@/App";
import { HMCheckbox } from "@/components";

export const CheckBox = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("CheckBox");
  return (
    <>
      <div>
        <h2>Without Lable</h2>
        <HMCheckbox></HMCheckbox>
      </div>
      <div>
        <h2>With Lable</h2>
        <HMCheckbox>Hello</HMCheckbox>
      </div>
    </>
  );
};

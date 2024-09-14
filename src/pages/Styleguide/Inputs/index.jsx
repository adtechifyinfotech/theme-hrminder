import { useTitle } from "@/App";
import { HMInput, HMPasswordInput } from "@/components";

export const Inputs = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Inputs");
  return (
    <>
      <div className="mb-2">
        <h2>Basic Input</h2>
        <HMInput placeholder={"hello This the demo"} />
      </div>
      <div className="mb-2">
        <h2>Basic Input With Label</h2>
        <HMInput label={"label"} placeholder={"hello This the demo"} />
      </div>
      <div className="mb-2">
        <h2>Password Input</h2>
        <HMPasswordInput placeholder={"hello This the demo"} />
      </div>
      <div className="mb-2">
        <h2>Password With Lable Input</h2>
        <HMPasswordInput
          label={"Input Hello"}
          placeholder={"hello This the demo"}
        />
      </div>
      <div className="mb-2">
        <h2>Text Area Input</h2>
        <HMInput type="textarea" placeholder={"hello This the demo"} />
      </div>
      <div className="mb-2">
        <h2>isInvalid Pasword Input</h2>
        <HMPasswordInput
          isInvalid={true}
          errorMessage={"password is wrong"}
          placeholder={"hello This the demo"}
        />
      </div>
      <div className="mb-2">
        <h2>isInvalid Input</h2>
        <HMInput
          isInvalid={true}
          errorMessage={"input is invaild"}
          placeholder={"hello This the demo"}
        />
      </div>
      <div className="mb-2">
        <h2>Disabled With Lable Input</h2>
        <HMInput
          label={"label"}
          disabled={true}
          placeholder={"hello This the demo"}
        />
      </div>
      <div className="mb-2">
        <h2>Disabled Without Lable Input</h2>
        <HMInput disabled={true} placeholder={"hello This the demo"} />
      </div>
    </>
  );
};

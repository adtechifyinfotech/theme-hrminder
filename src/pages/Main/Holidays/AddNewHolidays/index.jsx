import { HMInput } from "@/components";
import styles from "../Holidays.module.css";

export const AddNewHolidays = () => {
  return (
    <div className="d-flex flex-column gap-xl">
      <HMInput placeholder={"Holiday Name"} />
      <HMInput type="date" placeholder={"Select Date"} />
    </div>
  );
};

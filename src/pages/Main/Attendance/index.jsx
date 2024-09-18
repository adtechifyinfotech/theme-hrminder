import { useTitle } from "@/App";
import { HMInput, HMTable } from "@/components";
import { columns, data, Icons } from "@/constants";
import styles from "./Attendance.module.css"

export const Attendance = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Attendance");
  return (
    <>
      <HMInput parentClassName={styles.Serach} placeholder={"Search"} prefix={Icons.Search} />
      <HMTable
        tableDataSource={data.reverse()}
        tableColumn={columns}
        showPagination={true}
      />
    </>
  );
};

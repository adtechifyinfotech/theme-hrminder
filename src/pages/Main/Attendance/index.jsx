import { useTitle } from "@/App";
import { HMTable } from "@/components";
import { columns, data } from "@/constants";

export const Attendance = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Attendance");
  return (
    <div className="card">
      <div></div>
      <HMTable
        // className={styles.AttendanceOverviewTable}
        tableDataSource={data.reverse()}
        tableColumn={columns}
        showPagination={true}
      />
    </div>
  );
};

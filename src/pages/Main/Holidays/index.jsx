import { useTitle } from "@/App";
import { HMTable } from "@/components";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Day",
    dataIndex: "day",
    key: "day",
  },
  {
    title: "Holiday Name",
    dataIndex: "holidayName",
    key: "holidayName",
  },
];

const holidaysData = [
  {
    key: "1",
    date: "January 01, 2026",
    day: "Tuesday",
    holidayName: "New Year",
  },
  {
    key: "2",
    date: "January 07, 2026",
    day: "Saturday",
    holidayName: "International Programmers' Day",
  },
  {
    key: "3",
    date: "February 04, 2026",
    day: "Saturday",
    holidayName: "World Cancer Day",
  },
  {
    key: "4",
    date: "April 01, 2026",
    day: "Saturday",
    holidayName: "April Fool Day",
  },
  {
    key: "5",
    date: "May 07, 2026",
    day: "Monday",
    holidayName: "International Programmers' Day",
  },
  {
    key: "6",
    date: "May 22, 2026",
    day: "Tuesday",
    holidayName: "International Day for Biological Diversity",
  },
  {
    key: "7",
    date: "June 05, 2026",
    day: "Monday",
    holidayName: "International Day for Biological Diversity",
  },
  {
    key: "8",
    date: "August 07, 2026",
    day: "Monday",
    holidayName: "International Friendship Day",
  },
  {
    key: "9",
    date: "September 15, 2026",
    day: "Friday",
    holidayName: "International Day of Democracy",
  },
  {
    key: "10",
    date: "November 14, 2026",
    day: "Tuesday",
    holidayName: "World Diabetes Day",
  },
  {
    key: "11",
    date: "December 25, 2026",
    day: "Monday",
    holidayName: "Merry Christmas",
  },
];

export const Holidays = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Holidays");
  return (
    <div className="bg-dark text-white p-4">
      <HMTable
        tableColumn={columns}
        tableDataSource={holidaysData}
        pagination={false}
        className="holiday-table"
      />
      {/* <div
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
        items={[
          { key: "upcoming", label: "Upcoming" },
          { key: "past", label: "Past Holidays" },
        ]}
        className="mt-3"
      /> */}
    </div>
  );
};

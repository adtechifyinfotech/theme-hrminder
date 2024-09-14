import { useState } from "react";
import { Calendar, Badge } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";

const scheduleData = [
  {
    date: "2026-07-06",
    time: "09:30",
    title: "Practical Task Review",
    role: "UI/UX Designer",
  },
  {
    date: "2026-07-06",
    time: "12:00",
    title: "Resume Review",
    role: "Magento Developer",
  },
  {
    date: "2026-07-06",
    time: "01:30",
    title: "Final HR Round",
    role: "Sales Manager",
  },
  {
    date: "2026-07-07",
    time: "09:30",
    title: "Practical Task Review",
    role: "Front end Developer",
  },
  { date: "2026-07-07", time: "11:00", title: "TL Meeting", role: "React JS" },
];

export const MySchedule = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs("2026-07-06"));

  const onSelect = (newValue) => {
    setSelectedDate(newValue);
  };

  const dateCellRender = (value) => {
    const listData = scheduleData.filter(
      (item) => item.date === value.format("YYYY-MM-DD")
    );
    return (
      <ul className="list-unstyled m-0 p-0">
        {listData.map((item, index) => (
          <li key={index}>
            <Badge status="warning" />
          </li>
        ))}
      </ul>
    );
  };

  const renderScheduleItems = (date) => {
    return scheduleData
      .filter((item) => item.date === date)
      .map((item, index) => (
        <div key={index} className="mb-3">
          <div className="text-white-50">{item.time}</div>
          <div className="text-white fw-bold">{item.title}</div>
          <div className="text-white-50">{item.role}</div>
        </div>
      ));
  };

  return (
    <div className="bg-dark text-white p-4" style={{ maxWidth: "400px" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="m-0">My Schedule</h2>
        <CalendarOutlined style={{ fontSize: "24px", color: "#e67e22" }} />
      </div>
      <Calendar
        fullscreen={false}
        headerRender={({ value, onChange }) => {
          const current = value.clone();
          return (
            <div className="d-flex justify-content-between align-items-center">
              <LeftOutlined
                className="text-white-50"
                onClick={() => onChange(current.clone().subtract(1, "month"))}
              />
              <div className="text-white fw-bold">
                {current.format("MMMM, YYYY")}
              </div>
              <RightOutlined
                className="text-white-50"
                onClick={() => onChange(current.clone().add(1, "month"))}
              />
            </div>
          );
        }}
        onSelect={onSelect}
        dateCellRender={dateCellRender}
        className="custom-calendar"
      />
      <div className="mt-4">
        <h5 className="mb-3">{selectedDate.format("dddd, DD MMMM YYYY")}</h5>
        {renderScheduleItems(selectedDate.format("YYYY-MM-DD"))}
      </div>
      <style jsx>{`
        .custom-calendar {
          background-color: #1e1e1e;
          border: none;
        }
        .custom-calendar .ant-picker-calendar-date {
          color: white;
        }
        .custom-calendar .ant-picker-calendar-date-today {
          background-color: #e67e22;
        }
        .custom-calendar .ant-picker-calendar-date-value {
          color: white;
        }
      `}</style>
    </div>
  );
};

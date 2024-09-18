import { useTitle } from "@/App";
import { Tag, Avatar, Space } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { HMInput, HMTable } from "@/components";
import styles from "./AllEmployees.module.css";
import { Icons } from "@/constants";

const columns = [
  {
    title: "Employee Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <Space>
        <Avatar src={record.avatar} />
        <span>{text}</span>
      </Space>
    ),
  },
  {
    title: "Employee ID",
    dataIndex: "employeeId",
    key: "employeeId",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "Designation",
    dataIndex: "designation",
    key: "designation",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => (
      <Tag color="orange" key={status}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <EyeOutlined style={{ color: "white" }} />
        <EditOutlined style={{ color: "white" }} />
        <DeleteOutlined style={{ color: "white" }} />
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "Vasilisa",
    avatar: "/placeholder.svg?height=32&width=32",
    employeeId: "000666000",
    department: "Design",
    designation: "UI/UX Designer",
    type: "Office",
    status: "Permanent",
  },
  {
    key: "2",
    name: "Dina",
    avatar: "/placeholder.svg?height=32&width=32",
    employeeId: "000666000",
    department: "Developement",
    designation: "PHP Developer",
    type: "Office",
    status: "Permanent",
  },
  {
    key: "3",
    name: "Jack",
    avatar: "/placeholder.svg?height=32&width=32",
    employeeId: "000666000",
    department: "Sales",
    designation: "Sales Manager",
    type: "Office",
    status: "Permanent",
  },
  // Add more data entries here to match the image
];

export const AllEmployees = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("All Employees");
  return (
    <>
      <div className="d-grid grid-columns">
        <HMInput
          parentClassName={styles.Serach}
          placeholder={"Search"}
          prefix={Icons.Search}
        />
      </div>
      <HMTable
        tableColumn={columns}
        tableDataSource={data}
        showPagination={true}
      />
    </>
  );
};

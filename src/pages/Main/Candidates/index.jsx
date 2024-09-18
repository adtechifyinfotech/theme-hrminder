import { useTitle } from "@/App";
import { HMTable } from "@/components";
import { Tag, Avatar } from "antd";

const columns = [
  {
    title: "Candidate Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar src={record.avatar}>
          {record.avatar ? record.avatar : text[0]}
        </Avatar>
        <span style={{ marginLeft: "8px" }}>{text}</span>
      </div>
    ),
  },
  {
    title: "Applied For",
    dataIndex: "appliedFor",
    key: "appliedFor",
  },
  {
    title: "Applied Date",
    dataIndex: "appliedDate",
    key: "appliedDate",
  },
  {
    title: "Email Address",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Mobile Number",
    dataIndex: "mobile",
    key: "mobile",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => {
      let color =
        status === "Selected"
          ? "green"
          : status === "In Process"
          ? "gold"
          : "red";
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
];

const data = [
  {
    key: "1",
    name: "Evghenii Conev",
    avatar: "/placeholder.svg?height=32&width=32",
    appliedFor: "UI/UX Designer",
    appliedDate: "July 14, 2026",
    email: "econev@gmail.com",
    mobile: "(629) 666-0129",
    status: "Selected",
  },
  {
    key: "2",
    name: "Dina Coneva",
    avatar: "/placeholder.svg?height=32&width=32",
    appliedFor: "Sales Manager",
    appliedDate: "July 14, 2026",
    email: "econev@gmail.com",
    mobile: "(217) 666-0113",
    status: "In Process",
  },
  // Add more data entries here to match the image
];

export const Candidates = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Candidates");
  return (
    <>
      <HMTable
        tableColumn={columns}
        tableDataSource={data}
        pagination={false}
        style={{
          backgroundColor: "#1e1e1e",
          color: "white",
        }}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "even-row" : "odd-row"
        }
        rowSelection={true}
      />
    </>
  );
};

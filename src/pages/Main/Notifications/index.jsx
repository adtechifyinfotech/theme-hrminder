import { List, Avatar, Typography } from "antd";

const { Title, Text } = Typography;

const notifications = [
  {
    title: "Leave Request",
    description: "@Econev Fox has applied for leave",
    time: "Just Now",
  },
  {
    title: "Check In Issue",
    description: "@Dina shared a message regarding check in issue",
    time: "11:16 AM",
  },
  {
    title: 'Applied job for "Sales Manager" Position',
    description: "@Vasilisa has applied for job",
    time: "09:00 AM",
  },
  {
    title: "Robert Fox has share his feedback",
    description: '"It was an amazing experience with your organisation"',
    time: "Yesterday",
  },
  {
    title: "Password Update successfully",
    description: "Your password has been updated successfully",
    time: "Yesterday",
  },
];

export const Notifications = () => {
  return (
    <div className="bg-dark text-white p-4 card">
      <List
        itemLayout="horizontal"
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item className="border-bottom border-secondary py-3">
            <List.Item.Meta
              avatar={<Avatar src={item?.src} />}
              title={
                <div className="d-flex justify-content-between align-items-center">
                  <Title level={5} className="text-white mb-0">
                    {item.title}
                  </Title>
                  <Text className="text-muted">{item.time}</Text>
                </div>
              }
              description={
                <Text className="text-secondary">{item.description}</Text>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

import { HMTabs } from "@/components";
import { Icons } from "@/constants";
import { AccountAccess } from "./AccountAccess";
import { PersonalInformation } from "./ProfessionalInformation";
import { ProfessionalInformation } from "./PersonalInformation";
import { Documents } from "./Documents";

export const AddNewEmployee = () => {
  const items = [
    {
      key: "1",
      label: "Personal Information",
      icon: Icons.PersonalInformation,
      children: <PersonalInformation />,
    },
    {
      key: "2",
      label: "Professional Information",
      icon: Icons.ProfessionalInformation,
      children: <ProfessionalInformation />,
    },
    {
      key: "3",
      label: "Documents",
      icon: Icons.Documents,
      children: <Documents />,
    },
    {
      key: "4",
      label: "Account Access",
      icon: Icons.AccountAccess,
      children: <AccountAccess />,
    },
  ];

  return (
    <div>
      <HMTabs defaultActiveKey="1" items={items} />
    </div>
  );
};

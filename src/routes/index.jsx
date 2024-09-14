import { createBrowserRouter } from "react-router-dom";

/* */
import { DashboardAsideMenu, StyleguideAsideMenu } from "@/constants";

/* Layouts Loading */
import { AuthLayout, DashboardLayout, StyleGuideLayout } from "@/layouts";

/* */
import { Buttons, CheckBox, FontFamily, Inputs } from "@/pages/Styleguide";

/* */
import { ForgotPassword, Login, Otp } from "@/pages/Authentication";
import { PasswordUpdateSuccess } from "@/components/Authentication/PasswordUpdate";

/* */
import {
  Dashboard,
  AllEmployees,
  AllDepartments,
  Attendance,
  Candidates,
  Payroll,
  Jobs,
  Leaves,
  Holidays,
  Settings,
} from "@/pages/Main";

const HRMinderRoute = createBrowserRouter(
  /* All Paths */
  [
    {
      path: "/",
      children: [
        {
          element: <DashboardLayout items={DashboardAsideMenu} />,
          children: [
            { index: true, element: <Dashboard /> },
            { path: "all-employees", element: <AllEmployees /> },
            { path: "all-departments", element: <AllDepartments /> },
            { path: "attendance", element: <Attendance /> },
            { path: "payroll", element: <Payroll /> },
            { path: "jobs", element: <Candidates /> },
            { path: "candidates", element: <Jobs /> },
            { path: "leaves", element: <Leaves /> },
            { path: "holidays", element: <Holidays /> },
            { path: "settings", element: <Settings /> },
          ],
        },
        {
          /* Authentication Routes For Super Admin */
          element: <AuthLayout />,
          children: [
            { path: "login", element: <Login /> },
            { path: "forgot-password", element: <ForgotPassword /> },
            { path: "otp", element: <Otp /> },
            { path: "passwordupdate", element: <PasswordUpdateSuccess /> },
          ],
        },
      ],
    },
    {
      /* Styleguide Routes */
      path: "styleguide",
      element: <StyleGuideLayout items={StyleguideAsideMenu} />,
      children: [
        { index: true, element: <FontFamily /> },
        { path: "button", element: <Buttons /> },
        { path: "input", element: <Inputs /> },
        { path: "checkbox", element: <CheckBox /> },
        { path: "modal", element: <Buttons /> },
        { path: "table", element: <Buttons /> },
        { path: "tabs", element: <FontFamily /> },
        { path: "tags", element: <FontFamily /> },
      ],
    },
    {
      /* Default Route (404) */
      path: "*",
      element: <>404 - Page Not Found</>,
    },
  ],
  {
    /* Base URL */
    basename: "/theme-hrminder",
  }
);

export default HRMinderRoute;

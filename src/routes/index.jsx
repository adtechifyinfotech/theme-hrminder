import { createBrowserRouter } from "react-router-dom";

/* */
import { DashboardAsideMenu, StyleguideAsideMenu } from "@/constants";

/* Layouts Loading */
import { AuthLayout, DashboardLayout, StyleGuideLayout } from "@/layouts";

/* */
import {
  Buttons,
  CheckBox,
  FontFamily,
  Inputs,
  Modal,
  Icons,
} from "@/pages/Styleguide";

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
  Notifications,
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
            {
              index: true,
              element: <Dashboard />,
            },
            {
              path: "all-employees",
              children: [
                {
                  index: true,
                  element: <AllEmployees />,
                },
                {
                  path: "add-new-employee",
                  element: "Hello",
                },
              ],
            },
            {
              path: "all-departments",
              element: <AllDepartments />,
            },
            {
              path: "attendance",
              element: <Attendance />,
            },
            {
              path: "payroll",
              element: <Payroll />,
            },
            {
              path: "jobs",
              element: <Jobs />,
            },
            {
              path: "candidates",
              element: <Candidates />,
            },
            {
              path: "leaves",
              element: <Leaves />,
            },
            {
              path: "holidays",
              element: <Holidays />,
            },
            {
              path: "settings",
              element: <Settings />,
            },
            {
              path: "notifications",
              element: <Notifications />,
            },
          ],
        },
        {
          /* Authentication Routes For Super Admin */
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "forgot-password",
              element: <ForgotPassword />,
            },
            {
              path: "otp",
              element: <Otp />,
            },
            {
              path: "passwordupdate",
              element: <PasswordUpdateSuccess />,
            },
          ],
        },
      ],
    },
    {
      /* Styleguide Routes */
      path: "styleguide",
      element: <StyleGuideLayout items={StyleguideAsideMenu} />,
      children: [
        {
          index: true,
          element: <FontFamily />,
        },
        {
          path: "button",
          element: <Buttons />,
        },
        {
          path: "input",
          element: <Inputs />,
        },
        {
          path: "checkbox",
          element: <CheckBox />,
        },
        {
          path: "modal",
          element: <Modal />,
        },
        {
          path: "table",
          element: <Buttons />,
        },
        {
          path: "icons",
          element: <Icons />,
        },
        {
          path: "tabs",
          element: <FontFamily />,
        },
        {
          path: "tags",
          element: <FontFamily />,
        },
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
    basename: "/hrminder",
  }
);

export default HRMinderRoute;

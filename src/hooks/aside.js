import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Aside = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setCurrentPage("/");
        break;
      case "/admin":
        setCurrentPage("/admin");
        break;
      case "/admin/all-employees":
        setCurrentPage("/admin/all-employees");
        break;
      case "/admin/all-departments":
        setCurrentPage("/admin/all-departments");
        break;
      case "/admin/attendance":
        setCurrentPage("/admin/attendance");
        break;
      case "/admin/payroll":
        setCurrentPage("/admin/payroll");
        break;
      case "/admin/jobs":
        setCurrentPage("/admin/jobs");
        break;
      case "/admin/candidates":
        setCurrentPage("/admin/candidates");
        break;
      case "/admin/leaves":
        setCurrentPage("/admin/leaves");
        break;
      case "/admin/holidays":
        setCurrentPage("/admin/holidays");
        break;
      case "/admin/settings":
        setCurrentPage("/admin/settings");
        break;
      case "/styleguide":
        setCurrentPage("/styleguide");
        break;
      case "/styleguide/button":
        setCurrentPage("/styleguide/button");
        break;
      case "/styleguide/input":
        setCurrentPage("/styleguide/input");
        break;
      case "/styleguide/checkbox":
        setCurrentPage("/styleguide/checkbox");
        break;
      case "/styleguide/modal":
        setCurrentPage("/styleguide/modal");
        break;
      case "/styleguide/table":
        setCurrentPage("/styleguide/table");
        break;
      case "/styleguide/tabs":
        setCurrentPage("/styleguide/tabs");
        break;
      case "/styleguide/tags":
        setCurrentPage("/styleguide/tags");
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return { currentPage };
};

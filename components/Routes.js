//import DashboardIcon from "@mui/icons-material/Dashboard";

import {
  Dashboard,
  //DeveloperBoard,
  //CenterFocusStrong,
  ListAlt,
} from "@mui/icons-material";

export const Routes = [
  {
    path: "/",
    menu: "Dashboard",
    icon: <Dashboard />,
  },
  {
    path: "/LearningPage",
    menu: "Learning Page",
    icon: <ListAlt />,
  },
  // {
  //   path: "/hpp",
  //   menu: "HPP",
  //   icon: <DeveloperBoard />,
  //   submenu: [
  //     {
  //       path: "/hpp/average-cost",
  //       menu: "Average Cost",
  //       icon: <CenterFocusStrong />,
  //     },
  //     {
  //       path: "/hpp/summary",
  //       menu: "Summary Transaksi",
  //       icon: <CenterFocusStrong />,
  //     },
  //   ],
  // },
];

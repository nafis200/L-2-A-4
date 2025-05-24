import DashboardHome_user from "../pages/Dashboard/DashboardHome_user";
import ChangePassword from "../pages/Dashboard/User/Changepassword";
import User_profile from "../pages/Dashboard/User/profile/User_profile";
import ViewOrder from "../pages/Dashboard/User/ViewOrder";

export const userChildren = [
  {
    name: "Dashboard_Home",
    path: "user_dashboard_home",
    element: <DashboardHome_user/>,
  },
  {
    name: "User_profile",
    path: "user_profile",
    element: <User_profile/>,
  },
  {
    name: "Change_password",
    path: "change_password",
    element: <ChangePassword />,
  },
  {
    name: "View Order",
    path: "view_order",
    element: <ViewOrder />,
  },
];

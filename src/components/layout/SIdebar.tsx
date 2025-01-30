import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { adminChildren } from "../../routes/Adminroutes";
import type { ItemType, MenuItemType } from "antd/es/menu/interface";

type UserType = {
  email: string;
  role: "admin" | "faculty" | "student" | "user";
  exp: number;
  iat: number;
};

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const user = useAppSelector(useCurrentUser) as UserType | null;

  const role = user?.role;

  let sidebarItems: ItemType<MenuItemType>[] = [];

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = (sidebarItemsGenerator(adminChildren) ||
        []) as ItemType<MenuItemType>[];
      break;
    case userRole.STUDENT:
      sidebarItems = (sidebarItemsGenerator(adminChildren) ||
        []) as ItemType<MenuItemType>[];
      break;
    default:
      sidebarItems = [];
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Car shops</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;

import React, { useState } from "react";
import { Layout, Menu, Card, message } from "antd";
import { Link } from "@reach/router";
import { menuItems } from "./menuItems";
import HeaderLayout from "./HeaderLayout";
import NetworkDetector from "../NetworkDetector";

const { Sider, Header, Content } = Layout;
const { SubMenu } = Menu;

const SideBar = ({ children, user }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [broken, setBroken] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const onBreakpoint = (broken) => {
    setBroken(broken);
  };

  const handleAuth = (role) => {
    // const roles = ["user", "admin", "super-admin"];
    let isAuthorized = role.includes(user.role);
    return isAuthorized;
  };

  const menuRender = () =>
    menuItems.map((menu, menuIndex) => {
      if (menu.children == null) {
        return (
          <Menu.Item key={`${menu.title}-${menuIndex}-no-child`}>
            <Link to={`${menu.link}`}>
              {menu?.authority && handleAuth(menu.authority) && (
                <>
                  {" "}
                  {menu?.icon}
                  {menu?.title}
                </>
              )}
            </Link>
          </Menu.Item>
        );
      } else {
        if (menu?.authority && handleAuth(menu.authority))
          return (
            <SubMenu
              key={`${menu.title}-${menuIndex}-with-child`}
              title={
                menu?.authority &&
                handleAuth(menu.authority) && (
                  <span>
                    {menu?.icon}
                    {menu.title}
                  </span>
                )
              }
            >
              {menu.children.map((subMenu, subMenuIndex) => {
                if (subMenu.children == null) {
                  if (subMenu?.authority && handleAuth(subMenu.authority))
                    return (
                      <Menu.Item
                        key={`${menu.title}-submenu-${subMenu.title}-no-child`}
                      >
                        <Link to={`${subMenu.link}`}>
                          {/* {subMenu?.authority && handleAuth(subMenu.authority) && ( */}
                          <>
                            {" "}
                            {subMenu?.icon}
                            {subMenu.title}
                          </>
                          {/* )} */}
                        </Link>
                      </Menu.Item>
                    );
                } else {
                  if (subMenu?.authority && handleAuth(subMenu.authority))
                    return (
                      <SubMenu
                        key={`${menu.title}-${subMenu.title}-submenu-with-child-${subMenuIndex}`}
                        title={subMenu.title}
                      >
                        {subMenu.children.map((subSubMenu, subSubMenuIndex) => {
                          if (subSubMenu.children == null) {
                            return (
                              <Menu.Item
                                key={`${subSubMenu.title}-${subSubMenuIndex}-subsubmenu-no-child`}
                              >
                                <>
                                  <Link to={`${subSubMenu.link}`}>
                                    {subSubMenu?.icon}
                                    {subSubMenu.title}
                                  </Link>
                                </>
                              </Menu.Item>
                            );
                          } else {
                            if (
                              subSubMenu?.authority &&
                              handleAuth(subSubMenu.authority)
                            )
                              return (
                                <SubMenu
                                  key={`subSubmenu-with-child-${subSubMenu.title}-${subSubMenuIndex}-with-child`}
                                >
                                  {subSubMenu?.authority &&
                                    handleAuth(subSubMenu.authority) && (
                                      <>{subSubMenu.title}</>
                                    )}
                                </SubMenu>
                              );
                          }
                        })}
                      </SubMenu>
                    );
                }
              })}
            </SubMenu>
          );
      }
    });

  return (
    <>
      <Sider
        breakpoint={"lg"}
        collapsedWidth="0"
        onBreakpoint={onBreakpoint}
        // width={broken ? "90%" : "15%"}
        collapsible={window.innerWidth < 460}
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <Menu defaultSelectedKeys={["1"]} mode="inline">
          {menuRender()}
        </Menu>
      </Sider>

      <Layout>
        <NetworkDetector />
        <HeaderLayout />

        <Content style={{ margin: "1rem" }}>
          <Card>{children}</Card>
        </Content>
        <Layout.Footer style={{ textAlign: "center" }}>© 2021</Layout.Footer>
      </Layout>
    </>
  );
};
export default SideBar;

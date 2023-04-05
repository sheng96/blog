import React from "react";
import Link from "next/link";
import { useGlobal } from "@/lib/global";
import THEME_CONFIG from "../theme_config";
import {
  CalendarOutlined,
  LinkOutlined,
  MehOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const MenuButtonGroupTop = (props: any) => {
  // const { customNav } = props
  // const { locale } = useGlobal()
  const customNav = [
    {
      icon: <MehOutlined />,
      name: "关于我",
      to: "/about",
      show: true,
    },
    {
      icon: <LinkOutlined />,
      name: "友链",
      to: "/links",
      show: true,
    },
  ];

  let links = [
    {
      icon: <SearchOutlined />,
      name: "搜索",
      to: "/search",
      show: THEME_CONFIG.MENU_SEARCH,
    },
    {
      icon: <CalendarOutlined />,
      name: "归档",
      to: "/archive",
      show: THEME_CONFIG.MENU_ARCHIVE,
    },
    // { icon: 'fas fa-folder', name: locale.COMMON.CATEGORY, to: '/category', show: CONFIG_HEXO.MENU_CATEGORY },
    // { icon: 'fas fa-tag', name: locale.COMMON.TAGS, to: '/tag', show: CONFIG_HEXO.MENU_TAG }
  ];

  if (customNav) {
    links = links.concat(customNav);
  }
  return (
    <nav id="nav" className="leading-8 flex justify-center  font-light w-full">
      {links.map((link) => {
        if (link.show) {
          return (
            <Link
              key={`${link.to}`}
              title={link.to}
              href={link.to}
              target={link.to.indexOf("http") === 0 ? "_blank" : "_self"}
              className={
                "py-1.5 my-1 px-3  text-base justify-center items-center cursor-pointer"
              }
            >
              <div className="w-full flex text-sm items-center justify-center hover:scale-125 duration-200 transform">
                {link.icon}
                <div className="text-center ml-1">{link.name}</div>
              </div>
            </Link>
          );
        } else {
          return null;
        }
      })}
    </nav>
  );
};
export default MenuButtonGroupTop;

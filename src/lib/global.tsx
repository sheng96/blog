// import { generateLocaleDict, initLocale } from './lang'
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ComponentProps,
} from "react";
import Router from "next/router";
import BLOG from "blog.config";
import { initDarkMode, initTheme, saveThemeToCookies } from "@/lib/theme";
import {CalendarOutlined, LinkOutlined, SearchOutlined, SmileOutlined} from "@ant-design/icons";
import THEME_CONFIG from "@/themes/theme_config";
// import { ALL_THEME } from '@/themes'
interface Context {
  onLoading: boolean;
  changeLoadingState: (k: boolean) => boolean;
  isDarkMode: boolean;
  updateDarkMode: (k: boolean) => boolean;
  links: Link[];
}
interface Link {
  icon: any;
  name: string;
  to: string;
  show: boolean;
  slot?: any
}
const GlobalContext = createContext({});

/**
 * 全局变量Provider，包括语言本地化、样式主题、搜索词
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export function GlobalContextProvider({ children }: ComponentProps<any>) {
  const [lang, updateLang] = useState(BLOG.LANG);
  // const [locale, updateLocale] = useState(generateLocaleDict(BLOG.LANG))
  // const [theme, setTheme] = useState(BLOG.THEME)
  const [isDarkMode, updateDarkMode] = useState(BLOG.APPEARANCE === "dark");
  const [onLoading, changeLoadingState] = useState(false);

  useEffect(() => {
    // initLocale(lang, locale, updateLang, updateLocale)
    initDarkMode(isDarkMode, updateDarkMode);
    // initTheme(theme, changeTheme)
  }, []);

  Router.events.on("routeChangeStart", (...args) => {
    changeLoadingState(true);
  });

  Router.events.on("routeChangeComplete", (...args) => {
    changeLoadingState(false);
  });

  //菜单栏
  const links:Link[] = [
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
    {
      icon: <LinkOutlined />,
      name: "友链",
      to: "/links",
      show: true,
    },
    {
      icon: <SmileOutlined />,
      name: "关于我",
      to: "/about",
      show: true,
    },
  ];

  return (
    <GlobalContext.Provider
      value={{ onLoading, changeLoadingState, isDarkMode, updateDarkMode,links }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobal = () => useContext(GlobalContext) as Context;

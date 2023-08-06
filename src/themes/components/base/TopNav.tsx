import { useGlobal } from "@/lib/global";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import CategoryGroup from "./CategoryGroup";
// import Collapse from "./Collapse";
import Logo from "./Logo";
import {useRouter} from "next/router";
import SearchDrawer from "../SearchDrawer";
import throttle from "lodash.throttle";
import MenuButtonGroupTop from "./MenuButtonGroupTop";
import {CloseOutlined, MenuOutlined} from "@ant-design/icons";
import {Drawer} from "antd";
import Collapse from "./Collapse";
import MenuList from "./MenuList";

let windowTop = 0;

/**
 * 顶部导航
 * @returns
 * @param props
 */
const TopNav = (props:any) => {
  const searchDrawer = useRef();
  const { tags, currentTag, categories, currentCategory } = props;
    // const isDarkMode='isDarkMode'
  const { isDarkMode } = useGlobal();
  const router = useRouter();

  const [isOpen, changeShow] = useState(false);

  const toggleMenuOpen = () => {
    changeShow(!isOpen);
  };

  // 监听滚动
  useEffect(() => {
    scrollTrigger();
    window.addEventListener("scroll", scrollTrigger);
    return () => {
      window.removeEventListener("scroll", scrollTrigger);
    };
  }, []);

  const throttleMs = 200;

  const scrollTrigger = useCallback(
    throttle(() => {
      const scrollS = window.scrollY;
      const nav = document.querySelector("#sticky-nav");
      const header = document.querySelector("#header");
      // 是否将导航栏透明
      const navTransparent =
        (scrollS < document.documentElement.clientHeight - 12 &&
          router.route === "/") ||
        scrollS < 300; // 透明导航条的条件

      if (header && navTransparent) {
        nav && nav.classList.replace("bg-white", "bg-none");
        nav && nav.classList.replace("text-black", "text-white");
        nav && nav.classList.replace("border", "border-transparent");
        nav && nav.classList.replace("drop-shadow-md", "shadow-none");
        nav && nav.classList.replace("dark:bg-hexo-black-gray", "transparent");
      } else {
        nav && nav.classList.replace("bg-none", "bg-white");
        nav && nav.classList.replace("text-white", "text-black");
        nav && nav.classList.replace("border-transparent", "border");
        nav && nav.classList.replace("shadow-none", "drop-shadow-md");
        nav && nav.classList.replace("transparent", "dark:bg-hexo-black-gray");
      }

      const showNav =
        scrollS <= windowTop ||
        scrollS < 5 ||
        (header && scrollS <= header.clientHeight * 2); // 非首页无大图时影藏顶部 滚动条置顶时隐藏
      if (!showNav) {
        nav && nav.classList.replace("top-0", "-top-20");
        windowTop = scrollS;
      } else {
        nav && nav.classList.replace("-top-20", "top-0");
        windowTop = scrollS;
      }
      navDarkMode();
    }, throttleMs)
  ,[]);

  const navDarkMode = () => {
    const nav = document.getElementById("sticky-nav");
    const header = document.querySelector("#header");
    if (!isDarkMode && nav && header) {
      if (window.scrollY < header.clientHeight) {
        nav?.classList?.add("dark");
      } else {
        nav?.classList?.remove("dark");
      }
    }
  };

  const searchDrawerSlot = (
    <>
      {categories && (
        <section className="mt-8">
          <div className="text-sm flex flex-nowrap justify-between font-light px-2">
            <div className="text-gray-600 dark:text-gray-200">
              <i className="mr-2 fas fa-th-list" />
              {/*{locale.COMMON.CATEGORY}*/}
            </div>
            <Link
              href={"/category"}
              passHref
              className="mb-3 text-gray-400 hover:text-black dark:text-gray-400 dark:hover:text-white hover:underline cursor-pointer"
            >
              {/*{locale.COMMON.MORE} */}
                <i className="fas fa-angle-double-right" />
            </Link>
          </div>
          <CategoryGroup
            currentCategory={currentCategory}
            categories={categories}
          />
        </section>
      )}

      {tags && (
        <section className="mt-4">
          <div className="text-sm py-2 px-2 flex flex-nowrap justify-between font-light dark:text-gray-200">
            <div className="text-gray-600 dark:text-gray-200">
              <i className="mr-2 fas fa-tag" />
              {/*{locale.COMMON.TAGS}*/}
            </div>
            <Link
              href={"/tag"}
              passHref
              className="text-gray-400 hover:text-black  dark:hover:text-white hover:underline cursor-pointer"
            >
              {/*{locale.COMMON.MORE} */}
                <i className="fas fa-angle-double-right" />
            </Link>
          </div>
          <div className="p-2">
            {/*<TagGroups tags={tags} currentTag={currentTag} />*/}
          </div>
        </section>
      )}
    </>
  );

  return (
    <div id="top-nav" className="z-40">
      <SearchDrawer cRef={searchDrawer} slot={searchDrawerSlot} />

      {/* 导航栏 */}
      <div
        id="sticky-nav"
        className={
          "top-0  duration-200 transition-all  shadow-none fixed bg-none dark:bg-hexo-black-gray dark:text-gray-200 text-black w-full z-20 transform border-transparent dark:border-transparent"
        }
      >
        <div className="w-full flex justify-between items-center px-4 py-2">
          <div className="flex">
            {/*  顶部左侧标题*/}
            <Logo {...props} />
          </div>

          {/* 右侧功能 */}
          <div className="mr-1 justify-end items-center ">
            <div className="hidden lg:flex">
              {/*  右侧菜单*/}
              <MenuButtonGroupTop {...props} />
            </div>
            {/*  点击控制菜单弹框是否打开 */}
            <div
              onClick={toggleMenuOpen}
              className="w-8 justify-center items-center h-8 cursor-pointer flex lg:hidden"
            >
              {isOpen ? (
                  <CloseOutlined />
              ) : (
                  <MenuOutlined />
              )}
            </div>
          </div>
        </div>

        {/* 移动窗口下弹出层 --未来自定义*/}

        <Collapse type="vertical" isOpen={isOpen} className="shadow-xl">
          <div className="bg-white dark:bg-hexo-black-gray pt-1 py-2 px-5 lg:hidden ">
            <MenuList  />
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default TopNav;

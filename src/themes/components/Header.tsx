// import Image from 'next/image'
import { useCallback, useEffect, useState } from "react";
import Typed from "typed.js";
import THEME_CONFIG from "@/themes/theme_config";
import NavButtonGroup from "./NavButtonGroup";
import throttle from "lodash.throttle";

let wrapperTop = 0;
let windowTop = 0;
let autoScroll = false;
const enableAutoScroll = false; // 是否开启自动吸附滚动

/**
 *
 * @returns 头图
 */
const Header = (props:any) => {
  const [typed, changeType] = useState<any>();
  // const { siteInfo } = props;
  const siteInfo={
    "title": "Notion Blog",
    "description": "一个NotionNext搭建的博客",
    "pageCover": "https://www.notion.so/images/page-cover/nasa_robert_stewart_spacewalk_2.jpg",
    "icon": "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=4379bc14-5d22-453b-a153-12639616fc01"
  }
  useEffect(() => {
    updateHeaderHeight();

    if (!typed && window && document.getElementById("typed")) {
      changeType(new Typed("#typed", {
        strings: THEME_CONFIG.HOME_BANNER_GREETINGS,
        typeSpeed: 200,
        backSpeed: 100,
        backDelay: 400,
        showCursor: true,
        smartBackspace: true,
      }));
    }

    if (enableAutoScroll) {
      scrollTrigger();
      window.addEventListener("scroll", scrollTrigger);
    }

    window.addEventListener("resize", updateHeaderHeight);
    return () => {
      if (enableAutoScroll) {
        window.removeEventListener("scroll", scrollTrigger);
      }
      window.removeEventListener("resize", updateHeaderHeight);
    };
  });

  function updateHeaderHeight() {
    requestAnimationFrame(() => {
      const wrapperElement = document.getElementById("wrapper");
      wrapperTop = wrapperElement?.offsetTop as number;
    });
  }

  const autoScrollEnd = () => {
    if (autoScroll) {
      windowTop = window.scrollY;
      autoScroll = false;
    }
  };
  const throttleMs = 200;
  const scrollTrigger = useCallback(
    throttle(() => {
      if (screen.width <= 768) {
        return;
      }

      const scrollS = window.scrollY;
      // 自动滚动
      if (
        (scrollS > windowTop) && (scrollS < window.innerHeight) &&
        !autoScroll
      ) {
        autoScroll = true;
        window.scrollTo({ top: wrapperTop, behavior: "smooth" });
        autoScrollEnd();
      }
      if (scrollS < windowTop && scrollS < window.innerHeight && !autoScroll) {
        autoScroll = true;
        window.scrollTo({ top: 0, behavior: "smooth" });
        autoScrollEnd();
      }
      windowTop = scrollS;
    }, throttleMs),[]
  );

  return (
    <header
      id="header"
      className="w-full h-screen bg-black text-white relative"
    >
      <div
        className={`w-full h-full ${
          THEME_CONFIG.HOME_NAV_BACKGROUND_IMG_FIXED ? "fixed" : ""
        }`}
      >
        {/* <Image src={siteInfo.pageCover} fill
                    style={{ objectFit: 'cover' }}
                    className='opacity-70'
                    placeholder='blur'
                    blurDataURL='/bg_image.jpg' /> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={siteInfo.pageCover}
          className="h-full w-full object-cover opacity-70 "
        />
      </div>

      <div className="absolute bottom-0 flex flex-col h-full items-center justify-center w-full ">
        <div className="text-4xl md:text-5xl text-white shadow-text">
          {siteInfo?.title}
        </div>
        <div className="mt-2 h-12 items-center text-center shadow-text text-white text-lg">
          <span id="typed" />
        </div>

        {/* 首页导航插件 */}
        {THEME_CONFIG.HOME_NAV_BUTTONS && <NavButtonGroup {...props} />}
      </div>

      <div
        onClick={() => {
          window.scrollTo({ top: wrapperTop, behavior: "smooth" });
        }}
        className="cursor-pointer w-full text-center py-4 text-3xl absolute bottom-10 text-white"
      >
        <i className="animate-bounce fas fa-angle-down" />
      </div>
    </header>
  );
};

export default Header;

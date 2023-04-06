import TopNav from "./components/TopNav";
import BLOG from "../../blog.config";
import React from "react";
import SideRight from "@/themes/components/SideRight";
/**
 *  这是一个基础的布局，用于展示博客的主要内容
 *
 * */
const LayoutBase = (props: any) => {
  return (
    <>
      <TopNav></TopNav>
      {props.headerSlot}
      <main
        id="wrapper"
        className="bg-hexo-background-gray dark:bg-black w-full py-8 md:px-8 lg:px-24 min-h-screen relative"
      >
        <div
          id="container-inner"
          className={
            (BLOG.LAYOUT_SIDEBAR_REVERSE ? "flex-row-reverse" : "") +
            " pt-14 w-full mx-auto lg:flex lg:space-x-4 justify-center relative z-10"
          }
        >
          <div className="w-full max-w-4xl h-full overflow-hidden">
            {props.children}
            {/*{onLoading ? <LoadingCover /> : props.children}*/}
          </div>
          <SideRight {...props}  />
        </div>
      </main>
    </>
  );
};

export { LayoutBase };

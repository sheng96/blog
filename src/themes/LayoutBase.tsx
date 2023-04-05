import TopNav from "./components/TopNav";
import BLOG from "../../blog.config";
import { PostList } from "@/api/model/postModel";
import React, {ReactNode} from "react";
import SideRight from "@/themes/components/SideRight";
interface Props {
  posts: PostList[];
  headerSlot: false | JSX.Element;
  children?: React.ReactNode;
}
const LayoutBase = (props: Props) => {
  console.log(props);
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

import BLOG from "blog.config";
import Header from "./components/Header";
import THEME_CONFIG from "@/themes/theme_config";
import { LayoutBase } from "./LayoutBase";
import React from "react";
import BlogPostListScroll from "./components/BlogPostListScroll";
import { PostList } from "@/api/model/postModel";

export const LayoutIndex = (props: { posts: PostList[] }) => {
  const headerSlot = THEME_CONFIG.HOME_BANNER_ENABLE && <Header {...props} />;
  return (
    <LayoutBase {...props} headerSlot={headerSlot}>
      <>
        {() => JSON.stringify(BlogPostListScroll)}
        <BlogPostListScroll {...props} />
      </>
    </LayoutBase>
  );
};

import { LayoutBase } from "@/themes/LayoutBase";
import { Card, Input, message } from "antd";
import { searchApi } from "@/api/post";
import BlogPostListScroll from "@/themes/components/index/BlogPostListScroll";
import { useState } from "react";
import { PostList } from "@/api/model/postModel";
const { Search } = Input;

export const LayoutSearch = (props: any) => {
  const onSearch = async (value: any) => {
    if (!value) {
      message.error("请输入搜索内容");
      return false;
    }
    const list = await searchApi({ keyword: value });
    console.log(list);
    setPosts(list.data.data);
  };
  const [posts, setPosts] = useState<PostList[]>([]);
  return (
    <LayoutBase>
      <Search placeholder="请输入搜索内容" size="large" onSearch={onSearch} />

      <BlogPostListScroll posts={posts}></BlogPostListScroll>
    </LayoutBase>
  );
};

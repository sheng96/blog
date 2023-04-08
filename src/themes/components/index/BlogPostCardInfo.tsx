import BLOG from "../../../../blog.config";
import Link from "next/link";
import TagItemMini from "./TagItemMini";
import { PostList } from "@/api/model/postModel";
import React from "react";
import {FolderOutlined} from "@ant-design/icons";
interface Props {
  post: PostList;
  showPreview: string;
  showPageCover: boolean;
  showSummary: boolean;
  children?: React.ReactNode;
}
/**
 * 博客列表的文字内容
 * @param {*} param0
 * @returns
 */
export const BlogPostCardInfo = ({
  post,
  showPreview,
  showPageCover,
  showSummary,
}: Props) => {
  const tagItems = [
    {
      name: "建站",
      color: "gray",
    },
    {
      name: "文字",
      color: "pink",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="200"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom"
      className={`h-56 flex flex-col justify-between lg:p-6 p-4 md:max-h-60 ${
        showPageCover ? "md:w-7/12 w-full " : "w-full"
      }`}
    >
      <div>
        {/* 标题 */}
        <Link
          href={`/post/${post.id}`}
          passHref
          className={`replace cursor-pointer hover:underline text-2xl ${
            showPreview ? "text-center" : ""
          } leading-tight text-gray-600 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400`}
        >
          {post.title}
        </Link>

        {/* 日期 */}
        <div
          className={`flex mt-2 items-center ${
            showPreview ? "justify-center" : "justify-start"
          } flex-wrap dark:text-gray-500 text-gray-400 hover:text-indigo-700 dark:hover:text-indigo-400`}
        >
          <Link
            href={`/archive#${post?.creatTime?.substr(0, 7)}`}
            passHref
            className="font-light hover:underline cursor-pointer text-sm leading-4 mr-3"
          >
            <i className="far fa-calendar-alt mr-1" />
              {post?.creatTime }
            {/*{post?.creatTime || post.lastEditedTime}*/}
          </Link>
        </div>

        {/* 摘要 */}
        {(!showPreview || showSummary) && (
          <p
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
            }}
            className="replace my-3 text-gray-700  dark:text-gray-300 text-sm font-light leading-7"
          >
            {post.summary}
          </p>
        )}

        {/* 搜索结果 */}
        {/*{post.results && (*/}
        {/*  <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm font-light leading-7">*/}
        {/*    {post.results.map((r) => (*/}
        {/*      <span key={r}>{r}</span>*/}
        {/*    ))}*/}
        {/*  </p>*/}
        {/*)}*/}

        {/* 预览 */}
        {/*{showPreview && (*/}
        {/*    <div className="overflow-ellipsis truncate">*/}
        {/*        <NotionPage post={post} />*/}
        {/*    </div>*/}
        {/*)}*/}
      </div>

      <div>
        {/* 分类标签 */}
        <div className="text-gray-400 justify-between flex">
          {/*<Link*/}
          {/*  href={`/category/${post?.category}`}*/}
          {/*  passHref*/}
          {/*  className="cursor-pointer font-light flex items-center text-sm hover:underline hover:text-indigo-700 dark:hover:text-indigo-400 transform"*/}
          {/*>*/}
          {/*    <FolderOutlined  className="mr-1" />*/}
          {/*  /!*<i className="mr-1 far fa-folder" />*!/*/}
          {/*  {post?.category||'未分类'}*/}
          {/*</Link>*/}
          <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
              {tagItems.map((tag: any) => (
                <TagItemMini key={tag.name} tag={tag} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

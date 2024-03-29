/**
 * 博客归档列表
 * @param posts 所有文章
 * @param archiveTitle 归档标题
 * @returns {JSX.Element}
 * @constructor
 */
import React from "react";
import Link from "next/link";
import BLOG from "blog.config";

interface Posts {
    id: number;
    title: string;
    creatTime: string;
}
interface Props {
    posts: Posts[];
    archiveTitle: string;
}
const BlogPostArchive = ({ posts = [], archiveTitle }:Props) => {
    
  if (!posts || posts.length === 0) {
    return <></>;
  } else {
    return (
      <div>
        <div
          className="pt-16 pb-4 text-3xl dark:text-gray-300"
          id={archiveTitle}
        >
          {archiveTitle}
        </div>
        <ul>
          {posts.map((post) => (
            <li
              key={post.id}
              className="border-l-2 p-1 text-xs md:text-base items-center  hover:scale-x-105 hover:border-indigo-500 dark:hover:border-indigo-300 dark:border-indigo-400 transform duration-500"
            >
              <div id={post?.creatTime}>
                <span className="text-gray-400">{post.creatTime}</span>{" "}
                &nbsp;
                <Link
                  href={`post/${post.id}`}
                  passHref
                  className="dark:text-gray-400  dark:hover:text-indigo-300 overflow-x-hidden hover:underline cursor-pointer text-gray-600"
                >
                  {post.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default BlogPostArchive;

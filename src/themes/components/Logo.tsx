
import BLOG from "blog.config";
import Link from "next/link";
import React from "react";

const Logo = (props: any) => {
  // const { siteInfo } = props
  const siteInfo = {
    title: "Sheng Blog",
    description: "一个手工搭建的博客",
    pageCover:
      "https://www.notion.so/images/page-cover/nasa_robert_stewart_spacewalk_2.jpg",
    icon: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=4379bc14-5d22-453b-a153-12639616fc01",
  };
  return (
    <Link href="/" passHref legacyBehavior>
      <div className="flex flex-col justify-center items-center cursor-pointer space-y-3">
        <div className=" text-lg p-1.5 rounded dark:border-white hover:scale-110 transform duration-200">
          {" "}
          {siteInfo?.title || BLOG.TITLE}
        </div>
      </div>
    </Link>
  );
};
export default Logo;

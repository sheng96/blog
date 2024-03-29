
import {  Divider } from "antd";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import style from "@/styles/postList.module.css";

export const PostList = ({ allPostsData, className }: any) => {
  return (
    <ul className={`w-full ${className}`}>
      {allPostsData.data.map((item: any, index: number) => {
        return (
          <li
            key={item.id}
            className={`bg-white mx-2 mb-6 p-4 rounded-lg sm:flex justify-between items-center shadow ${
              index % 2 ? "sm:flex-row-reverse" : ""
            } `}
          >
            <div className="sm:w-2/6 h-48 sm:h-32 relative">
              <Link href={"/post/" + item.id}>
                <Image
                  className={"object-cover"}
                  alt="文章封面"
                  fill={true}
                  src="https://cn.bing.com//th?id=OHR.YiPeng_ZH-CN0652265903_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp&w=240&h=135"
                ></Image>
              </Link>
            </div>
            <div
              className={`sm:w-4/6 mt-4 sm:mt-0 sm:h-32 ${
                index % 2 ? "" : "ml-2"
              }`}
            >
              <Link href={"/post/" + item.id}>
                <h2 className={"text-lg truncate font-bold sm:text-2xl sm:h-2/6"}>
                  {item.title}
                </h2>
              </Link>
              <p
                className={`sm:text-base text-gray-500 text-sm sm:mt-0 mt-3  hidden sm:block ${style["text-line-clamp"]}`}
              >
                {item.summary}
              </p>
              <div
                className={`text-gray-400 sm:mt-0 mt-3 sm:mt-4 sm:h-1/6 text-xs flex items-end`}
              >
                <span> {dayjs(item.creatTime).format("YYYY-MM-DD HH:mm")}</span>
                <Divider type="vertical" />
                <span>阅读:{item.count}</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

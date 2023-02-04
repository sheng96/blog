import type { NextPage } from "next";
import Head from "next/head";
import { Divider } from "antd";
import $request from "@/utils/http/axios";
import { Avatar, Image } from "antd";

import { NavBar } from "@/components/navBar";
import { PostList } from "@/components/postList";
import { Layout } from "@/components/Layout";
import styles from "@/styles/index.module.scss";

export async function getStaticProps() {
  const data = await $request.get("/post");

  return {
    props: {
      allPostsData: data,
    },
    revalidate: 60 * 60 * 8,
  };
}

const Home: NextPage = ({ allPostsData }: any) => {
  return (
    <>
      <Head>
        <title>首页</title>
      </Head>
      {/*<NavBar />*/}
      <Layout content={Content(allPostsData)}></Layout>
    </>
  );
};

export const Content = (allPostsData: any) => {
  return (
    <main className={`flex mt-6 items-start  ${styles.main} m-auto`}>
      <PostList
        className={`${styles["post-list"]}`}
        allPostsData={allPostsData}
      ></PostList>
      <div
        className={"bg-white py-6 w-56 shadow-lg text-center hidden lg:block"}
      >
        <Avatar src="/avatar.png" size={120} />
        <p>Pengyang</p>
        <p className={`text-gray-300 text-xs mt-3`}>
          我们来自不同的世界，但我们彼此相容。
        </p>
        <div></div>
      </div>
    </main>
  );
};

export default Home;

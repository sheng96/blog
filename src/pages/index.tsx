import type { NextPage } from "next";
import Head from "next/head";
import { Divider } from "antd";
import $request from "@/utils/http/axios";

import { NavBar } from "@/components/navBar";
import { PostList } from "@/components/postList";
import { Layout } from "@/components/Layout";
import styles from '@/styles/index.module.scss'

export async function getStaticProps() {
  const data = await $request.get("/post");

  return {
    props: {
      allPostsData: data,
    },
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
      <PostList className={`${styles['post-list']}`} allPostsData={allPostsData}></PostList>
      <div className={"bg-white p-6 w-64 shadow-lg hidden lg:block"}>
        重视大得多能放得开
      </div>
    </main>
  );
};

export default Home;

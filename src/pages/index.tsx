import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import dayjs from 'dayjs'
import { Divider } from 'antd';

import { NavBar } from "@/components/navBar";
import {PostList} from "@/components/postList";

export async function getStaticProps() {
  const allPostsData = await fetch("http://api.pengyang.plus/webApi/post").then(
    (r) => r.json()
  );
    console.log(allPostsData)

  return {
    props: {
      allPostsData: allPostsData,
    },
  };
}

const Home: NextPage = ({ allPostsData }: any) => {
  return (
    <div className="bg-amber-200 w-full h-screen">
      <Head>
        <title>首页</title>
      </Head>
      <NavBar />

      <main className="sm:w-4/5  m-auto  mt-3 flex">
          <PostList allPostsData={allPostsData} ></PostList>
          <div className={'bg-blue-600 w-1/5 hidden lg:block'}>assssssssssssssssssssss</div>
      </main>
    </div>
  );
};

export default Home;

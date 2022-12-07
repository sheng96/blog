import type { NextPage } from "next";
import Head from "next/head";
import { Divider } from 'antd';
import $request from "@/utils/http/axios"

import { NavBar } from "@/components/navBar";
import {PostList} from "@/components/postList";

export async function getStaticProps() {
    const data=await $request.get('/post');
    // console.log(data)
  // const allPostsData = await fetch(process.env.NEXT_PUBLIC_API+"/post").then(
  //   (r) => r.json()
  // );


  return {
    props: {
      allPostsData: data,
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

      <main className="sm:w-4/5  m-auto  mt-3 flex ">
          <PostList allPostsData={allPostsData} ></PostList>
          <div className={'bg-blue-600 w-1/5 hidden  lg:block'}>重视大得多能放得开</div>
      </main>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import dayjs from 'dayjs'
import { Divider } from 'antd';

import { NavBar } from "../components/navBar";

export async function getStaticProps() {
  const allPostsData = await fetch("http://127.0.0.1:3001/api_v1/post").then(
    (r) => r.json()
  );

  return {
    props: {
      allPostsData: allPostsData,
    },
  };
}

const Home: NextPage = ({ allPostsData }: any) => {
    console.log(allPostsData.data.data)
  return (
    <div className="bg-amber-200 w-full h-screen">
      <Head>
        <title>首页</title>
      </Head>
      <NavBar />

      <main className="w-3/4 m-auto  mt-3">
        <ul>
          {allPostsData.data.data.map((item: any) => {
            return (
              <li key={item.id} className={"bg-white m-2 p-4 rounded-lg"}>
                <h2 className={"text-lg"}>{item.title}</h2>
                <p className={"text-sm my-2 h-14"}>{item.summary}</p>
                <div className={"text-sm my-2 text-xs"}>
                   <span> {dayjs(item.creatTime).format('YYYY-MM-DD HH:mm')}</span>
                    <Divider type="vertical" />
                    <span>阅读:{item.count}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default Home;

import { useRouter } from "next/router";
import $request from "@/utils/http/axios";
import Image from "next/image";
import MarkdownNavbar from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
import MarkdownToHtml from "@/components/MarkdowmToHtml";
import style from "../../styles/postDetail.module.scss";
import dayjs from "dayjs";
import { Anchor } from "antd";
import { Layout } from "@/components/Layout";
import Head from "next/head";
import {useEffect} from "react";

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await $request.get("/post");
  const posts = (await res.data) as any[];

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() }, //id类型必须为字符串
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: any) {
  const data = await $request.get(`/post/${+params.id}`);
  return {
    props: {
      detail: data,
      revalidate: 60 * 60 * 12,
    },
  };
}

const Article = ({ detail }: any) => {
  const router = useRouter()
  const { pid } = router.query
  useEffect(()=>{
    $request.patch(`/post/${router.query.id}`).then(r=>{
      console.log(r)
    })
  },[])
  return (
    <>
      <Head>
        <title>{detail.title}</title>
      </Head>
      <Layout content={Post(detail)}></Layout>
    </>
  );
};

const Post = (detail: any) => {
  return (
    <main
      className={`${style["detail-body"]} justify-between items-start flex m-auto px-10 md:px-0 `}
    >
      <div
        className={
          " border-2 border-indigo-600 p-4 markdown-body " + style.markdown
        }
      >
        <h1>{detail.title}</h1>
        <div className={`flex item-center text-neutral-400 text-sm mb-10`}>
          {detail.user?.avatar?
            <Image
                src={detail.user.avatar}
                alt={detail.user.userName}
                className={"rounded-full"}
                width={30}
                height={30}
            ></Image>:null
          }
          <div className={`ml-2`}>
            <span>{detail.user.userName}</span>
            <div>
              <time dateTime={detail.creatTime}>
                {dayjs(detail.creatTime).format("YYYY-MM-DD HH:mm")}
              </time>
              <span className={`mx-3`}>|</span>
              <span>标签</span>
            </div>
          </div>
        </div>
        <MarkdownToHtml content={detail.content}></MarkdownToHtml>
      </div>

      <Anchor className={`bg-white navigation w-72 bg-white hidden sm:block`}>
        <MarkdownNavbar source={detail.content} />
      </Anchor>
      {/*<div dangerouslySetInnerHTML={{__html:detail.contentHtml}} ></div>*/}
    </main>
  );
};

export default Article;

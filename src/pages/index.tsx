import type { NextPage } from "next";
import Head from "next/head";
import $request from "@/utils/http/axios";
import { LayoutIndex } from "@/themes/LayoutIndex";
import { postAllApi } from "@/api/post";
import { PostList } from "@/api/model/postModel";

export async function getStaticProps() {
  const data = await postAllApi();
  return {
    props: {
      posts: data.data,
    },
    revalidate: 60 * 60 * 8,
  };
}
interface Props {
  posts: PostList[];
}
const Home: NextPage<Props> = (props) => {
  return <LayoutIndex {...props}></LayoutIndex>;
};
export default Home;

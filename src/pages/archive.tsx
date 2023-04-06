import type { NextPage } from "next";
import { LayoutIndex } from "@/themes/LayoutIndex";
import {archiveApi, postAllApi} from "@/api/post";
import {archive, PostList} from "@/api/model/postModel";
import { LayoutArchive } from "@/themes/LayoutArchive";

export async function getStaticProps() {
  const {data} = await archiveApi();
  console.log(data)
  return {
    props: {
      archivePosts: data,
    },
    revalidate: 60 * 60 * 24,
  };
}

const Archive: NextPage<archive> = (props) => {
  return <LayoutArchive {...props}></LayoutArchive>;
};
export default Archive;

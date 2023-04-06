import type { NextPage } from "next";
import { archiveApi } from "@/api/post";
import { archive } from "@/api/model/postModel";
import { LayoutArchive } from "@/themes/LayoutArchive";

export async function getStaticProps() {
  const { data } = await archiveApi();
  return {
    props: {
      archivePosts: data,
    },
    revalidate: 60 * 60 * 24,
  };
}

const Archive: NextPage<{ archivePosts: archive }> = (props) => {
  return <LayoutArchive {...props}></LayoutArchive>;
};
export default Archive;

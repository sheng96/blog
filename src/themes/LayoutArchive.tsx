import { useEffect } from "react";
import BlogPostArchive from "./components/BlogPostArchive";
import Card from "./components/Card";
import { LayoutBase } from "./LayoutBase";
import { archive } from "@/api/model/postModel";
interface  Props {
    archivePosts: archive;
}
export const LayoutArchive = (props:Props) => {
  const { archivePosts } = props;
  useEffect(() => {
    const anchor = window.location.hash;
    if (anchor) {
      setTimeout(() => {
        const anchorElement = document.getElementById(anchor.substring(1));
        if (anchorElement) {
          anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }, 300);
    }
  }, []);
  return (
    <LayoutBase {...props}>
      <Card className="w-full">
        <div className="mb-10 pb-20 bg-white md:p-12 p-3 min-h-full dark:bg-hexo-black-gray">

          {Object.keys(archivePosts).map((archiveTitle) => (

            <BlogPostArchive
              key={archiveTitle}
              posts={archivePosts[archiveTitle]}
              archiveTitle={archiveTitle}
            />
          ))}
        </div>
      </Card>
    </LayoutBase>
  );
};

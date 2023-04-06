import Link from "next/link";
import formatDate from "@/lib/formatDate";
import BLOG from "blog.config";
import { FolderOpenFilled } from "@ant-design/icons";
import dayjs from "dayjs";

export default function HeaderArticle({ detail: post }: any) {
  // const post =detail
  if (!post) {
    return <></>;
  }
  // const headerImage = post?.page_cover ? `url("${post.page_cover}")` : `url("${siteInfo?.pageCover}")`
  const headerImage = `url("https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcc6ecb1d-022d-4605-8727-e5c9677b6ffc%2F7efac00a17136024ab153e4f0ac3c2ae.jpg?table=block&id=a6271da0-6b8f-47a3-9735-e8fa770f1d9f&cache=v2")`;
  const date = formatDate(post?.date?.start_date || post?.createdTime, "zh-CN");

  return (
    <div
      id="header"
      className="w-full h-96 relative md:flex-shrink-0 overflow-hidden bg-cover bg-center bg-no-repeat animate__animated animate__fadeIn"
      style={{ backgroundImage: headerImage }}
    >
      <header className="animate__slideInDown animate__animated bg-black bg-opacity-70 absolute top-0 w-full h-96 py-10 flex justify-center items-center ">
        <div className="mt-24">
          {/* 文章Title */}
          <div className="font-bold text-xl shadow-text flex justify-center text-center text-white dark:text-white ">
            {post.title}
          </div>

          <section className="flex-wrap shadow-text flex text-sm justify-center mt-2 text-white dark:text-gray-400 font-light leading-8">
            <div className="dark:text-gray-200">
              {(post.category || true) && (
                <>
                  <Link
                    href={`/category/${post.category}`}
                    passHref
                    legacyBehavior
                  >
                    <div className="cursor-pointer items-center flex mr-2 dark:hover:text-white hover:underline">
                      <FolderOpenFilled className={`mr-1`} />
                      {post.category || "未分类"}
                    </div>
                  </Link>
                </>
              )}
            </div>
            <div className="flex justify-center">
              {post?.type !== "Page" && (
                <Link
                  href={`/archive#${post?.date?.start_date?.substr(0, 7)}`}
                  passHref
                  className="pl-1 mr-2 cursor-pointer hover:underline"
                >
                  发布于:{dayjs(post.creatTime).format("YYYY-MM-DD")}
                </Link>
              )}
              <div className="pl-1 mr-2">
                最后更新: {dayjs(post.updateTime).format("YYYY-MM-DD")}
              </div>
            </div>
            {BLOG.ANALYTICS_BUSUANZI_ENABLE && (
              <div className="busuanzi_container_page_pv font-light mr-2">
                <span className="mr-2 busuanzi_value_page_pv" />
                {post.count} 次查看
              </div>
            )}
          </section>
        </div>
      </header>
    </div>
  );
}

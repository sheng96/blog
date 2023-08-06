
import { LayoutBase } from "./LayoutBase";
import MarkdownToHtml from "@/components/MarkdowmToHtml";
import HeaderArticle from "@/themes/components/post/HeaderArticle";
// import {Comment} from "@/components/Comment";
import dynamic from "next/dynamic";
const Comment = dynamic(
  () => import("@/components/Comment").then((r) => r.Comment),
  {
    ssr: false,
  }
);

export const LayoutPost = (props: any) => {
  return (
    <LayoutBase
      headerSlot={<HeaderArticle {...props} />}
      {...props}
      showCategory={false}
      showTag={false}
      // floatSlot={floatSlot}
    >
      <div className="w-full lg:hover:shadow lg:border lg:rounded-xl lg:px-2 lg:py-4 bg-white dark:bg-hexo-black-gray dark:border-black">
        {/*{lock && <ArticleLock validPassword={validPassword} />}*/}

        {
          <div
            id="container"
            className="overflow-x-auto flex-grow mx-auto md:w-full md:px-5 "
          >
            <article
              itemScope
              itemType="https://schema.org/Movie"
              className="subpixel-antialiased overflow-y-hidden"
            >
              {/* Notion文章主体 */}
              <section
                id="notion-article"
                className="px-2 justify-center mx-auto lg:pt-8 max-w-2xl lg:max-w-full"
              >
                <MarkdownToHtml content={props.detail.content} />
              </section>

              {/*<section className="px-1 py-2 my-1 text-sm font-light overflow-auto text-gray-600  dark:text-gray-400">*/}
              {/*    /!* 文章内嵌广告 *!/*/}
              {/*    <ins className="adsbygoogle"*/}
              {/*         style={{ display: 'block', textAlign: 'center' }}*/}
              {/*         data-adtest="on"*/}
              {/*         data-ad-layout="in-article"*/}
              {/*         data-ad-format="fluid"*/}
              {/*         data-ad-client="ca-pub-2708419466378217"*/}
              {/*         data-ad-slot="3806269138" />*/}
              {/*</section>*/}

              {/*{post.type === 'Post' && <ArticleCopyright {...props} /> }*/}
              {/*{post.type === 'Post' && <ArticleRecommend {...props} /> }*/}
              {/*{post.type === 'Post' && <ArticleAdjacent {...props} /> }*/}
            </article>

            <hr className="border-dashed" />

            {/* 评论互动 */}
            <div className="duration-200 overflow-x-auto bg-white dark:bg-hexo-black-gray px-3">
              <Comment postId={props.detail.id} />
            </div>
          </div>
        }
      </div>

      {/*<div className='block lg:hidden'>*/}
      {/*    /!*<TocDrawer post={post} cRef={drawerRight} targetRef={targetRef} />*!/*/}
      {/*</div>*/}
    </LayoutBase>
  );
};

import BLOG from 'blog.config'
import Link from 'next/link'
import React from 'react'
import THEME_CONFIG from "@/themes/theme_config";
import { BlogPostCardInfo } from './BlogPostCardInfo'
// import Image from 'next/image'

const BlogPostCard = (props:any) => {
    const {  post, showSummary }=props
    const showPreview = THEME_CONFIG.POST_LIST_PREVIEW && post.blockMap
    if (post && !post.page_cover && THEME_CONFIG.POST_LIST_COVER_DEFAULT) {
        // post.page_cover = siteInfo?.pageCover
    }
    post.page_cover='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcc6ecb1d-022d-4605-8727-e5c9677b6ffc%2F7efac00a17136024ab153e4f0ac3c2ae.jpg?table=block&id=a6271da0-6b8f-47a3-9735-e8fa770f1d9f&cache=v2'
    // const showPageCover = THEME_CONFIG.POST_LIST_COVER && post?.page_cover
const showPageCover=true
    return (
        <div
            key={post.id}
            className={`flex md:flex-row flex-col-reverse ${THEME_CONFIG.POST_LIST_IMG_CROSSOVER ? 'even:md:flex-row-reverse' : ''}
        w-full justify-between overflow-hidden
        border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray`}>

            {/* 文字内容 */}
            <BlogPostCardInfo  post={post} showPageCover={showPageCover} showPreview={showPreview} showSummary={showSummary}/>

            {/* 图片封面 */}
            {showPageCover && !showPreview && post?.page_cover && (
                <div className="h-auto md:w-5/12">
                    <Link href={`${BLOG.SUB_PATH}/${post.slug}`} passHref legacyBehavior>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        {/* <img
                        src={post?.page_cover}
                        alt={post.title}
                        loading='lazy'
                        className="w-full relative cursor-pointer object-cover duration-200 hover:scale-125 "
                    /> */}
                        <div className='bg-center bg-cover md:h-full h-52' style={{ backgroundImage: `url('${post?.page_cover}')` }}/>

                        {/* <div className='relative w-full h-full'>
                    <Image
                     className='hover:scale-125 transition cursor-pointer duration-500'
                     src={post?.page_cover}
                     alt={post.title}
                     quality={30}
                     placeholder='blur'
                     blurDataURL='/bg_image.jpg'
                     style={{ objectFit: 'cover' }}
                     fill/>
                    </div> */}
                    </Link>
                </div>
            )}

        </div>
    )
}

export default BlogPostCard

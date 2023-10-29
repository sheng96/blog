import BLOG from 'blog.config'
import Link from 'next/link'
import React from 'react'
import THEME_CONFIG from '@/themes/theme_config'
import { BlogPostCardInfo } from './BlogPostCardInfo'
import { BlogPostCardHead } from '@/themes/components/index/BlogPostCardHead'
// import Image from 'next/image'

const BlogPostCard = (props: any) => {
  const { post } = props

  // post.cover =
  //   'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcc6ecb1d-022d-4605-8727-e5c9677b6ffc%2F7efac00a17136024ab153e4f0ac3c2ae.jpg?table=block&id=a6271da0-6b8f-47a3-9735-e8fa770f1d9f&cache=v2'

  const showPageCover = Boolean(post?.cover)
  return (
    <div
      key={post.id}
      className={`w-full text-center  overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray`}
    >
      {/* 图片封面 */}
      <BlogPostCardHead post={props.post}></BlogPostCardHead>

      {/* 文字内容 */}
      <BlogPostCardInfo post={post} showPageCover={showPageCover} />
    </div>
  )
}

export default BlogPostCard

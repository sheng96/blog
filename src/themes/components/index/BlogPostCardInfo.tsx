import Link from 'next/link'
import TagItemMini from './TagItemMini'
import { PostList } from '@/api/model/postModel'
import React from 'react'
import { Switch, Typography } from 'antd'

const { Paragraph, Text } = Typography
interface Props {
  post: PostList
  showPageCover: boolean
  children?: React.ReactNode
}
/**
 * 博客列表的文字内容
 * @param {*} param0
 * @returns
 */
export const BlogPostCardInfo = ({ post, showPageCover }: Props) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="200"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom"
      className={`min-h-50 text-base flex flex-col justify-between lg:p-6 p-4 md:max-h-60 w-full`}
    >
      <div>
        {/* 标题 */}

        {/* 摘要 */}
        {post.summary && (
          // <Paragraph ellipsis={{ rows: 2 }}>
          //   <span>
          //     Ant Design, a design language for background applications, is
          //     refined by Ant UED Team. Ant Design, a design language for
          //     background applications, is refined by Ant UED Team. Ant Design, a
          //     design language for background applications, is refined by Ant UED
          //     Team. Ant Design, a design language for background applications,
          //     is refined by Ant UED Team. Ant Design, a design language for
          //     background applications, is refined by Ant UED Team. Ant Design, a
          //     design language for background applications, is refined by Ant UED
          //     Team.
          //   </span>
          // </Paragraph>
          <p
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '3',
              WebkitBoxOrient: 'vertical'
            }}
            className="replace my-3 text-left text-gray-700  dark:text-gray-300 font-light leading-7"
          >
            {post.summary}
          </p>
        )}
      </div>

      {/* 分类标签 */}
      <div className="text-gray-400 mt-5 justify-between flex">
        <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
          {post.tag.map((name: string, index) => (
            <TagItemMini key={index} tag={name} />
          ))}
        </div>
      </div>
    </div>
  )
}

import { PostList } from '@/api/model/postModel'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { CalendarOutlined, EyeOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import { Divider } from 'antd'

export const BlogPostCardHead = (props: { post: PostList }) => {
  const { post } = props
  return (
    <div
      className={` ${
        post.cover ? 'h-60' : 'h-30 pt-10'
      } overflow-hidden relative`}
    >
      {/* 图片封面 */}
      {post.cover && (
        <Image
          src={post.cover}
          sizes="100%"
          style={{
            objectFit: 'cover'
          }}
          fill={true}
          alt={post.title}
        />
      )}
      {/* 文字内容 */}
      <div
        className={`w-full ${
          post.cover ? 'absolute bottom-1/4  text-white ' : 'text-center'
        }}`}
      >
        <Link
          href={`/post/${post.id}`}
          passHref
          className={` cursor-pointer  text-3xl  leading-tight  dark:text-gray-100 
           `}
        >
          {post.title}
        </Link>

        <div
          className={`flex mt-5 text-sm justify-center items-center flex-wrap dark:text-gray-500  ${
            !post.cover ? 'text-gray-400' : ''
          }`}
        >
          {/* 日期 */}
          <div className="font-light  cursor-default leading-4 mr-3">
            <CalendarOutlined />
            <span className="ml-1">
              {dayjs(post?.creatAt).format('YYYY-MM-DD')}
            </span>
          </div>
          <Divider type="vertical" />
          {/* 阅读数量*/}
          <div className="font-light  cursor-default leading-4 mr-3">
            <EyeOutlined />
            <span className="ml-1">{post.count}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

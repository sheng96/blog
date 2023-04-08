import BLOG from 'blog.config'
import BlogPostCard from './BlogPostCard'
import BlogPostListEmpty from './BlogPostListEmpty'
import { useGlobal } from '@/lib/global'
import React from 'react'
import THEME_CONFIG from "@/themes/theme_config";
import {PostList} from "@/api/model/postModel";
// import { getListByPage } from '@/lib/utils'

interface Props {
    posts: PostList[];
    children?: React.ReactNode;
}


/**
 * 博客列表滚动分页
 * @param posts 所有文章
 * @param tags 所有标签
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostListScroll = (props:Props) => {
    const { posts = [] }=props
    const currentSearch='', showSummary = THEME_CONFIG.POST_LIST_SUMMARY;
    const postsPerPage = BLOG.POSTS_PER_PAGE
    const [page, updatePage] = React.useState(1)
    // const postsToShow = getListByPage(posts, page, postsPerPage)

    let hasMore = false
    // if (posts) {
    //     const totalCount = posts.length
    //     hasMore = page * postsPerPage < totalCount
    // }

    const handleGetMore = () => {
        if (!hasMore) return
        updatePage(page + 1)
    }

    // 监听滚动自动分页加载
    const scrollTrigger = () => {
        requestAnimationFrame(() => {
            const scrollS = window.scrollY + window.outerHeight
            const clientHeight = targetRef ? (targetRef.current ? (targetRef.current.clientHeight) : 0) : 0
            if (scrollS > clientHeight + 100) {
                handleGetMore()
            }
        })
    }

    // 监听滚动
    React.useEffect(() => {
        window.addEventListener('scroll', scrollTrigger)
        return () => {
            window.removeEventListener('scroll', scrollTrigger)
        }
    })

    const targetRef = React.useRef<HTMLDivElement>(null)
    // const { locale } = useGlobal()

    if (!posts || posts.length === 0) {
        return <BlogPostListEmpty currentSearch={currentSearch} />
    } else {
        return <div id='container' ref={targetRef} className='w-full'>
            {/* 文章列表 */}
            <div className='flex flex-wrap space-y-1 lg:space-y-4 px-2'>

                {posts.map((post:any,) => (
                    <BlogPostCard key={post.id} post={post} showSummary={showSummary} />
                ))}
            </div>

            <div>
                <div onClick={() => { handleGetMore() }}
                     className='w-full my-4 py-4 text-center cursor-pointer rounded-xl dark:text-gray-200'
                > {hasMore ? '更多' : `${'更多'}`} </div>
            </div>
        </div>
    }
}

export default BlogPostListScroll

import { useGlobal } from '@/lib/global'

/**
 * 空白博客 列表
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostListEmpty = ({ currentSearch='' }) => {
    currentSearch='空空如也'
    // const { locale } = useGlobal()
    return <div className='flex w-full items-center justify-center min-h-screen mx-auto md:-mt-20'>
        <div className='text-gray-500 dark:text-gray-300'> {(currentSearch && <div>{currentSearch}</div>)}</div>
    </div>
}
export default BlogPostListEmpty

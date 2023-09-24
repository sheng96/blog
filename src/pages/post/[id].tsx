import { useRouter } from 'next/router'
import 'markdown-navbar/dist/navbar.css'
import { LayoutPost } from '@/themes/LayoutPost'
import { postAllApi, PostDetail, addCountApi } from '@/api/post'
import { useEffect } from 'react'

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const { data } = await postAllApi()
  const posts = data.data
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => {
    return {
      params: { id: post.id.toString() } //id类型必须为字符串
    }
  })
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }: any) {
  const { data } = await PostDetail(params.id * 1)
  return {
    props: {
      detail: data,
      revalidate: 60 * 60 * 12
    }
  }
}

const Article = ({ detail }: any) => {
  useEffect(() => {
    addCountApi(detail.id).then()
  }, [detail.id])
  const router = useRouter()
  const { pid } = router.query

  return <LayoutPost detail={detail} />
}

export default Article

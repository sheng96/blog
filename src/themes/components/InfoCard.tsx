import BLOG from 'blog.config'
import { useRouter } from 'next/router'
import Card from './Card'
import SocialButton from './SocialButton'
// import MenuGroupCard from './MenuGroupCard'
export function InfoCard (props:any) {
    const { className, siteInfo } = props
    const router = useRouter()
    return <Card className={className}>
        <div
            className='justify-center items-center flex hover:rotate-45 py-6 hover:scale-105 dark:text-gray-100  transform duration-200 cursor-pointer'
            onClick={() => {
                router.push('/')
            }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={siteInfo?.icon||'https://img2.baidu.com/it/u=1395017289,2375190034&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666803600&t=9e75e8156906bf586ba690a2ab8269c6'} className='rounded-full' width={120} alt={BLOG.AUTHOR}/>
        </div>
        <div className='text-center text-xl pb-4'>{BLOG.AUTHOR}</div>
        <div className='text-sm text-center'>{BLOG.BIO}</div>
        {/*<MenuGroupCard {...props}/>*/}
        <SocialButton />
    </Card>
}

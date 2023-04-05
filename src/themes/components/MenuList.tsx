import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useGlobal } from '@/lib/global'
// import CONFIG_HEXO from '../config_hexo'
import  THEME_CONFIG from '../theme_config'

const MenuList = (props:any) => {
    const { postCount, customNav } = props
    const locale = {
        "LOCALE": "zh-CN",
        "NAV": {
            "INDEX": "首页",
            "RSS": "订阅",
            "SEARCH": "搜索",
            "ABOUT": "关于",
            "MAIL": "邮箱",
            "ARCHIVE": "归档",
            "NAVIGATOR": "导航"
        },
        "COMMON": {
            "MORE": "更多",
            "NO_MORE": "没有更多了",
            "LATEST_POSTS": "最新文章",
            "TAGS": "标签",
            "NO_TAG": "NoTag",
            "CATEGORY": "分类",
            "SHARE": "分享",
            "SCAN_QR_CODE": "扫一扫二维码",
            "URL_COPIED": "链接已复制！",
            "TABLE_OF_CONTENTS": "目录",
            "RELATE_POSTS": "相关文章",
            "COPYRIGHT": "声明",
            "AUTHOR": "作者",
            "URL": "链接",
            "POSTS": "篇文章",
            "ARTICLE": "文章",
            "VISITORS": "位访客",
            "VIEWS": "次查看",
            "COPYRIGHT_NOTICE": "本文采用 CC BY-NC-SA 4.0 许可协议，转载请注明出处。",
            "RESULT_OF_SEARCH": "篇搜索到的结果",
            "ARTICLE_DETAIL": "文章详情",
            "PASSWORD_ERROR": "密码错误！",
            "ARTICLE_LOCK_TIPS": "文章已上锁，请输入访问密码",
            "SUBMIT": "提交",
            "POST_TIME": "发布于",
            "LAST_EDITED_TIME": "最后更新",
            "RECENT_COMMENTS": "最新评论",
            "DEBUG_OPEN": "开启调试",
            "DEBUG_CLOSE": "关闭调试",
            "THEME_SWITCH": "切换主题",
            "ANNOUNCEMENT": "公告",
            "ANALYTICS": "统计"
        },
        "PAGINATION": {
            "PREV": "上一页",
            "NEXT": "下一页"
        },
        "SEARCH": {
            "ARTICLES": "搜索文章",
            "TAGS": "搜索标签"
        },
        "POST": {
            "BACK": "返回上页",
            "TOP": "回到顶部"
        }
    }
    const router = useRouter()
    const archiveSlot = <div className='bg-gray-300 dark:bg-gray-500 rounded-md text-gray-50 px-1 text-xs'>{postCount}</div>

    let links = [
        { icon: 'fas fa-home', name: locale.NAV.INDEX, to: '/' || '/', show: true },
        { icon: 'fas fa-th', name: locale.COMMON.CATEGORY, to: '/category', show: THEME_CONFIG.MENU_CATEGORY },
        { icon: 'fas fa-tag', name: locale.COMMON.TAGS, to: '/tag', show: THEME_CONFIG.MENU_TAG },
        { icon: 'fas fa-archive', name: locale.NAV.ARCHIVE, to: '/archive', slot: archiveSlot, show: THEME_CONFIG.MENU_ARCHIVE },
        { icon: 'fas fa-search', name: locale.NAV.SEARCH, to: '/search', show: THEME_CONFIG.MENU_SEARCH }
    ]
    if (customNav) {
        links = links.concat(customNav)
    }

    return (
        <nav id='nav' className='leading-8 text-gray-500 dark:text-gray-300 '>
            {links.map(link => {
                if (link && link.show) {
                    const selected = (router.pathname === link.to) || (router.asPath === link.to)
                    return (
                        <Link
                            key={`${link.to}`}
                            title={link.to}
                            href={link.to}
                            className={'py-1.5 px-5 text-base justify-between hover:bg-indigo-400 hover:text-white hover:shadow-lg cursor-pointer font-light flex flex-nowrap items-center ' +
                                (selected ? 'bg-gray-200 text-black' : ' ')}>

                            <div className='my-auto items-center justify-center flex '>
                                <i className={`${link.icon} w-4 text-center`} />
                                <div className={'ml-4'}>{link.name}</div>
                            </div>
                            {link.slot}

                        </Link>
                    );
                } else {
                    return null
                }
            })}
        </nav>
    );
}
export default MenuList

import BLOG from '../../../../blog.config'
import React from 'react'
import {
    createFromIconfontCN,
    GithubOutlined,
    LinkedinOutlined,
    TwitterOutlined,
    WeiboOutlined
} from "@ant-design/icons";

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_3977547_pm4o1es9vml.js',
});

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
    return <div className='w-full justify-center flex-wrap flex'>
        <div className='space-x-3 text-xl text-gray-600 dark:text-gray-300 '>
            {BLOG.CONTACT_GITHUB && <a target='_blank' rel='noreferrer' title={'github'} href={BLOG.CONTACT_GITHUB} >
                <GithubOutlined className={`transform hover:scale-125 duration-150 dark:hover:text-indigo-400 hover:text-indigo-600`} />
                {/*<i className='transform hover:scale-125 duration-150 fab fa-github dark:hover:text-indigo-400 hover:text-indigo-600'/>*/}
            </a>}
            {BLOG.CONTACT_TWITTER && <a target='_blank' rel='noreferrer' title={'twitter'} href={BLOG.CONTACT_TWITTER} >
                <TwitterOutlined className={`transform hover:scale-125 duration-150 dark:hover:text-indigo-400 hover:text-indigo-600`} />
                {/*<i className='transform hover:scale-125 duration-150 fab fa-twitter dark:hover:text-indigo-400 hover:text-indigo-600'/>*/}
            </a>}
            {BLOG.CONTACT_TELEGRAM && <a target='_blank' rel='noreferrer' href={BLOG.CONTACT_TELEGRAM} title={'telegram'} >
                <IconFont type="icon-telegram" className={`transform hover:scale-125 duration-150 dark:hover:text-indigo-400 hover:text-indigo-600`} />
                {/*<i className='transform hover:scale-125 duration-150 fab fa-telegram dark:hover:text-indigo-400 hover:text-indigo-600'/>*/}
            </a>}
            {BLOG.CONTACT_LINKEDIN && <a target='_blank' rel='noreferrer' href={BLOG.CONTACT_LINKEDIN} title={'linkIn'} >
                <LinkedinOutlined className={`transform hover:scale-125 duration-150 dark:hover:text-indigo-400 hover:text-indigo-600`} />
                {/*<i className='transform hover:scale-125 duration-150 fab fa-linkedin dark:hover:text-indigo-400 hover:text-indigo-600'/>*/}
            </a>}
            {BLOG.CONTACT_WEIBO && <a target='_blank' rel='noreferrer' title={'weibo'} href={BLOG.CONTACT_WEIBO} >
                <WeiboOutlined className={`transform hover:scale-125 duration-150 dark:hover:text-indigo-400 hover:text-indigo-600`} />
                {/*<i className='transform hover:scale-125 duration-150 fab fa-weibo dark:hover:text-indigo-400 hover:text-indigo-600'/>*/}
            </a>}
            {BLOG.CONTACT_EMAIL && <a target='_blank' rel='noreferrer' title={'email'} href={`mailto:${BLOG.CONTACT_EMAIL}`} >
                <IconFont type="icon-email" className={`transform hover:scale-125 duration-150 dark:hover:text-indigo-400 hover:text-indigo-600`} />
                {/*<i className='transform hover:scale-125 duration-150 fas fa-envelope dark:hover:text-indigo-400 hover:text-indigo-600'/>*/}
            </a>}
            <a target='_blank' rel='noreferrer' title={'RSS'} href={'/feed'} >
                <IconFont type="icon-rss" className={`transform hover:scale-125 duration-150 dark:hover:text-indigo-400 hover:text-indigo-600`} />
                {/*<i className='transform hover:scale-125 duration-150 fas fa-rss dark:hover:text-indigo-400 hover:text-indigo-600'/>*/}
            </a>
        </div>
    </div>
}
export default SocialButton

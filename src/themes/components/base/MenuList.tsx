import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useGlobal } from '@/lib/global'
// import CONFIG_HEXO from '../config_hexo'
import  THEME_CONFIG from '../../theme_config'

const MenuList = (props:any) => {
    const { postCount } = props

    const router = useRouter()
    const archiveSlot = <div className='bg-gray-300 dark:bg-gray-500 rounded-md text-gray-50 px-1 text-xs'>{postCount}</div>

    const {links} =useGlobal()

    return (
        <nav id='nav' className='leading-8 text-gray-500 dark:text-gray-300 '>
            {links.map(link => {
                if (link && link.show) {
                    const selected = (router.pathname === link.to) || (router.asPath === link.to)
                    return (
                        <Link
                            key={`${link.to}`}
                            title={link.name}
                            href={link.to}
                            className={'py-1.5 px-5 text-base justify-between hover:bg-indigo-400 hover:text-white hover:shadow-lg cursor-pointer font-light flex flex-nowrap items-center ' +
                                (selected ? 'bg-gray-200 text-black' : ' ')}>

                            <div className='my-auto items-center justify-center flex '>
                                {link.icon}
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

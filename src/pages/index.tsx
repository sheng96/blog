import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu,Layout,Avatar, List, Space  } from 'antd';
import React, { useState } from 'react';

const { Header, Footer, Sider, Content } = Layout;

const items: MenuProps['items'] = [
    { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
    { label: '菜单项二', key: 'item-2' },
    {
        label: '子菜单',
        key: 'submenu',
        children: [{ label: '子菜单项', key: 'submenu-item-1' }],
    },
];


const Menus: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const style={
        display:'flex',
        justifyContent:'center'
    }

    return <Menu onClick={onClick} style={style} selectedKeys={[current]} mode="horizontal" items={items} />;

};




const Home: NextPage = () => {
  return (
     <div className='bg-amber-200 w-full h-screen'>
       <Head>
           <title>首页</title>
       </Head>



             <header><Menus/></header>
            <main className='w-3/4 m-auto'>
            </main>

     </div>
)

}

export default Home

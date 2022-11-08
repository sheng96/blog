import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import Link from "next/link";
import Image from "next/legacy/image";
type Props = {
  menuShow: boolean;
  setMenuShow: any;
};
const menuName: {
  name: string;
  url: string;
}[] = [
  {
    name: "首页",
    url: "/",
  },
  { name: "标签", url: "/tag" },
  {
    name: "分类",
    url: "/category",
  },
  {
    name: "时间线",
    url: "/timeline",
  },
  {
    name: "关于",
    url: "/about",
  },
];
const Menu = (props: Props) => {
  return (
    <>
      <nav className="hidden sm:flex items-center">
        <ul className={"flex items-center"}>
          {menuName.map((item) => (
            <li
              key={item.name}
              className={
                "ml-10 h-10 hover:border-b-2 hover:border-blue-600  leading-10"
              }
            >
              <Link href={item.url} className="block">
                <a> {item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Drawer
        open={props.menuShow}
        closable={false}
        placement={"left"}
        width={250}
        onClose={() => props.setMenuShow(false)}
      >
        <div>
          <Image
            src="https://img2.baidu.com/it/u=1395017289,2375190034&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666803600&t=9e75e8156906bf586ba690a2ab8269c6"
            alt="头像"
            width={50}
            height={50}
          />
        </div>
        <nav>
          <ul className='divide-y-4 divide-yellow-600 divide-dashed'>
            {menuName.map((item) => (
              <li key={item.name} className="py-2 ">
                <Link href={item.url} className="block">
                  <a> 菜单{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
    </>
  );
};

export const NavBar = () => {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <header className="flex h-14 bg-white items-center px-4 sm:px-10">
      {/*<div className={'flex items-center'}>*/}
      <MenuOutlined
        className="text-lg sm:hidden"
        onClick={() => setMenuShow(true)}
      />
      <Menu menuShow={menuShow} setMenuShow={setMenuShow}></Menu>

      {/*</div>*/}
      {/*<Menu></Menu>*/}
      <div></div>
    </header>
  );
};

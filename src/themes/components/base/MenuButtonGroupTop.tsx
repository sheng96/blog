import React from "react";
import Link from "next/link";
import { useGlobal } from "@/lib/global";
import THEME_CONFIG from "../../theme_config";

const MenuButtonGroupTop = (props: any) => {
  const {links} = useGlobal();
  return (
    <nav id="nav" className="leading-8 flex justify-center  font-light w-full">
      {links.map((link) => {
        if (link.show) {
          return (
            <Link
              key={`${link.to}`}
              title={link.name}
              href={link.to}
              target={link.to.indexOf("http") === 0 ? "_blank" : "_self"}
              className={
                "py-1.5 my-1 px-3  text-base justify-center items-center cursor-pointer"
              }
            >
              <div className="w-full flex text-sm items-center justify-center hover:scale-125 duration-200 transform">
                {link.icon}
                <div className="text-center ml-1">{link.name}</div>
              </div>
            </Link>
          );
        } else {
          return null;
        }
      })}
    </nav>
  );
};
export default MenuButtonGroupTop;

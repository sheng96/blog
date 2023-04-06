import BLOG from "blog.config";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" passHref legacyBehavior>
      <div className="flex flex-col justify-center items-center cursor-pointer space-y-3 text-lg p-1.5 rounded dark:border-white hover:scale-110 transform duration-200">
        {BLOG.TITLE || "Blog"}
      </div>
    </Link>
  );
};
export default Logo;

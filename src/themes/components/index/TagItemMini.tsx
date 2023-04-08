import { Tag } from "antd";
import Link from "next/link";
type Tag = {
  name: string;
  color: string;
  count?: number;
};
const TagItemMini = ({
  tag,
  selected = false,
}: {
  tag: Tag;
  selected?: boolean;
}) => {
  return (
    <Link
      key={tag.name}
      href={selected ? "/" : `/tag/${encodeURIComponent(tag.name)}`}
      passHref
      className={`cursor-pointer inline-block rounded   duration-200
         text-xs whitespace-nowrap 
         ${
           selected
             ? "text-white dark:text-gray-300 bg-black dark:bg-black "
             : `text-gray-600`
         }`}
    >
      <Tag color={tag.color}>
        {tag.name + (tag.count ? `(${tag.count})` : "")}
      </Tag>
      {/*<div className='font-light'>{selected && <i className='mr-1 fa-tag'/>} {tag.name + (tag.count ? `(${tag.count})` : '')} </div>*/}
    </Link>
  );
};

export default TagItemMini;

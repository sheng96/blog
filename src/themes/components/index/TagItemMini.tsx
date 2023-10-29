import { Tag } from 'antd'
import Link from 'next/link'

const TagItemMini = ({
  tag = 'none',
  selected = false
}: {
  tag: string
  selected?: boolean
}) => {
  return <Tag color={`default`}>{tag}</Tag>
}

export default TagItemMini

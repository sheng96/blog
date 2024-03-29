import { BaseModel, PagesBaseModel, PagesModel } from '@/api/model/baseModel'

export enum statusEnum {
  DRAFT = 'DRAFT',
  PUBLISH = 'PUBLISH'
}

export interface User {
  userName: string
  avatar?: any
}

export interface PostList {
  id: string
  title: string
  content: string
  cover: string
  summary: string
  count: number
  status: statusEnum
  creatAt: string
  updateTime: string
  tag: string[]
  user: User
}
export interface archive {
  [key: string]: {
    id: number
    title: string
    creatTime: string
  }[]
}

export type PostListModel = PagesBaseModel<PostList>

export type PostDetailModel = BaseModel<PostList>

export type ArchiveModel = BaseModel<archive>

import {BaseModel, PagesBaseModel, PagesModel} from "@/api/model/baseModel";

export enum statusEnum {
  DRAFT = "DRAFT",
  PUBLISH = "PUBLISH",
}

export interface User {
  userName: string;
  avatar?: any;
}

export interface PostList {
  id: string;
  title: string;
  content: string;
  contentHtml: string;
  summary: string;
  count: number;
  status: statusEnum;
  creatTime: string;
  updateTime: string;
  tags: string[];
  user: User;
}

export type PostListModel = PagesModel<PostList>;

export type PostDetailModel = BaseModel<PostList>;

import {BaseModel, PagesBaseModel, PagesModel} from "@/api/model/baseModel";

export interface CommentType {
    id:number;
    content: string;
    nickname: string;
    replyId?: number;
    address: string;
    os: string;
    browser: string;
    createdAt: string;
    like?:{
        id:number;
    },
    replies:CommentType[]
}
export interface CommentData {
    data:CommentType[],
    count:number
}



export type CommentModel = BaseModel<CommentData>;

// export type ArchiveModel = BaseModel<archive>;

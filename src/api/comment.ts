
import http from '@/utils/http/axios'
import {CommentModel} from "@/api/model/commentModel";

export interface CommentParams {
    content: string;
    postId: number;
    nickname: string;
    email: string;
    replyId?: number;
}
export const createCommentApi = async (data:CommentParams ) =>
    await http.post('/comment', data)

// 获取评论
export const getCommentApi = async (postId:number):Promise<CommentModel> =>
    await http.get(`/comment/${postId}`, )

// 删除评论
export const deleteCommentApi = async (postId:number) =>
    await http.delete(`/comment/${postId}`, )

export interface LikeParams {
    commentId: number;
    browserFingerprint: string;
    userId?: number;
}
// 点赞
export const likeApi = async (body:LikeParams) =>
    await http.post(`/comment/like/`, {
        ...body
    })

// 删除点赞
export const unLikeApi = async (id:number) =>
    await http.delete(`/comment/like/${id}`, )


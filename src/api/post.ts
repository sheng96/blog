// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

import http from '@/utils/http/axios'
// import { statusEnum } from '@/api/model/postModel'
import { BasicPageParams } from '@/api/model/baseModel'
import {ArchiveModel, PostDetailModel, PostListModel} from "@/api/model/postModel";

export const postAllApi = async (params: BasicPageParams = {}):Promise<PostListModel> =>
    await http.get('/post', {
      params
    })
export const PostDetail = async (id:number):Promise<PostDetailModel> =>
    await http.get(`/post/${id}`, )
export const archiveApi = async ():Promise<ArchiveModel> =>
    await http.get(`/post/archive`, )



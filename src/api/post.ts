// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

import http from '@/utils/http/axios'
// import { statusEnum } from '@/api/model/postModel'
import { BasicPageParams } from '@/api/model/baseModel'

export const postAllApi = async (params: BasicPageParams = {}) =>
    await http.get('/api/post', {
      params
    })



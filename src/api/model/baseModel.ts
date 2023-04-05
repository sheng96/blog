export interface BasicPageParams {
  size?: number
  page?: number
}

export interface BasicFetchResult<T> {
  items: T[]
  total: number
}

export interface BaseModel<T> {
  code: number
  data: T
  success: boolean
}

export interface PagesModel<K> {
  data: K[]
  page: number
  pageTotal: number
  total: number
}
export interface PagesBaseModel<T> {
  code: number
  data: PagesModel<T>
  success: boolean
}


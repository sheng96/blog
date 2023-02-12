export interface BasicPageParams {
  size?: number
  page?: number
}

export interface BasicFetchResult<T> {
  items: T[]
  total: number
}

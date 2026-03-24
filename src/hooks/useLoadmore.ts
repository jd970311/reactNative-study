import { useState } from 'react'
import { request } from '@/utils/request'
const useLoadmore = (url: string, key: string, loading: boolean, setData: any) => {
  const [page, setPage] = useState(1)
  const onEndReached = async () => {
    if (loading) return // 防止重复请求
    let newPage = page + 1
    setPage(newPage)
    const res = await request('/articles', {
      method: 'GET',
      params: {
        page: newPage,
        pageSize: 10,
      }
    })
    // setData({
    //   ...data,
    //   articles: [
    //     ...data?.articles,
    //     ...res.data.articles
    //   ]
    // })
    setData((prev: any) => {
      return {
        ...prev,
        [key]: [
          ...prev[key],
          ...res.data[key]
        ]
      }
    })
  }
  return {
    onEndReached,
  }
}
export default useLoadmore
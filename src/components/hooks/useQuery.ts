import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export type QueryObject = { query: string; default?: any }

export type UseQuery = (queries: (string | QueryObject)[]) => any[]

const useQuery: UseQuery = (queries) => {
  const { search } = useLocation()

  return useMemo(() => {
    const query = new URLSearchParams(search)
    return queries?.map((i: string | QueryObject) => {
      if (typeof i === 'string') {
        return query.get(i)
      }
      return query.get(i.query) || i.default
    })
  }, [search, queries])
}

export default useQuery
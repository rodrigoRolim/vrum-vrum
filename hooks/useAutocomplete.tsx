import { useEffect, useState } from "react";

export type AutocompleteFetcher<T> = (query: string) => Promise<T[]>
interface Params<T> {
  query: string;
  fetcher: AutocompleteFetcher<T>;
  minLength: number;
  delay: number;
}
export default function useAutocomplete<T>({
  query,
  fetcher,
  minLength = 3,
  delay = 400
}: Params<T>) {
  const [options, setOptions] = useState<T[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (query.length < minLength) {
      setOptions([])
      return
    }

    setLoading(true)

    const timeout = setTimeout(async () => {
      try {
        const data = await fetcher(query)
        setOptions(data)
      } finally {
        setLoading(false)
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [query, fetcher, delay])

  return { options, loading }
}
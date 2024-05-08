'use client'
import { useQuery } from "@tanstack/react-query";

const fetcherFunc = async (url: string) => {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const ClientComponent = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['x'],
    queryFn: async () => await fetcherFunc('https://jsonplaceholder.typicode.com/comments')
  });

  if (isLoading) return <p>loading client</p>
  if (isError) return <p>error</p>

  return (
    <div>
      {
        data?.map((d: any) => (
          <p key={d.id}>{d.body}</p>
        ))
      }
    </div>
  )
}

export default ClientComponent;
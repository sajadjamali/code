'use client'
import Image, { ImageLoaderProps } from 'next/image';
// const api_key = "a9a8b69054a2ff955dc152216931af1a"
// const baseUrl = "https://api.themoviedb.org/3";
// const imgBaseUrl = "https://image.tmdb.org/t/p/w500";

// const fetcherFunc = async (url: string) => {
//   try {
//     const res = await fetch(url)
//     if (!res.ok) {
//       throw new Error('Failed to fetch data')
//     }
//     return res.json()
//   } catch (error) {
//     console.log(error)
//   }
// }

const imageLoader = () => {
  return 'https://image.tmdb.org/t/p/w500/xJHokMbljvjADYdit5fK5VQsXEG.jpg'
}

// async function getMovie(id: string) {
//   const movie = await fetcherFunc(`${baseUrl}/movie/${id}?append_to_response=videos,credits&api_key=${api_key}`);
//   return movie
// }

const Page = () => {

  // const movie = await getMovie('157336');

  return (
    <>
    {/* <Image unoptimized src='https://image.tmdb.org/t/p/w500/xJHokMbljvjADYdit5fK5VQsXEG.jpg' width={500} height={200} alt='not found' /> */}
      {/* <Image loader={imageLoader} src='ppppppp' width={500} height={200} alt='not found' /> */}
      <img src="https://image.tmdb.org/t/p/w500/xJHokMbljvjADYdit5fK5VQsXEG.jpg" alt="" />
    </>
  )

};

export default Page;
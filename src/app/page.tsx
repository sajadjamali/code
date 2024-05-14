import Image from 'next/image';
const api_key = "a9a8b69054a2ff955dc152216931af1a"
const baseUrl = "https://api.themoviedb.org/3";
const imgBaseUrl = "https://image.tmdb.org/t/p/w500";

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

export async function getMovie(id: string) {
  const movie = await fetcherFunc(`${baseUrl}/movie/${id}?append_to_response=videos,credits&api_key=${api_key}`);
  return movie
}

const Page = async () => {

  const movie = await getMovie('157336');

  // console.log(movie)

  return (
    
    // <div className='a b c'><p className='ds'>guououououoisd</p></div>
    <Image src='https://image.tmdb.org/t/p/w500/xJHokMbljvjADYdit5fK5VQsXEG.jpg' width={200} height={200} alt='not found' />
    // <Image src='https://www.pexels.com/photo/blue-and-purple-cosmic-sky-956999/' width={200} height={200} alt='not found' />

    // <>
    //   <div style={{ width: '200px', height: '100px' }} className='bg-red-700'>salam</div>
    //   <div>
    //     <div style={{ width: '200px', height: '100px', position: 'relative', bottom: '40px' }} className='bg-blue-700'>salam</div>
    //   </div>
    // </>

    // <section className="mt-6 gap-10 grid min-[400px]:grid-cols-2 min-[650px]:grid-cols-3 min-[1050px]:grid-cols-4 min-[1450px]:grid-cols-5 min-[1700px]:grid-cols-6">
    //   {
    //     movies.results.map((movie: any, index: number) => (
    //       <div key={index}>
    //         <div className='relative w-64 h-96 overflow-hidden'>
    //           <Image
    //             fill
    //             className='w-auto'
    //             alt={movie.title}
    //             // width={250}
    //             // height={250}
    //             src={`${imgBaseUrl}${movie.poster_path}`}
    //             unoptimized
    //           />
    //         </div>
    //         <p key={index}>{movie.original_title}</p>
    //       </div>
    //     ))
    //   }
    // </section>
  )

};

export default Page;
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

async function getMovies(categorie: string, page: number) {
  const movies = await fetcherFunc(`${baseUrl}/movie/${categorie}?page=${page}&api_key=${api_key}`)
  return movies
}

const Page = async () => {

  const movies = await getMovies('top_rated', 3);

  return (

    <section className="mt-6 grid min-[400px]:grid-cols-2 min-[650px]:grid-cols-3 min-[1050px]:grid-cols-4 min-[1450px]:grid-cols-5 min-[1700px]:grid-cols-6">
      {
        movies.results.map((movie: any, index: number) => (
          <div key={index}>
            <div className='relative w-72 h-96 overflow-hidden'>
              <Image
                fill
                className='w-auto'
                alt={movie.title}
                // width={250}
                // height={250}
                src={`${imgBaseUrl}${movie.poster_path}`}
                unoptimized
              />
              {/* <p key={index}>{movie.original_title}</p> */}
            </div>
            <p key={index}>{movie.original_title}</p>
          </div>
        ))
      }
      {/* <Image src='/img.png' width={200} height={200} alt='not found' /> */}
    </section>
  )

};

export default Page;
import Image from 'next/image';

const Page = () => {
  return (
    <Image
      // unoptimized
      src='https://image.tmdb.org/t/p/w500/xJHokMbljvjADYdit5fK5VQsXEG.jpg'
      width={200}
      height={200}
      alt='not found' />
  )

};

export default Page;
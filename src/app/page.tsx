const Page = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api`, { cache: 'no-store' })
  const response = await res.json();

  return (
    <>
      <div>{response.message}</div>
    </>
  )
};

export default Page;
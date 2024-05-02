
const Page = async () => {

  const res = await fetch('http://localhost:3000/api', { cache: 'no-store' })
  const response = await res.json();

  return (
    <>
    <p>Test</p>
      <div>{response.message}</div>
    </>
  )
};

export default Page;
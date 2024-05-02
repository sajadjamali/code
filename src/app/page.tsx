
const Page = async () => {

  const res = await fetch('https://code-psi-five.vercel.app/api')
  const response = await res.json();

  return (
    <>
      <p>Test</p>
      <div>{response.message}</div>
    </>
  )
};

export default Page;
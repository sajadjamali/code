// 'use client'
// import { useState } from 'react'
import ClientComponent from "@/components/ClientComponent";
import { Suspense } from "react";
import ServerComponent from "@/components/ServerComponent";

const getData = async (url: string) => {
  try {
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}


const Home = async () => {

  // const [x, setX] = useState(true)

  const a = await getData('https://jsonplaceholder.typicode.com/posts');
  const b = await getData('https://jsonplaceholder.typicode.com/comments');
  const c = await getData('https://jsonplaceholder.typicode.com/users');
  const d = await getData('https://jsonplaceholder.typicode.com/albums');
  const e = await getData('https://jsonplaceholder.typicode.com/photos');

  console.log('11111111111111111')

  return (
    <>

      {/* <Suspense fallback={<p>Loadinggggggggggg</p>}>
        <ClientComponent />
      </Suspense>
      <Suspense fallback={<p>Loading posts...</p>}>
        <ServerComponent url='https://jsonplaceholder.typicode.com/posts' />
      </Suspense>
      <Suspense fallback={<p>Loading comments...</p>}>
        <ServerComponent url='https://jsonplaceholder.typicode.com/comments' />
      </Suspense>
      <Suspense fallback={<p>Loading users...</p>}>
        <ServerComponent url='https://jsonplaceholder.typicode.com/users' />
      </Suspense>
      <Suspense fallback={<p>Loading albums...</p>}>
        <ServerComponent url='https://jsonplaceholder.typicode.com/albums' />
      </Suspense>
      <Suspense fallback={<p>Loading photos...</p>}>
        <ServerComponent url='https://jsonplaceholder.typicode.com/photos' />
      </Suspense> */}

      {/* <ClientComponent />
      <ServerComponent url='https://jsonplaceholder.typicode.com/posts' />
      <ServerComponent url='https://jsonplaceholder.typicode.com/comments' />
      <ServerComponent url='https://jsonplaceholder.typicode.com/users' />
      <ServerComponent url='https://jsonplaceholder.typicode.com/albums' />
      <ServerComponent url='https://jsonplaceholder.typicode.com/photos' /> */}


      <Suspense fallback={<p>Loadinggggggggggg</p>}>
        <ClientComponent />
      </Suspense>
      <Suspense fallback={<p>Loading posts...</p>}>
        <ServerComponent url='https://jsonplaceholder.typicode.com/posts' data={a} />
      </Suspense>
      <Suspense fallback={<p>Loading comments...</p>}>
        <ServerComponent url='https://jsonplaceholder.typicode.com/comments' data={b} />
      </Suspense>
      <Suspense fallback={<p>Loading users...</p>}>
        <ServerComponent url='https://jsonplaceholder.typicode.com/users' data={c} />
      </Suspense>
      <Suspense fallback={<p>Loading albums...</p>}>
        <ServerComponent url='https://jsonplaceholder.typicode.com/albums' data={d} />
      </Suspense>
      <Suspense fallback={<p>Loading photos...</p>}>
        <ServerComponent url='https://jsonplaceholder.typicode.com/photos' data={e} />
      </Suspense>



      <ClientComponent />
      <ServerComponent url='https://jsonplaceholder.typicode.com/posts' data={a} />
      <ServerComponent url='https://jsonplaceholder.typicode.com/comments' data={b} />
      <ServerComponent url='https://jsonplaceholder.typicode.com/users' data={c} />
      <ServerComponent url='https://jsonplaceholder.typicode.com/albums' data={d} />
      <ServerComponent url='https://jsonplaceholder.typicode.com/photos' data={e} />





      {/* {
        x &&
        <>
          <ClientComponent />
          <ClientComponent />
          <ClientComponent />
        </>
      }
      <button onClick={() => setX(!x)}>click</button> */}
    </>
  );
}

export default Home;

import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SSG and SSR App</title>
        <meta name="description" content="application by next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='text-ellipsis'>
          My Blog
        </h1>
      </main>
    </>
  )
}

export default Home

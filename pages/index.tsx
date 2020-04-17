import Head from 'next/head'
import dynamic from 'next/dynamic'

const CloudKitWithNoSSR = dynamic(() => import('../components/CloudKit'), {
  ssr: false,
})

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      {/* <script src="https://cdn.apple-cloudkit.com/ck/2/cloudkit.js"></script> */}
      <script src="/cloudkit.js"></script>
    </Head>

    <CloudKitWithNoSSR />
  </div>
)

export default Home

import Head from 'next/head'

// import custom component 
import Header from '../components/header'

export default function About() {
  return (
    <>
      <Head>
        <title>Judul Halaman</title>
      </Head>

      <div className="container mx-auto p-4">  
        <Header />
        <div>
            ini about
        </div>
      </div>
    </>
  )
}

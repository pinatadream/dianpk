import Head from 'next/head'
import Link from 'next/link'

// import custom component
import Header from '../components/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>DPK</title>
      </Head>

      <div className="h-screen flex flex-col container mx-auto p-6">  
        <Header />
        <div className='flex-1 flex items-center -mx-6'>
          <div className='max-w-screen-md mx-auto p-6 bg-teal-600 sm:rounded-md text-warna'>
            <p className='mb-2'>
              &nbsp;&nbsp;&nbsp;&nbsp;Hai!
            </p>
            <p className='mb-2'>
              &nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet lacus vitae odio molestie, vitae rhoncus turpis faucibus. Suspendisse nec mattis est. Curabitur scelerisque lorem sit amet sollicitudin blandit. Morbi sagittis porttitor lectus nec dapibus. Mauris suscipit neque vel dui rhoncus, laoreet euismod ante tristique. Ut consequat diam enim, eget pellentesque augue ornare at. Vestibulum sit amet dictum tellus, a eleifend ipsum. Pellentesque in urna at arcu efficitur accumsan at eu neque.
            </p>
            <Link href="/about">About</Link>
          </div>
        </div>
        <div className='py-8 shrink text-center'>
          Footer
        </div>
      </div>
    </>
  )
}

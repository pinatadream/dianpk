import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div className="text-center py-8">
        <h1 className="text-3xl mb-4 font-bold">Dian Permata</h1>
        <div className="text-lg">
          <Link href="/"><a className="px-2 inline-block">Home</a></Link>
          <Link href="/about"><a className="px-2 inline-block">About</a></Link>
          <Link href="/reflection"><a className="px-2 inline-block">Reflection</a></Link>
        </div>
      </div>
    </>
  )
}

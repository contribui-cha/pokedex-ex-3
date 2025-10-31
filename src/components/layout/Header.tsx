import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
              alt="Pokemon Logo"
              width={87}
              height={87}
            />
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="hover:underline">
              Início
            </Link>
            <Link href="/search" className="hover:underline">
              Buscar
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

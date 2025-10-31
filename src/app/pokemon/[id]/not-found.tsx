import Link from 'next/link'

export default function PokemonNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Pokémon não encontrado</h1>
      <p className="text-gray-600 mb-6">Este Pokémon não existe na nossa Pokédex.</p>
      <Link href="/" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
        Voltar para a Pokédex
      </Link>
    </div>
  )
}

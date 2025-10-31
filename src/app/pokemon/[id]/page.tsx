import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getPokemonById } from '@/lib/pokemon-api'
import { formatPokemonNumber, capitalizeName } from '@/lib/utils'
import TypeBadge from '@/components/ui/TypeBadge'
import { PokemonPageProps } from '@/lib/types'

export async function generateMetadata({ params }: PokemonPageProps): Promise<Metadata> {
  const { id } = await params
  const pokemon = await getPokemonById(id)

  if (!pokemon) {
    return {
      title: 'Pokémon não encontrado',
    }
  }

  return {
    title: `${capitalizeName(pokemon.name)} - Pokédex`,
    description: `Veja detalhes de ${capitalizeName(pokemon.name)}, um Pokémon do tipo ${pokemon.types.join('/')}.`,
  }
}

export default async function PokemonPage({ params }: PokemonPageProps) {
  const { id } = await params
  const pokemon = await getPokemonById(id)

  if (!pokemon) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-block mb-6 text-red-600 hover:underline">
        ← Voltar para a Pokédex
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-2">{formatPokemonNumber(pokemon.id)}</p>
          <h1 className="text-4xl font-bold mb-6">{capitalizeName(pokemon.name)}</h1>

          <div className="relative w-full h-80 mb-6">
            <Image
              src={pokemon.sprite}
              alt={pokemon.name}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Tipos</h2>
            <div className="flex gap-3 justify-center">
              {pokemon.types.map((type) => (
                <TypeBadge key={type} type={type} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

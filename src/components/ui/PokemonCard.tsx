import Link from 'next/link'
import Image from 'next/image'
import { Pokemon } from '@/lib/types'
import { formatPokemonNumber, capitalizeName } from '@/lib/utils'
import TypeBadge from './TypeBadge'

interface PokemonCardProps {
  pokemon: Pokemon
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <div className="bg-white rounded-lg shadow-md border-2 border-red-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-4 cursor-pointer">
        <div className="relative w-full h-48 mb-3">
          <Image
            src={pokemon.sprite}
            alt={pokemon.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <p className="text-gray-500 text-sm mb-1">{formatPokemonNumber(pokemon.id)}</p>
        <h3 className="text-xl font-bold mb-2">{capitalizeName(pokemon.name)}</h3>
        <div className="flex gap-2 flex-wrap">
          {pokemon.types.map((type) => (
            <TypeBadge key={type} type={type} />
          ))}
        </div>
      </div>
    </Link>
  )
}

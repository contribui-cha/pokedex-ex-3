import { Pokemon } from '@/lib/types'
import PokemonCard from './PokemonCard'

interface PokemonGridProps {
  pokemon: Pokemon[]
}

export default function PokemonGrid({ pokemon }: PokemonGridProps) {
  if (pokemon.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Nenhum Pokémon encontrado</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {pokemon.map((p) => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </div>
  )
}

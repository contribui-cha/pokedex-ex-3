'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Pokemon } from '@/lib/types'
import { searchPokemon } from '@/lib/pokemon-api'
import PokemonGrid from '@/components/ui/PokemonGrid'
import { POKEMON_TYPES } from '@/lib/constants'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  const [searchName, setSearchName] = useState(searchParams.get('name') || '')
  const [selectedType, setSelectedType] = useState(searchParams.get('type') || '')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true)
      const name = searchParams.get('name') || undefined
      const type = searchParams.get('type') || undefined

      const results = await searchPokemon(name, type)
      setPokemon(results)
      setLoading(false)
    }

    loadPokemon()
  }, [searchParams])

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (searchName) params.set('name', searchName)
    if (selectedType) params.set('type', selectedType)

    router.push(`/search?${params.toString()}`)
  }

  const handleClearFilters = () => {
    setSearchName('')
    setSelectedType('')
    router.push('/search')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Buscando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Busca Avançada</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium mb-2">
              Buscar por nome
            </label>
            <input
              id="search"
              type="text"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              placeholder="Digite o nome do Pokémon..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium mb-2">
              Filtrar por tipo
            </label>
            <select
              id="type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Todos os tipos</option>
              {POKEMON_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end gap-2">
            <button
              onClick={handleSearch}
              className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Buscar
            </button>
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
            >
              Limpar
            </button>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          Encontrados {pokemon.length} Pokémon
        </div>
      </div>

      <PokemonGrid pokemon={pokemon} />
    </div>
  )
}

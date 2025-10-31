'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Pokemon } from '@/lib/types'
import { getAllPokemon, searchPokemon } from '@/lib/pokemon-api'
import PokemonGrid from '@/components/ui/PokemonGrid'
import { POKEMON_TYPES } from '@/lib/constants'

export default function HomePage() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([])
  const [searchName, setSearchName] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPokemon = async () => {
      const data = await getAllPokemon()
      setPokemon(data)
      setFilteredPokemon(data)
      setLoading(false)
    }

    loadPokemon()
  }, [])

  useEffect(() => {
    const filterPokemon = async () => {
      const results = await searchPokemon(
        searchName || undefined,
        selectedType || undefined
      )
      setFilteredPokemon(results)
    }

    filterPokemon()
  }, [searchName, selectedType])

  const handleClearFilters = () => {
    setSearchName('')
    setSelectedType('')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando Pokémon...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center gap-4 mb-8">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="Pokemon Logo"
          width={180}
          height={180}
        />
      </div>

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

          <div className="flex items-end">
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
            >
              Limpar
            </button>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          Mostrando {filteredPokemon.length} de {pokemon.length} Pokémon
        </div>
      </div>

      <PokemonGrid pokemon={filteredPokemon} />
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { Pokemon, UsePokemonReturn } from '@/lib/types'
import { getPokemonById } from '@/lib/pokemon-api'

export function usePokemonDetail(id: string): UsePokemonReturn<Pokemon> {
  const [data, setData] = useState<Pokemon | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true)
        const pokemon = await getPokemonById(id)

        if (!pokemon) {
          throw new Error('Pokemon not found')
        }

        setData(pokemon)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [id])

  return { data, loading, error }
}

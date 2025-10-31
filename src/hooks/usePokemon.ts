'use client'

import { useState, useEffect } from 'react'
import { UsePokemonReturn } from '@/lib/types'

export function usePokemon<T = any>(url?: string): UsePokemonReturn<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!url) {
      setLoading(false)
      return
    }

    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        const result = await response.json()
        setData(result)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}

import { Pokemon } from './types'
import pokemonData from '../../public/data/first-gen-pokemon.json'

export async function getAllPokemon(): Promise<Pokemon[]> {
  return pokemonData as Pokemon[]
}

export async function getPokemonById(id: string): Promise<Pokemon | null> {
  const allPokemon = await getAllPokemon()
  const pokemon = allPokemon.find(p => p.id === parseInt(id))
  return pokemon || null
}

export async function searchPokemon(name?: string, type?: string): Promise<Pokemon[]> {
  let results = await getAllPokemon()

  if (name) {
    results = results.filter(p =>
      p.name.toLowerCase().includes(name.toLowerCase())
    )
  }

  if (type) {
    results = results.filter(p =>
      p.types.some(t => t.toLowerCase() === type.toLowerCase())
    )
  }

  return results
}

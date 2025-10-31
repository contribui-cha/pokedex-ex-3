export function formatPokemonNumber(id: number): string {
  return `#${id.toString().padStart(3, '0')}`
}

export function capitalizeName(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export function getPokemonImageUrl(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}

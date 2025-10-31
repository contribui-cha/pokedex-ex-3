export interface Pokemon {
  id: number
  name: string
  types: string[]
  sprite: string
}

export interface GenericCardProps<T> {
  data: T
  renderContent: (item: T) => React.ReactNode
  onClick?: (item: T) => void
}

export interface PokemonCardProps extends React.ComponentProps<'div'> {
  pokemon: Pokemon
}

export interface PokemonPageProps {
  params: Promise<{ id: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export interface SearchPageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export interface UsePokemonReturn<T> {
  data: T | null
  loading: boolean
  error: string | null
}

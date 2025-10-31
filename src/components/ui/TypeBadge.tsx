import { TYPE_COLORS } from '@/lib/constants'

interface TypeBadgeProps {
  type: string
}

export default function TypeBadge({ type }: TypeBadgeProps) {
  const backgroundColor = TYPE_COLORS[type.toLowerCase()] || '#777'

  return (
    <span
      style={{ backgroundColor }}
      className="px-3 py-1 rounded-full text-white text-sm font-medium capitalize"
    >
      {type}
    </span>
  )
}

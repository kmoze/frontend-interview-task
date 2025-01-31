import { ICONS } from '@/constants/icons'
import { Icons } from '@/types/icons'
import React, { CSSProperties } from 'react'

type Props = {
  icon: Icons
  width?: number | string
  height?: number | string
  style?: CSSProperties
}

const Icon = ({ icon, width = 20, height = 20, style }: Props) => {
  const Component = ICONS[icon]
  return (
    <Component
      width={width}
      height={height}
      data-testid={`icon-${icon}`}
      strokeWidth={1.5}
      style={style}
    />
  )
}

export default Icon

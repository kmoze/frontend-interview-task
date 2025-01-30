import React from 'react'
import { colourOptions } from '@/constants/colourOptions'

type ColourPickerProps = {
  colours: { [key: string]: string } // Object of color names and hex codes
  selectedColour: string // Currently selected color (hex code)
  onColorSelect: (colour: string) => void // Callback when a color is selected
}

const ColourPicker = (): ColourPickerProps => {
  return <div>ColourPicker</div>
}

export default ColourPicker

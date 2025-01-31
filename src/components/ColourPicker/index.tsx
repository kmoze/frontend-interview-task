import React from 'react'
import { ColourOption } from '@/types/colourTypes'

type ColourPickerProps = {
  colours: { [key: string]: ColourOption }
  selectedColour: ColourOption
  onColourSelect: (colour: ColourOption) => void
}

const ColourPicker = ({
  colours,
  selectedColour,
  onColourSelect,
}: ColourPickerProps) => {
  return (
    <div className="fixed bottom-6 right-6 flex gap-2 z-10">
      {Object.entries(colours).map(([name, colour]) => (
        <button
          key={name}
          onClick={() => onColourSelect(colour)}
          className={`w-8 h-8 rounded-full border-2 ${
            selectedColour === colour ? 'border-black' : 'border-gray-100'
          } hover:scale-110 transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:border-gray-500
          duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
          style={{ backgroundColor: colour }}
          aria-label={`Select ${name} theme`}
        />
      ))}
    </div>
  )
}

export default ColourPicker

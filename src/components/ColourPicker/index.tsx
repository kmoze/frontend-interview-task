import React, { useState } from 'react'
import { ColourOption } from '@/types/colourTypes'
import { Palette } from 'lucide-react'

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
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="fixed bottom-6 right-6 flex items-end gap-2 z-10">
      <div
        className={`flex gap-2 transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {Object.entries(colours).map(([name, colour]) => (
          <button
            key={name}
            onClick={() => {
              onColourSelect(colour)
              setIsOpen(false)
            }}
            className={`w-8 h-8 rounded-full border-2 ${
              selectedColour === colour ? 'border-black' : 'border-gray-100'
            } hover:scale-110 transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:border-gray-500
          duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
            style={{ backgroundColor: colour }}
            aria-label={`Select ${name} theme`}
          />
        ))}
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-full bg-white shadow-lg transition-all duration-200
        ${isOpen ? 'bg-gray-100' : ''}`}
        aria-label="Toggle colour picker"
      >
        <Palette
          size={24}
          className={`transition-transform duration-300 text-[${selectedColour}] ${isOpen ? 'rotate-90' : ''}`}
        />
      </button>
    </div>
  )
}

export default ColourPicker

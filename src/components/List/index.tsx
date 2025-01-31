import React, { useEffect, useState } from 'react'
import { Allowance } from '@/types/allowances'
import { Inter } from 'next/font/google'
import Card from '@/components/Card'
import { COLOUR_OPTIONS } from '@/constants/colourOptions'
import { ColourOption } from '@/types/colourTypes'
import ColourPicker from '@/components/ColourPicker'

const inter = Inter({ subsets: ['latin'] })

const List = () => {
  const [allowances, setAllowances] = useState<Allowance[]>([])
  const [selectedColour, setSelectedColour] = useState<ColourOption>(
    COLOUR_OPTIONS.defaultGreen
  )

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/allowances')
      const { result } = await response.json()
      setAllowances(result)
    }

    fetchData()
  }, [])

  return (
    <div className={`${inter.className}`}>
      <ColourPicker
        colours={COLOUR_OPTIONS}
        selectedColour={selectedColour}
        onColourSelect={(colour) => setSelectedColour(colour)}
      />
      <h2 className="text-2xl px-6 pt-6 font-semibold text-[#163B3B]">
        Allowances
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {allowances.map((allowance) => (
          <Card
            key={allowance.id}
            allowance={allowance}
            colour={selectedColour}
          />
        ))}
      </div>
    </div>
  )
}

export default List

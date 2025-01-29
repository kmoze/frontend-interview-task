import React, { useEffect, useState } from 'react'
import { Allowance } from '@/types/allowances'
import { Inter } from 'next/font/google'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

const List = () => {
  const [allowances, setAllowances] = useState<Allowance[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/allowances')
      const { result } = await response.json()
      setAllowances(result)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2
        className={`${inter.className} text-2xl px-6 pt-6 font-semibold text-[#163B3B]`}
      >
        Allowances
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {allowances.map((allowance) => (
          <Card key={allowance.id} allowance={allowance} />
        ))}
      </div>
    </div>
  )
}

export default List

import React, { useEffect, useState } from 'react'
import { Allowance } from '@/types/allowances'
import { Inter } from 'next/font/google'

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
        className={`${inter.className} text-2xl p-6 font-semibold text-[#163B3B]`}
      >
        Allowances
      </h2>
      <div>
        {allowances.map((allowance) => (
          <div key={allowance.id}>{JSON.stringify(allowance)}</div>
        ))}
      </div>
    </div>
  )
}

export default List

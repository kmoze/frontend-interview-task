import React from 'react'
import { Allowance } from '@/types/allowances'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type CardProps = {
  allowance: Allowance
}

const Card = ({ allowance }: CardProps) => {
  const spentPercentage =
    (parseFloat(allowance.spent) / parseFloat(allowance.amount)) * 100

  return (
    <div className="bg-white rounded-lg p-6 border border-[#DDDDDD] shadow-sm">
      <div className="mb-4 space-y-1.5">
        <h3
          className={`${inter.className} text-base font-medium text-[#232323]`}
        >
          {allowance.name}
        </h3>
        <p className={`${inter.className} text-sm text-[#797979] font-normal`}>
          {allowance.type === 'card' ? 'Spend Card' : 'Expense'}
        </p>
      </div>

      {allowance.active ? (
        <div className="space-y-[-0.25rem]">
          <div className="flex justify-between mb-2">
            <span
              className={`${inter.className} text-[#232323] text-sm font-medium`}
            >
              {Math.round(spentPercentage)}% utilised
            </span>
            <span className={`${inter.className} text-[#9A9A9A] text-sm`}>
              {allowance.currency}
              {allowance.amount} /{' '}
              {allowance.renewal.charAt(0).toUpperCase() +
                allowance.renewal.slice(1)}
            </span>
          </div>
          <div className="w-full h-1 bg-[#DDDDDD] rounded-full">
            <div
              className="h-full bg-[#64D98A] rounded-full"
              style={{ width: `${spentPercentage}%` }}
            />
          </div>
        </div>
      ) : (
        <button className={`${inter.className} text-[#569F6E] font-medium`}>
          Activate card
        </button>
      )}
    </div>
  )
}

export default Card

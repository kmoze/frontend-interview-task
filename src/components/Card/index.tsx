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
    <div
      className="group bg-white rounded-lg p-6 border border-[#DDDDDD] shadow-sm min-h-[185px] flex flex-col justify-between
             hover:shadow-md hover:scale-105 transition-transform duration-300"
      data-testid="allowance-card"
    >
      <div className="space-y-1.5">
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
              data-testid="progress-bar"
            />
          </div>
        </div>
      ) : (
        <div className="-mx-6 -mb-6">
          <div className="bg-[#FAFAFA] p-4 rounded-b-lg">
            <button
              className={`${inter.className} text-[#569F6E] text-sm relative`}
            >
              Activate card
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#569F6E] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card

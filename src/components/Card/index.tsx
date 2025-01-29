import React from 'react'
import { Allowance } from '@/types/allowances'

type CardProps = {
  allowance: Allowance
}

const Card = ({ allowance }: CardProps) => {
  const spentPercentage =
    (parseFloat(allowance.spent) / parseFloat(allowance.amount)) * 100

  return (
    <div className="bg-white rounded-lg p-6 border border-[#DDDDDD] shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-[#232323]">{allowance.name}</h3>
        <p className="text-[#797979] font-normal">
          {allowance.type === 'card' ? 'Spend Card' : 'Expense'}
        </p>
      </div>

      {allowance.active ? (
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-[#232323]">
              {Math.round(spentPercentage)}% utilised
            </span>
            <span className="text-[#9A9A9A]">
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
        <button className="text-[#569F6E] font-medium">Activate card</button>
      )}
    </div>
  )
}

export default Card

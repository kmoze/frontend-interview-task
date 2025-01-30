import React from 'react'
import { Allowance } from '@/types/allowances'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type CardProps = {
  allowance: Allowance
}

const COLOURS = {
  cardBg: 'bg-white',
  primaryText: 'text-[#232323]',
  secondaryText: 'text-[#797979]',
  amountText: 'text-[#9A9A9A]',
  border: 'border-[#DDDDDD]',
  progressBarFill: 'bg-[#DDDDDD]',
  progressBar: 'bg-[#64D98A]',
  activateBg: 'bg-[#FAFAFA]',
  activateText: 'text-[#569F6E]',
  activeHover: 'bg-[#569F6E]',
}

const Card = ({ allowance }: CardProps) => {
  const spentPercentage =
    (parseFloat(allowance.spent) / parseFloat(allowance.amount)) * 100

  return (
    <div
      className={`${inter.className} group ${COLOURS.cardBg} rounded-lg p-6 border ${COLOURS.border} shadow-sm min-h-[185px] flex flex-col justify-between
             hover:shadow-md hover:scale-105 transition-transform duration-300`}
      data-testid="allowance-card"
    >
      <div className="space-y-1.5">
        <h3 className={`text-base font-medium ${COLOURS.primaryText}`}>
          {allowance.name}
        </h3>
        <p className={`text-sm ${COLOURS.secondaryText} font-normal`}>
          {allowance.type === 'card' ? 'Spend Card' : 'Expense'}
        </p>
      </div>

      {allowance.active ? (
        <div className="space-y-[-0.25rem]">
          <div className="flex justify-between mb-2">
            <span className={`${COLOURS.primaryText} text-sm font-medium`}>
              {Math.round(spentPercentage)}% utilised
            </span>
            <span className={`${COLOURS.amountText} text-sm`}>
              {allowance.currency}
              {allowance.amount} /{' '}
              {allowance.renewal.charAt(0).toUpperCase() +
                allowance.renewal.slice(1)}
            </span>
          </div>
          <div className={`${COLOURS.progressBarFill} w-full h-1 rounded-full`}>
            <div
              className={`${COLOURS.progressBar} h-full rounded-full`}
              style={{ width: `${spentPercentage}%` }}
              data-testid="progress-bar"
            />
          </div>
        </div>
      ) : (
        <div className="-mx-6 -mb-6">
          <div className={`${COLOURS.activateBg} p-4 rounded-b-lg`}>
            <button className={`${COLOURS.activateText} text-sm relative`}>
              Activate card
              <span
                className={`${COLOURS.activeHover} absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full`}
              ></span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card

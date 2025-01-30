import React from 'react'
import { Allowance } from '@/types/allowances'

type CardProps = {
  allowance: Allowance
  colour?: string
}

const CARD_COLOURS = {
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

const Card = ({ allowance, colour }: CardProps) => {
  const spentPercentage =
    (parseFloat(allowance.spent) / parseFloat(allowance.amount)) * 100

  const progressBarColour = colour ? `bg-[${colour}]` : CARD_COLOURS.progressBar

  const LIGHT_COLOURS = ['#FFEDA8', '#F0E7DA'] // Alpine Oat & Butter Yellow
  const DARK_ACTIVATE_TEXT_COLOUR = 'text-[#163B3B]' // Darker alternative

  const activateTextColour =
    colour && LIGHT_COLOURS.includes(colour)
      ? DARK_ACTIVATE_TEXT_COLOUR
      : `text-[${colour}]`

  const activeHoverColour = colour ? `bg-[${colour}]` : CARD_COLOURS.activeHover

  return (
    <div
      className={`group ${CARD_COLOURS.cardBg} rounded-lg p-6 border ${CARD_COLOURS.border} shadow-sm min-h-[185px] flex flex-col justify-between
             hover:shadow-md hover:scale-105 transition-transform duration-300`}
      data-testid="allowance-card"
    >
      <div className="space-y-1.5">
        <h3 className={`text-base font-medium ${CARD_COLOURS.primaryText}`}>
          {allowance.name}
        </h3>
        <p className={`text-sm ${CARD_COLOURS.secondaryText} font-normal`}>
          {allowance.type === 'card' ? 'Spend Card' : 'Expense'}
        </p>
      </div>

      {allowance.active ? (
        <div className="space-y-[-0.25rem]">
          <div className="flex justify-between mb-2">
            <span className={`${CARD_COLOURS.primaryText} text-sm font-medium`}>
              {Math.round(spentPercentage)}% utilised
            </span>
            <span className={`${CARD_COLOURS.amountText} text-sm capitalize`}>
              {allowance.currency}
              {allowance.amount} / {allowance.renewal}
            </span>
          </div>
          <div
            className={`${CARD_COLOURS.progressBarFill} w-full h-1 rounded-full`}
          >
            <div
              className={`${progressBarColour} h-full rounded-full`}
              style={{ width: `${spentPercentage}%` }}
              data-testid="progress-bar"
            />
          </div>
        </div>
      ) : (
        <div className="-mx-6 -mb-6">
          <div className={`${CARD_COLOURS.activateBg} p-4 rounded-b-lg`}>
            <button className={`${activateTextColour} text-sm relative`}>
              Activate card
              <span
                className={`${activeHoverColour} absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full`}
              ></span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card

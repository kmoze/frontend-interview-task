import { render } from '@testing-library/react'
import Card from '@/components/Card'
import '@testing-library/jest-dom'
import { Allowance } from '@/types/allowances'

// Mock data for testing
const mockAllowanceActive: Allowance = {
  id: 1,
  name: 'Lunch',
  renewal: 'month',
  currency: '£',
  amount: '100',
  spent: '50',
  active: true,
  type: 'card',
}

const mockAllowanceInactive: Allowance = {
  id: 2,
  name: 'Team Day',
  renewal: 'year',
  currency: '£',
  amount: '200',
  spent: '0',
  active: false,
  type: 'card',
}

describe('Card Component', () => {
  it('renders correctly for active allowances', () => {
    const { getByText, getByTestId } = render(
      <Card allowance={mockAllowanceActive} />
    )

    expect(getByText('Lunch')).toBeInTheDocument()
    expect(getByText('Spend Card')).toBeInTheDocument()
    expect(getByText('50% utilised')).toBeInTheDocument()
    expect(getByText('£100 / month')).toBeInTheDocument()

    const progressBar = getByTestId('progress-bar')
    expect(progressBar).toBeInTheDocument()

    expect(progressBar).toHaveStyle('width: 50%')
  })

  it('renders correctly for inactive allowances', () => {
    const { getByText, queryByTestId } = render(
      <Card allowance={mockAllowanceInactive} />
    )

    expect(getByText('Team Day')).toBeInTheDocument()
    expect(getByText('Spend Card')).toBeInTheDocument()
    expect(getByText('Activate card')).toBeInTheDocument()
    expect(queryByTestId('progress-bar')).not.toBeInTheDocument()
  })

  it('renders utilisation bar width correctly', () => {
    const { getByTestId } = render(<Card allowance={mockAllowanceActive} />)

    const progressBar = getByTestId('progress-bar')
    expect(progressBar).toHaveStyle('width: 50%')
  })

  it('renders with a snapshot', () => {
    const { container } = render(<Card allowance={mockAllowanceActive} />)
    expect(container).toMatchSnapshot()
  })
})

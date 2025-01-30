import { render } from '@testing-library/react'
import Card from '@/components/Card'
import '@testing-library/jest-dom'
import { Allowance } from '@/types/allowances'

// Mock data for testing
const mockAllowanceActive: Allowance = {
  id: 1,
  name: 'Lunch',
  renewal: 'month', // Matches the literal type
  currency: '£',
  amount: '100',
  spent: '50',
  active: true,
  type: 'card',
}

const mockAllowanceInactive: Allowance = {
  id: 2,
  name: 'Team Day',
  renewal: 'year', // Matches the literal type
  currency: '£',
  amount: '200',
  spent: '0',
  active: false,
  type: 'card',
}

describe('Card Component', () => {
  it('renders correctly for active allowances', () => {
    const { getByText, getByTestId, container } = render(
      <Card allowance={mockAllowanceActive} />
    )

    // Check that the card name is displayed
    expect(getByText('Lunch')).toBeInTheDocument()

    // Check that the type (Spend Card) is displayed
    expect(getByText('Spend Card')).toBeInTheDocument()

    // Check the utilisation percentage is displayed
    expect(getByText('50% utilised')).toBeInTheDocument()

    // Check the currency, amount, and renewal period
    expect(getByText('£100 / Month')).toBeInTheDocument()

    // Check that the progress bar exists
    expect(container.querySelector('.bg-[#64D98A]')).toBeInTheDocument()
  })

  it('renders correctly for inactive allowances', () => {
    const { getByText, container } = render(
      <Card allowance={mockAllowanceInactive} />
    )

    // Check that the card name is displayed
    expect(getByText('Team Day')).toBeInTheDocument()

    // Check that the type (Spend Card) is displayed
    expect(getByText('Spend Card')).toBeInTheDocument()

    // Check that the "Activate card" button is displayed
    expect(getByText('Activate card')).toBeInTheDocument()

    // Check that the utilisation progress bar does not exist
    expect(container.querySelector('.bg-[#64D98A]')).not.toBeInTheDocument()
  })

  it('renders utilisation bar width correctly', () => {
    const { getByTestId } = render(<Card allowance={mockAllowanceActive} />)

    // Verify that the utilisation bar has the correct width (50% for this test)
    const progressBar = getByTestId('progress-bar')
    expect(progressBar).toHaveStyle('width: 50%')
  })

  it('renders with a snapshot', () => {
    const { container } = render(<Card allowance={mockAllowanceActive} />)
    expect(container).toMatchSnapshot()
  })
})

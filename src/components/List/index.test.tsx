import { render, waitFor, screen } from '@testing-library/react'
import List from '@/components/List'
import '@testing-library/jest-dom'
import 'jest-fetch-mock'
import data from '@/data/data.json'

describe('List', () => {
  beforeEach(() => {
    fetchMock.mockResponse(JSON.stringify({ result: data }), { status: 200 })
  })

  it('renders allowances after fetching data', async () => {
    render(<List />)

    // Wait for at least one card to appear
    await waitFor(() => {
      expect(screen.getByText(data[0].name)).toBeInTheDocument()
    })

    // Check that the correct number of cards is rendered
    expect(screen.getAllByTestId('allowance-card').length).toBe(data.length)

    // Ensure some known allowances are present
    expect(screen.getByText('Learning & Development')).toBeInTheDocument()
    expect(screen.getByText('Wellbeing')).toBeInTheDocument()
    expect(screen.getByText('WFH')).toBeInTheDocument()
  })

  it('matches snapshot after data loads', async () => {
    const { container } = render(<List />)

    // Wait until the allowances are populated
    await waitFor(() => {
      expect(screen.getByText(data[0].name)).toBeInTheDocument()
    })

    expect(container).toMatchSnapshot()
  })
})

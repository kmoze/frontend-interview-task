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

    await waitFor(() => {
      expect(screen.getByText(data[0].name)).toBeInTheDocument()
    })

    expect(screen.getAllByTestId('allowance-card').length).toBe(data.length)
    expect(screen.getByText('Learning & Development')).toBeInTheDocument()
    expect(screen.getByText('Wellbeing')).toBeInTheDocument()
    expect(screen.getByText('WFH')).toBeInTheDocument()
  })

  it('renders the ColourPicker', async () => {
    render(<List />)

    await waitFor(() => {
      expect(screen.getByText(data[0].name)).toBeInTheDocument()
    })

    const paletteIcon = screen.getByLabelText('Toggle colour picker')
    expect(paletteIcon).toBeInTheDocument()
  })

  it('matches snapshot after data loads', async () => {
    const { container } = render(<List />)

    await waitFor(() => {
      expect(screen.getByText(data[0].name)).toBeInTheDocument()
    })

    expect(container).toMatchSnapshot()
  })
})

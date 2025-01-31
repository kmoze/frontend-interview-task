import { render, fireEvent } from '@testing-library/react'
import ColourPicker from '@/components/ColourPicker'
import '@testing-library/jest-dom'

describe('ColourPicker Component', () => {
  const mockColours = {
    Red: '#ff0000',
    Green: '#00ff00',
    Blue: '#0000ff',
  }

  const mockOnColourSelect = jest.fn()

  it('renders all colour buttons', () => {
    const { getByLabelText } = render(
      <ColourPicker
        colours={mockColours}
        selectedColour=""
        onColourSelect={mockOnColourSelect}
      />
    )

    expect(getByLabelText('Select Red theme')).toBeInTheDocument()
    expect(getByLabelText('Select Green theme')).toBeInTheDocument()
    expect(getByLabelText('Select Blue theme')).toBeInTheDocument()
  })

  it('applies correct border styling for the selected colour', () => {
    const { getByLabelText } = render(
      <ColourPicker
        colours={mockColours}
        selectedColour="#00ff00"
        onColourSelect={mockOnColourSelect}
      />
    )

    const selectedButton = getByLabelText('Select Green theme')
    expect(selectedButton).toHaveClass('border-black')

    const otherButton = getByLabelText('Select Red theme')
    expect(otherButton).toHaveClass('border-gray-100')
  })

  it('calls onColourSelect with correct colour when clicked', () => {
    const { getByLabelText } = render(
      <ColourPicker
        colours={mockColours}
        selectedColour=""
        onColourSelect={mockOnColourSelect}
      />
    )

    const redButton = getByLabelText('Select Red theme')
    fireEvent.click(redButton)

    expect(mockOnColourSelect).toHaveBeenCalledTimes(1)
    expect(mockOnColourSelect).toHaveBeenCalledWith('#ff0000')
  })

  it('renders with a snapshot', () => {
    const { container } = render(
      <ColourPicker
        colours={mockColours}
        selectedColour=""
        onColourSelect={mockOnColourSelect}
      />
    )
    expect(container).toMatchSnapshot()
  })
})

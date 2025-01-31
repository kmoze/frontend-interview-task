import { render, fireEvent } from '@testing-library/react'
import ColourPicker from '@/components/ColourPicker'
import '@testing-library/jest-dom'
import { ColourOption } from '@/types/colourTypes'

describe('ColourPicker Component', () => {
  const mockColours: { [key: string]: ColourOption } = {
    cherryRed: '#74070E',
    butterYellow: '#FFEDA8',
    auraIndigo: '#B0A6DE',
  }

  const mockOnColourSelect = jest.fn()

  it('renders all colour buttons', () => {
    const { getByLabelText } = render(
      <ColourPicker
        colours={mockColours}
        selectedColour="#B0A6DE"
        onColourSelect={mockOnColourSelect}
      />
    )

    expect(getByLabelText('Select cherryRed theme')).toBeInTheDocument()
    expect(getByLabelText('Select butterYellow theme')).toBeInTheDocument()
    expect(getByLabelText('Select auraIndigo theme')).toBeInTheDocument()
  })

  it('applies correct border styling for the selected colour', () => {
    const { getByLabelText } = render(
      <ColourPicker
        colours={mockColours}
        selectedColour="#B0A6DE"
        onColourSelect={mockOnColourSelect}
      />
    )

    const selectedButton = getByLabelText('Select auraIndigo theme')
    expect(selectedButton).toHaveClass('border-black')

    const otherButton = getByLabelText('Select cherryRed theme')
    expect(otherButton).toHaveClass('border-gray-100')
  })

  it('calls onColourSelect with correct colour when clicked', () => {
    const { getByLabelText } = render(
      <ColourPicker
        colours={mockColours}
        selectedColour="#B0A6DE"
        onColourSelect={mockOnColourSelect}
      />
    )

    const indigoButton = getByLabelText('Select auraIndigo theme')
    fireEvent.click(indigoButton)

    expect(mockOnColourSelect).toHaveBeenCalledTimes(1)
    expect(mockOnColourSelect).toHaveBeenCalledWith('#B0A6DE')
  })

  it('toggles colour picker visibility when palette icon is clicked', () => {
    const { getByLabelText, getByRole } = render(
      <ColourPicker
        colours={mockColours}
        selectedColour="#B0A6DE"
        onColourSelect={mockOnColourSelect}
      />
    )

    const toggleButton = getByLabelText('Toggle colour picker')
    const colourPickerContainer = getByRole('button', {
      name: 'Select cherryRed theme',
    }).parentElement

    expect(colourPickerContainer).toHaveClass('opacity-0')
    expect(colourPickerContainer).toHaveClass('pointer-events-none')

    fireEvent.click(toggleButton)
    expect(colourPickerContainer).toHaveClass('opacity-100')
    expect(colourPickerContainer).not.toHaveClass('pointer-events-none')

    fireEvent.click(toggleButton)
    expect(colourPickerContainer).toHaveClass('opacity-0')
    expect(colourPickerContainer).toHaveClass('pointer-events-none')
  })

  it('hides colour picker after selecting a colour', () => {
    const { getByLabelText, getByRole } = render(
      <ColourPicker
        colours={mockColours}
        selectedColour="#B0A6DE"
        onColourSelect={mockOnColourSelect}
      />
    )

    const toggleButton = getByLabelText('Toggle colour picker')
    const colourPickerContainer = getByRole('button', {
      name: 'Select cherryRed theme',
    }).parentElement

    fireEvent.click(toggleButton)
    expect(colourPickerContainer).toHaveClass('opacity-100')

    const cherryRedButton = getByLabelText('Select cherryRed theme')
    fireEvent.click(cherryRedButton)

    expect(colourPickerContainer).toHaveClass('opacity-0')
    expect(colourPickerContainer).toHaveClass('pointer-events-none')
  })

  it('renders with a snapshot', () => {
    const { container } = render(
      <ColourPicker
        colours={mockColours}
        selectedColour="#B0A6DE"
        onColourSelect={mockOnColourSelect}
      />
    )
    expect(container).toMatchSnapshot()
  })
})

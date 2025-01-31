import { COLOUR_OPTIONS } from '@/constants/colourOptions'

export type ColourOption = (typeof COLOUR_OPTIONS)[keyof typeof COLOUR_OPTIONS]

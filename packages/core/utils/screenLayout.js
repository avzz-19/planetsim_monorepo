import React from 'react'
import { ScrollView } from 'react-native'

export const Breakpoints = {
  xs: 0,
  sm: 768,
  md: 1024,
  lg: 1192,
}

export const colors = {
  primary: '#3CB4E5',
  black: '#000',
  white: '#FFF',
  navy: '#0B366D',
  red: '#C21F2A',
  drinkingWater: '#42BFFF',
  borewellWater: '#F7D59C',
  softFilteredWater: '#869EA8',
  recycledWater: '#C1E895',
}

export function Body({ children }) {
  return <ScrollView>{children}</ScrollView>
}

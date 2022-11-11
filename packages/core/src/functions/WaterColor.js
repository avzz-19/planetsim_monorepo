import { colors } from '../../utils/screenLayout'

export function WaterColor(type) {
  if (type === 'Drinking Water' || type === 'drinking') {
    return colors.drinkingWater
  }
  if (type === 'Soft filtered water' || type === 'softTreated') {
    return colors.softFilteredWater
  }
  if (type === 'Borewell water' || type === 'borewell') {
    return colors.borewellWater
  }
  if (type === 'Recycled water' || type === 'recycled') {
    return colors.recycledWater
  }
  return colors.drinkingWater
}

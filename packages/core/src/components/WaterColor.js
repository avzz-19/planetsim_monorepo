import { colors } from '../../utils/screenLayout'

export function WaterColor(type) {
  if (type === 'Drinking Water') {
    return colors.drinkingWater
  }
  if (type === 'Soft filtered water') {
    return colors.softFilteredWater
  }
  if (type === 'Borewell water') {
    return colors.borewellWater
  }
  if (type === 'Recycled water') {
    return colors.recycledWater
  }
  return colors.drinkingWater
}

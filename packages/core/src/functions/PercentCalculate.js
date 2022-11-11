export function PercentageCheck(percentage) {
  if (percentage > 0 && percentage <= 25) {
    return 'Almost Empty'
  }
  if (percentage >= 26 && percentage < 50) {
    return 'Below Half'
  }
  if (percentage === 50) {
    return 'Half'
  }
  if (percentage > 50 && percentage <= 99) {
    return 'Above Half'
  }
  if (percentage === 100) {
    return 'Full'
  }
  return 'Empty'
}

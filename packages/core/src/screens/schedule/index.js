import React from 'react'
import { useWindowDimensions, View } from 'react-native'
import { Breakpoints } from '../../../utils/screenLayout'
import DesktopView from './DesktopView'
import MobileView from './MobileView'

function Schedule(props) {
  const windowWidth = useWindowDimensions().width
  return (
    <View>
      {windowWidth <= Breakpoints.sm ? (
        <MobileView {...props} />
      ) : (
        <DesktopView {...props} />
      )}
    </View>
  )
}
export default Schedule

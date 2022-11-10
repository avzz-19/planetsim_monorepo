import { View, useWindowDimensions } from 'react-native'
import React from 'react'
import MobileView from './MobileView'
import DesktopView from './DesktopView'
import { Breakpoints } from '../../../utils/screenLayout'

function Tanker(props) {
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

export default Tanker

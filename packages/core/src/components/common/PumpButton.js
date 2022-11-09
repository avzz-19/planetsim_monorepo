import { View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

function PumpButton({ isEnabled = true, handleClick }) {
  return (
    <View style={{ alignSelf: 'center' }}>
      <Button
        mode='contained'
        buttonColor={isEnabled ? '#C21F2A' : '#7ED321'}
        textColor='#FFF'
        onPress={handleClick}
        style={{ width: 190 }}
      >
        {`${isEnabled ? 'Stop' : 'Start'} pump`}
      </Button>
    </View>
  )
}

export default PumpButton

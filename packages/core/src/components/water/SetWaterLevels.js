import { Text, View } from 'react-native'
import React, { useState } from 'react'
import VerticalSlider from 'react-native-vertical-slider-smartlife'
import { colors } from '../../../utils/screenLayout'

function SetWaterLevels() {
  const [value, setValue] = useState(20)
  const [offValue, setOffValue] = useState(80)
  return (
    <View
      style={{
        marginTop: 150,
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EEE',
        width: '90%',
        padding: 10,
        backgroundColor: 'white',
      }}
    >
      <Text style={{ marginBottom: 10, fontWeight: '500' }}>
        Set water levels
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            flex: 0.5,
            alignItems: 'center',
          }}
        >
          <VerticalSlider
            value={value}
            disabled={false}
            min={0}
            max={100}
            onChange={(v) => {
              setValue(v)
            }}
            onComplete={(v) => {
              setValue(v)
            }}
            width={70}
            height={150}
            step={1}
            borderRadius={5}
            minimumTrackTintColor={colors.primary}
            maximumTrackTintColor='#F5F5F5'
            showBallIndicator
            renderIndicator={() => (
              <Text style={{ color: '#3CB4E5' }}>{value}%</Text>
            )}
            ballIndicatorColor='white'
            ballIndicatorTextColor='black'
            ballIndicatorHeight={48}
            ballIndicatorWidth={48}
            ballIndicatorPosition={-48}
            showBackgroundShadow={false}
          />
          <Text style={{ marginTop: 10 }}>Switch on</Text>
        </View>
        <View
          style={{
            flex: 0.5,
            alignItems: 'center',
          }}
        >
          <VerticalSlider
            value={offValue}
            disabled={false}
            min={0}
            max={100}
            onChange={
              (v) => setOffValue(v)
              //   console.log('CHANGE', value)
            }
            onComplete={(v) => {
              setOffValue(v)
              //   console.log('COMPLETE', v)
            }}
            width={70}
            height={150}
            step={1}
            borderRadius={5}
            minimumTrackTintColor={colors.primary}
            maximumTrackTintColor='#F5F5F5'
            showBallIndicator
            renderIndicator={() => (
              <Text style={{ color: '#3CB4E5' }}>{offValue}%</Text>
            )}
            ballIndicatorColor='white'
            ballIndicatorTextColor='black'
            ballIndicatorHeight={48}
            ballIndicatorWidth={48}
            ballIndicatorPosition={-48}
            showBackgroundShadow={false}
          />
          <Text style={{ marginTop: 10 }}>Switch off</Text>
        </View>
      </View>
    </View>
  )
}

export default SetWaterLevels

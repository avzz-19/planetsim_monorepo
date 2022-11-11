import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  Platform,
} from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { Breakpoints, colors } from '../../../utils/screenLayout'
import Sensor from '../../assets/Sensor.png'
import ToggleSwitch from '../common/ToggleSwitch'
import { WaterColor } from '../../functions/WaterColor'
import { PercentageCheck } from '../../functions/PercentCalculate'

function UgtCard({
  title,
  waterType,
  percentage,
  ltr,
  towers,
  ft,
  valveState,
  mode,
}) {
  const [isEnabled, setIsEnabled] = React.useState(false)
  const cardWidth = useWindowDimensions().width
  return (
    <View style={styles.wrapper(cardWidth)}>
      <View style={styles.row}>
        <View style={styles.v1}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{waterType}</Text>
        </View>
        <View>
          <Image
            source={Sensor}
            style={{ height: 17, width: 24, marginRight: 10 }}
            resizeMode='contain'
          />
        </View>
      </View>
      <Svg
        height={`${percentage}%`}
        width={Platform.OS === 'web' ? '100%' : '90%'}
        style={{
          position: 'absolute',
          bottom: 60,
          zIndex: -1000,
        }}
      >
        <Path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0 3.9589C0 3.9589 84.525 -3.9589 145.212 3.9589C210.803 12.5167 278.938 22.1225 324.733 22.1225C437.232 22.1225 483 3.9589 483 3.9589V289H0V3.9589Z'
          fill={WaterColor(waterType)}
        />
      </Svg>
      <View style={styles.row}>
        <View style={styles.percent}>
          <Text style={styles.percentage}>{percentage}%</Text>
          <Text style={styles.subTitle}>{ltr} ltr</Text>
        </View>
        <View style={styles.v2}>
          <Text style={styles.towers}>{towers}</Text>
          <Text style={styles.ft}>{ft} ft</Text>
        </View>
      </View>

      <View style={[styles.row, styles.end]}>
        <Text style={styles.percentCheck(percentage)}>
          {PercentageCheck(percentage)}
        </Text>
        {mode === 'Auto' && (
          <Text style={styles.pump(valveState)}>Pump: {valveState}</Text>
        )}
        {mode === 'Manual' && (
          <View style={styles.row}>
            <Text>Valve </Text>
            <ToggleSwitch
              value={isEnabled}
              buttonWidth={55}
              buttonHeight={25}
              buttonRadius={100}
              sliderWidth={20}
              sliderHeight={20}
              sliderRadius={100}
              onLabel='ON'
              offLabel='OFF'
              labelStyle={{ color: 'FFF' }}
              buttonOnColor='#7ED321'
              buttonOffColor='#C21F2A'
              onToggle={() => setIsEnabled(!isEnabled)}
            />
          </View>
        )}
      </View>
    </View>
  )
}

export default UgtCard

const styles = StyleSheet.create({
  wrapper: (cardWidth) => ({
    height: 306,
    minWidth: cardWidth >= Breakpoints.sm ? '37%' : '90%',
    backgroundColor: '#EEEEEE',
    alignSelf: 'center',
    paddingTop: 16,
  }),
  card: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  percentCheck: (percentage) => ({
    fontSize: 16,
    color: percentage <= 25 ? colors.red : colors.black,
  }),
  ft: {
    alignSelf: 'flex-end',
    color: colors.navy,
    fontSize: 14,
    paddingRight: 16,
  },
  towers: {
    alignSelf: 'flex-end',
    color: colors.navy,
    paddingRight: 16,
  },
  v1: {
    paddingLeft: 16,
  },
  v2: {
    paddingTop: '15%',
  },
  percent: {
    paddingLeft: 16,
    paddingTop: '10%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: colors.navy,
  },
  subTitle: {
    fontSize: 16,
    color: colors.navy,
  },
  pump: (valveState) => ({
    fontSize: 16,
    color: valveState === 'on' ? 'green' : 'grey',
  }),
  percentage: {
    fontSize: 48,
    color: colors.navy,
  },
  end: {
    padding: 20,
    backgroundColor: 'white',
    height: 60,
    width: Platform.OS === 'web' ? '100%' : '90%',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
})

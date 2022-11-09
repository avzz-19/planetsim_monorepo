import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
} from 'react-native'
import React from 'react'
import { Breakpoints, colors } from '../../utils/screenLayout'
import Sensor from '../assets/Sensor.png'
import ToggleSwitch from './common/ToggleSwitch'
import { PercentageCheck } from './PercentCalculate'
import { WaterColor } from './WaterColor'
// import { Switch } from 'react-native'

function OhtCard({
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
  function width(w) {
    if (w <= Breakpoints.xs) return '90%'
    if (w <= Breakpoints.sm && w <= Breakpoints.md) return '90%'
    if (w >= Breakpoints.md && w <= Breakpoints.lg) return '50%'
    if (w >= Breakpoints.lg) return '40%'
  }
  return (
    <View style={styles.card(width, cardWidth)}>
      <View style={styles.wrapper}>
        <View style={styles.leftSection(waterType, percentage)} />
        <View style={styles.containerText}>
          <View>
            <Text style={styles.percentage}>{percentage}%</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subTitle}>{ltr} ltr</Text>
            <Text style={styles.ft}>{ft} ft</Text>
          </View>
        </View>
      </View>
      <View style={[styles.row, { justifyContent: 'space-between' }]}>
        <View style={styles.v1}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.row}>
            <Text style={styles.subTitle}>{waterType} |</Text>
            <Text style={styles.towers}>{towers}</Text>
          </View>
        </View>
        <View style={styles.image}>
          <Image
            source={Sensor}
            style={{ height: 17, width: 24, marginRight: 10 }}
            resizeMode='contain'
          />
        </View>
        <View
          style={[styles.row, styles.end, { justifyContent: 'space-between' }]}
        >
          <Text style={styles.percentCheck(percentage)}>
            {PercentageCheck(percentage)}
          </Text>
          {mode === 'Auto' && (
            <Text style={styles.pump(valveState)}>Pump: {valveState}</Text>
          )}
          {mode === 'Manual' && (
            <View style={[styles.row, styles.manual]}>
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
    </View>
  )
}

export default OhtCard

const styles = StyleSheet.create({
  card: (width, cardWidth) => ({
    height: 111,
    width: width(cardWidth),
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingTop: 16,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    padding: '1%',
  }),
  wrapper: {
    display: 'flex',
    flex: 0.6,
    width: '30%',
    marginLeft: 10,
    marginRight: 10,
    height: 86,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
  },
  percentCheck: (percentage) => ({
    fontSize: 14,
    color: percentage <= 25 ? colors.red : colors.black,
  }),
  leftSection: (waterType, percentage) => ({
    width: '100%',
    height: percentage,
    backgroundColor: WaterColor(waterType),
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
  }),
  ft: {
    alignSelf: 'flex-end',
    color: colors.navy,
    fontSize: 12,
    paddingLeft: 16,
  },
  towers: {
    alignSelf: 'flex-end',
    color: colors.navy,
    paddingLeft: 6,
    fontSize: 12,
  },
  image: {
    position: 'absolute',
    top: 5,
    right: -50,
  },
  v1: {
    paddingLeft: 5,
    marginBottom: 50,
  },
  v2: {
    paddingTop: '1%',
  },
  containerText: {
    paddingLeft: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: colors.navy,
  },
  subTitle: {
    fontSize: 12,
    color: colors.navy,
  },
  pump: (valveState) => ({
    fontSize: 14,
    color: valveState === 'on' ? 'green' : 'grey',
  }),
  percentage: {
    fontSize: 24,
    color: colors.navy,
  },
  manual: {
    position: 'absolute',
    right: -40,
  },
  end: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginLeft: 5,
  },
})

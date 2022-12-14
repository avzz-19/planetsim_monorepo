import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
} from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { Breakpoints, colors } from '../../../utils/screenLayout'
import Sensor from '../../assets/Sensor.png'
import ToggleSwitch from '../common/ToggleSwitch'
import { PercentageCheck } from '../../functions/PercentCalculate'
import { WaterColor } from '../../functions/WaterColor'

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
    if (w >= Breakpoints.xs && w <= Breakpoints.sm) return '90%'
    if (w >= Breakpoints.sm && w <= Breakpoints.md) return '60%'
    if (w >= Breakpoints.md && w <= Breakpoints.lg) return '50%'
    if (w >= Breakpoints.lg) return '40%'
  }
  return (
    <View style={styles.card(width, cardWidth)}>
      <View style={styles.wrapper}>
        {/* <View style={styles.leftSection(waterType, percentage)} /> */}
        <Svg
          width='100%'
          height={`${percentage}%`}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -100000,
            flex: 1,
          }}
        >
          <Path
            fillRule='evenodd'
            clipRule='evenodd'
            fill={WaterColor(waterType)}
            d='M0 1.75342C0 1.75342 45.325 -1.75342 77.867 1.75342C113.039 5.54372 149.575 9.79821 174.132 9.79821C234.458 9.79821 259 1.75342 259 1.75342V128H0V1.75342Z'
          />
        </Svg>
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
            style={{ height: 17, width: 24 }}
            resizeMode='contain'
          />
        </View>
        <View style={[styles.row, styles.end]}>
          <Text style={styles.percentCheck(percentage)}>
            {PercentageCheck(percentage)}
          </Text>
          {mode === 'Auto' && (
            <Text style={styles.pump(valveState)}>Pump: {valveState}</Text>
          )}
          {mode === 'Manual' && (
            <View style={[styles.row, styles.manual]}>
              <Text style={{ color: 'black' }}>Valve </Text>
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
    width: '30%',
    marginLeft: 5,
    marginRight: 5,
    height: 86,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
  },
  percentCheck: (percentage) => ({
    fontSize: 14,
    color: percentage <= 25 ? colors.red : colors.black,
    flex: 2,
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
    alignSelf: 'flex-end',
    right: '-27%',
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
    color: 'black',
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
    flex: 0.9,
  },
  end: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginLeft: 5,
  },
})

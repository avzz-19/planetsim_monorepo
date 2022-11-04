import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import { colors } from '../../utils/screenLayout'
import Sensor from '../assets/Sensor.png'
// import { Switch } from 'react-native'

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
  function percentageCheck() {
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
  function waterColor(type) {
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
  // const [isEnabled, setIsEnabled] = React.useState(false)
  return (
    <View style={styles.card(waterType, waterColor)}>
      <View style={styles.row}>
        <View style={styles.v1}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{waterType}</Text>
        </View>
        <View>
          <Image
            source={Sensor}
            style={{ height: 17, width: 24, marginRight: 10 }}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.v1}>
          <Text style={styles.percentage}>{percentage}%</Text>
          <Text style={styles.subTitle}>{ltr} ltr</Text>
        </View>
        <Text style={styles.towers}>{towers}</Text>
      </View>
      <Text style={styles.ft}>{ft} ft</Text>
      <View style={[styles.row, styles.end]}>
        <Text style={styles.percentCheck(percentage)}>
          {percentageCheck(percentage)}
        </Text>
        {mode === 'Auto' && (
          <Text style={styles.pump(valveState)}>Pump: {valveState}</Text>
        )}
        {mode === 'Manual' && (
          <>
            <Text>Valve </Text>
            {/* <Switch
              size={30}
              value={isEnabled}
              onChange={(value) => setIsEnabled(value)}
              trackColor='red'
            /> */}
          </>
        )}
      </View>
    </View>
  )
}

export default UgtCard

const styles = StyleSheet.create({
  card: (waterType, waterColor) => ({
    height: 306,
    width: '90%',
    backgroundColor: waterColor(waterType),
    alignSelf: 'center',
    paddingTop: 16,
    display: 'flex',
  }),
  percentCheck: (percentage) => ({
    fontSize: 16,
    color: percentage <= 25 ? colors.red : colors.black,
  }),
  ft: {
    alignSelf: 'flex-end',
    color: colors.navy,
    fontSize: 14,
    paddingRight: 16,
    marginBottom: '5%',
  },
  towers: {
    alignSelf: 'flex-end',
    color: colors.navy,
    paddingRight: 16,
  },
  v1: {
    paddingLeft: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    color: valveState === 'on' ? 'green' : 'red',
  }),
  percentage: {
    fontSize: 48,
    color: colors.navy,
    marginTop: '60%',
  },
  end: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: 'white',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
})

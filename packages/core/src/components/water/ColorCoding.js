import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils/screenLayout'

function ColorCoding() {
  return (
    <View style={styles.row}>
      <View style={[styles.row, styles.next]}>
        <View
          style={{
            height: 12,
            width: 12,
            backgroundColor: colors.drinkingWater,
            marginRight: 5,
          }}
        />
        <Text>Drinking</Text>
      </View>
      <View style={[styles.row, styles.next]}>
        <View
          style={{
            height: 12,
            width: 12,
            backgroundColor: colors.borewellWater,
            marginRight: 5,
          }}
        />
        <Text>Borewell</Text>
      </View>
      <View style={[styles.row, styles.next]}>
        <View
          style={{
            height: 12,
            width: 12,
            backgroundColor: colors.recycledWater,
            marginRight: 5,
          }}
        />
        <Text>Recycled</Text>
      </View>
      <View style={[styles.row, styles.next]}>
        <View
          style={{
            height: 12,
            width: 12,
            backgroundColor: colors.softFilteredWater,
            marginRight: 5,
          }}
        />
        <Text>Soft treated</Text>
      </View>
    </View>
  )
}

export default ColorCoding

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  next: {
    marginLeft: 10,
    marginRight: 10,
  },
})

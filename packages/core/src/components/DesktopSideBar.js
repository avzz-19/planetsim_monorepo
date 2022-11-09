import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Drop from '../assets/Drop.svg'
import { colors } from '../../utils/screenLayout'

function DesktopSideBar() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Smart Solutions</Text>
      <View style={styles.row}>
        <Image source={Drop} style={{ height: 21, width: 16 }} />
        <Text>Water</Text>
      </View>
    </View>
  )
}

export default DesktopSideBar

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: 'grey',
    marginVertical: 20,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  wrapper: {
    height: '100vh',
    position: 'absolute',
    left: 0,
    width: '20%',
    backgroundColor: '#FFFFFF',
  },
})

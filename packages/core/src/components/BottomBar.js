import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Tanker from '../assets/Taker.png'
import { colors } from '../../utils/screenLayout'

function BottomBar() {
  return (
    <View style={styles.bottomContainer}>
      <TouchableOpacity
        style={[
          styles.bottomContainerElement,
          { backgroundColor: '#F1F7F9', alignItems: 'center' },
        ]}
      >
        <Image source={Tanker} style={{ height: 16.55, width: 30 }} />
        <Text style={[styles.bottomElementText, { color: colors.primary }]}>
          Call Tanker
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomBar

const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: colors.white,
    width: '100%',
    height: 68,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '1%',
    position: 'fixed',
    bottom: 0,
  },
  bottomContainerElement: {
    backgroundColor: colors.white,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '40%',
    height: '60%',
    borderRadius: 16,
  },
  bottomElementText: {
    fontSize: 15,
    lineHeight: 20,
  },
})

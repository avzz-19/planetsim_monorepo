import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Surface } from 'react-native-paper'
import { colors } from '../../utils/screenLayout'
import Tanker from '../assets/TankerWhite.png'
import Plus from '../assets/Plus.png'

function RecordTankerArrival() {
  return (
    <Surface style={styles.container}>
      <View>
        <Image source={Tanker} style={{ height: 22, width: 40 }} />
        <Text style={styles.text}>Record Tanker Arrival</Text>
      </View>
      <Image source={Plus} style={{ height: 32, width: 32 }} />
    </Surface>
  )
}

export default RecordTankerArrival

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  text: {
    color: 'white',
    paddingTop: 5,
  },
})

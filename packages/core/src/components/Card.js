import { StyleSheet, Text } from 'react-native'
import { Surface } from 'react-native-paper'
import React from 'react'

function Card() {
  return (
    <Surface style={styles.card}>
      <Text>Card</Text>
    </Surface>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    height: 30,
    width: 30,
  },
})

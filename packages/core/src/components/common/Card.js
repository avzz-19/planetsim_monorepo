import { StyleSheet, Text } from 'react-native'
import { Surface } from 'react-native-paper'
import React from 'react'

function Card({ text, children }) {
  return (
    <Surface style={styles.card}>
      {children}
      <Text style={styles.text}>{text}</Text>
    </Surface>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    height: 130,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
})

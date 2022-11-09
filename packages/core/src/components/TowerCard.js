import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function TowerCard() {
  return (
    <View style={styles.wrapper}>
      <Text>TowerCard</Text>
    </View>
  )
}

export default TowerCard

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
})

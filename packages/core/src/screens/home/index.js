import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native-paper'
import Card from '../../components/Card'

function Home() {
  const Navigation = useNavigation()
  return (
    <View style={styles.main}>
      <Text style={styles.header}>Planet Sim Solutions</Text>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            Navigation.navigate('Water')
          }}
        >
          <Card text='Water' />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Navigation.navigate('Tanker')
          }}
        >
          <Card text='Tanker' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  header: { fontSize: 30, marginBottom: 30, alignSelf: 'center' },
  row: { flexDirection: 'row', justifyContent: 'space-evenly' },
  main: {
    height: '100%',
    marginTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
})

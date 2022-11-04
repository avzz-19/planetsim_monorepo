import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Card from '../../components/Card'

function Home() {
  const Navigation = useNavigation()
  return (
    <View
      style={{
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 100,
      }}
    >
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
  )
}

export default Home

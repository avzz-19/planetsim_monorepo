import React from 'react'
import { SafeAreaView, Platform, Text } from 'react-native'

export function App() {
  return (
    <SafeAreaView>
      {Platform.OS === 'web' ? (
        <style type='text/css'>{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
        }
      `}</style>
      ) : null}
      <Text style={{ color: 'black' }}>Hello</Text>
    </SafeAreaView>
  )
}

import React from 'react'
import { SafeAreaView, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './navigation'

export function App() {
  return (
    <>
      <SafeAreaView>
        {Platform.OS === 'web' ? (
          <style type='text/css'>{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
        }
      `}</style>
        ) : null}
      </SafeAreaView>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  )
}

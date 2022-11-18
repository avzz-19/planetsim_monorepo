import React from 'react'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import AppNavigator from './navigation'
import { store } from './redux/store'

export function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        {Platform.OS === 'web' ? (
          <style type='text/css'>{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
        }
      `}</style>
        ) : null}

        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}

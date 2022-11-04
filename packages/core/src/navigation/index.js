import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import Tanker from '../screens/tanker'
import Water from '../screens/water'

function Rootnavigation() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName='Home'>
      {/* <Stack.Screen name='Home' component={Home} /> */}
      <Stack.Screen
        name='Home'
        options={{
          title: 'Home',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
        }}
      >
        {(screenProps) => <Home screenProps={{ ...screenProps }} />}
      </Stack.Screen>
      <Stack.Screen
        name='Water'
        options={{
          title: 'Water Distribution',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
        }}
      >
        {(screenProps) => <Water screenProps={{ ...screenProps }} />}
      </Stack.Screen>
      <Stack.Screen
        name='Tanker'
        options={{
          title: 'Tanker',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
        }}
      >
        {(screenProps) => <Tanker screenProps={{ ...screenProps }} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default Rootnavigation

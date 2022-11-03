import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import Tanker from '../screens/tanker'
import Water from '../screens/water'

function Rootnavigation() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Home'>
        {(screenProps) => <Home screenProps={{ ...screenProps }} />}
      </Stack.Screen>
      <Stack.Screen name='Water'>
        {(screenProps) => <Water screenProps={{ ...screenProps }} />}
      </Stack.Screen>
      <Stack.Screen name='Tanker'>
        {(screenProps) => <Tanker screenProps={{ ...screenProps }} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default Rootnavigation

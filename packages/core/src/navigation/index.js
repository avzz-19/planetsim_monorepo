/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import Tanker from '../screens/tanker'
import Water from '../screens/water'
import OptionButton from '../components/common/OptionButton'
import Schedule from '../screens/schedule'
import AddButton from '../components/common/AddButton'
import TankerHistory from '../screens/tankerHistory'

function Rootnavigation() {
  const [activeTab, setActiveTab] = useState('')
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
        {(screenProps) => (
          <Home
            screenProps={{ ...screenProps }}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name='Water'
        options={{
          title: 'Water Distribution',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerRight: () => <OptionButton />,
        }}
      >
        {(screenProps) => (
          <Water
            screenProps={{ ...screenProps }}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name='Schedule'
        options={{
          title: 'Schedule',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerRight: () => <AddButton />,
        }}
      >
        {(screenProps) => <Schedule screenProps={{ ...screenProps }} />}
      </Stack.Screen>
      <Stack.Screen
        name='Tanker'
        options={{
          title: 'Tanker',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerRight: () => <OptionButton />,
        }}
      >
        {(screenProps) => (
          <Tanker
            screenProps={{ ...screenProps }}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name='History'
        options={{
          title: 'Tanker History',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerRight: () => <OptionButton />,
        }}
      >
        {(screenProps) => (
          <TankerHistory
            screenProps={{ ...screenProps }}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default Rootnavigation

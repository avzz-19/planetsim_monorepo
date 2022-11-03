import React from 'react'
import { AppRegistry } from 'react-native'
import { App } from 'core/src/App'
const PsApp = () => {
  return <App />
}

AppRegistry.registerComponent('psapp', () => PsApp)
AppRegistry.runApplication('psapp', {
  rootTag: document.getElementById('root'),
})

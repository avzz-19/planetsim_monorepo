import * as React from 'react'

export const navigationRef = React.createRef()
export function navigate(name) {
  console.log('here', name)
  navigationRef.current?.navigate(name)
}

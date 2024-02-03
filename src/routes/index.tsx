import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { LayoutChangeEvent } from 'react-native'

import { AuthRoutes } from './auth.routes'

type AuthRoutesProps = {
  onLayout: (event: LayoutChangeEvent) => void
}

export function Routes({ onLayout }: AuthRoutesProps) {
  return (
    <NavigationContainer>
      <AuthRoutes onLayout={onLayout} />
    </NavigationContainer>
  )
}

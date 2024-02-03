import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { LayoutChangeEvent } from 'react-native'

import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn'

const { Navigator, Screen } = createNativeStackNavigator()

type AuthRoutesProps = {
  onLayout: (event: LayoutChangeEvent) => void
}
export function AuthRoutes({ onLayout }: AuthRoutesProps) {
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'transparent' } }}>
      <Screen name="SignIn">{(props) => <SignIn onLayout={onLayout} {...props} />}</Screen>
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}

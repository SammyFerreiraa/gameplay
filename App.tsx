import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import React, { useCallback } from 'react'
import { StatusBar } from 'react-native'

import { Background } from '~/components/Background'
import { Routes } from '~/routes'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_700Bold,
    Rajdhani_500Medium,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }
  return (
    <Background>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <Routes onLayout={onLayoutRootView} />
    </Background>
  )
}

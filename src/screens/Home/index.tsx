import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'
import { Profile } from '../Profile'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
      </View>
    </View>
  )
}

import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles'

import { Avatar } from '~/components/Avatar'

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar imageUrl="https://github.com/sammyferreiraa.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>Sammy</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  )
}

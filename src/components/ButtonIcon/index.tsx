import React from 'react'
import { Text, View, Image } from 'react-native'
import { RectButton, RectButtonProps, GestureHandlerRootView } from 'react-native-gesture-handler'

import { styles } from './styles'
import DiscordImg from '../../assets/discord.png'

type ButtonIconProps = RectButtonProps & {
  title: string
}

export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
  return (
    <GestureHandlerRootView>
      <RectButton style={styles.container} {...rest}>
        <View style={styles.iconWrapper}>
          <Image source={DiscordImg} style={styles.icon} />
        </View>

        <Text style={styles.title}>{title}</Text>
      </RectButton>
    </GestureHandlerRootView>
  )
}

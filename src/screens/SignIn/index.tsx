import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View, Image, LayoutChangeEvent } from 'react-native'

import { styles } from './styles'
import IllustrationImg from '../../assets/illustration.png'

import { ButtonIcon } from '~/components/ButtonIcon'

type SignInProps = {
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined
}

export function SignIn({ onLayout }: SignInProps) {
  const navigation = useNavigation()

  const handleSignIn = () => {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container} onLayout={onLayout}>
      <Image source={IllustrationImg} style={styles.image} resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'} e organize suas {'\n'} jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'} favoritos com seus amigos
        </Text>

        <ButtonIcon onPress={handleSignIn} title="Entrar com Discord" />
      </View>
    </View>
  )
}

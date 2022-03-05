import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { styles } from './styles';

export function Home(){
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>React Native é muito massa!</Text>
    </SafeAreaView>
  )
}

// SafeAreaView: componente que evita que,  no cado do ios, o conteúdo
// da tela fique por cima da barra de status.
// no Android, SafeAreaView não tem efeito.
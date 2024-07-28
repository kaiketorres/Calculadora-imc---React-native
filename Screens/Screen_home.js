import React from "react";
import {  SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'


export default function ( {navigation} ) {
  return (
    <SafeAreaView style={styles.main}>

      <View style={{ justifyContent: 'center',alignItems: 'center'}}>
        <Text style={{ ...styles.titles, fontSize: 80 }}>IMC</Text>
        <Text style={{...styles.text, fontSize: 20 }}>Calculadora</Text>
      </View>

      <TouchableOpacity style={styles.buttonComecar} onPress={() => navigation.navigate('genero')}>
        <Text style={styles.textButton}>Começar</Text> 
      </TouchableOpacity>

    </SafeAreaView>
  )
}


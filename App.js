import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen_home from './Screens/Screen_home.js';
import Screen_Genero from './Screens/Screen_Genero.js';
import Screen_Calculadora from './Screens/Screen_Calculadora.js';
import Screen_Resultado from "./Screens/Screen_Resultado.js";
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';

const Pilhas = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'MerriweatherSans': require('./assets/fonts/MerriweatherSans-Bold.ttf'),
    'Alilato': require('./assets/fonts/Alilato-ExtraLight.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Pilhas.Navigator initialRouteName="genero">
        <Pilhas.Screen
          name="home"
          component={Screen_home}
          options={{ headerShown: false }}
        />
        <Pilhas.Screen
          name="genero"
          component={Screen_Genero}
          options={{
            title: 'IMC',
            headerStyle: { backgroundColor: '#2F2F2F' },
            headerTintColor: '#FF5F5f',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 25, fontFamily: 'MerriweatherSans' }
          }}
        />
        <Pilhas.Screen
          name="calculadora"
          component={Screen_Calculadora}
          options={{
            title: 'IMC',
            headerStyle: { backgroundColor: '#2F2F2F' },
            headerTintColor: '#FF5F5f',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 25, fontFamily: 'MerriweatherSans' }
          }}
        />
        <Pilhas.Screen
          name="resultado"
          component={Screen_Resultado}
          options={{
            title: 'IMC',
            headerStyle: { backgroundColor: '#2F2F2F' },
            headerTintColor: '#FF5F5f',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 25, fontFamily: 'MerriweatherSans' }
          }}
        />
      </Pilhas.Navigator>
    </NavigationContainer>
  );
}

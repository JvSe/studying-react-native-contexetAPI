import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Home from './Pages/Home';
import Perfil from './Pages/Perfil';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { UserProvider } from './DispositvoContext';

const Stack = createStackNavigator()

export default function App() {
  const [theme, setTheme] = useState('claro');

  const mudarTema = () => {
    setTheme(theme === 'claro' ? 'escuro': 'claro')
    console.log('eae')
  }

  return(
    <>
    <UserProvider value={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Perfil" component={Perfil} />
        </Stack.Navigator>
      </NavigationContainer>
      <View style={styles.container}>
        <Button onPress={() => mudarTema()} title={'Mudar o tema!'}/>
      </View>
    </UserProvider>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'flex-end',
    alignItems:'center'
  }
})
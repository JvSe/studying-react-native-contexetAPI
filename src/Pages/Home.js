import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import UserContext from '../DispositvoContext';

export default function App({ navigation }) {
  const theme = useContext(UserContext)
  return(
      <View style={[styles.container, {backgroundColor: theme === 'escuro' ? '#000': '#FFF'}]}>
          <Text style={[styles.text, {color: theme === 'escuro' ? '#fff': '#000'}]}>Estou na Home!</Text>
          <Button title="Perfil" onPress={() => navigation.navigate('Perfil')} />
      </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    fontSize:24
  }
})
import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import UserContext from '../DispositvoContext';

export default function Home({ navigation }) {
  const theme = useContext(UserContext)
  return(
      
      <View style={[styles.container, {backgroundColor: theme === 'escuro' ? '#333': '#FFF'}]}>
          <Text style={styles.text}> Estou no Perfil!</Text>
          <Button title="Home" onPress={() => navigation.goBack()} />
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
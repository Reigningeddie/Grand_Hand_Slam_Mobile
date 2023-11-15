import { View, Text, TextInput, StyleSheet } from 'react-native';
import Back from '../components/back';

export default function login() {
  return (
    <View style={styles.body}>
      <View style={styles.logo}><Text style={styles.text}>Logo</Text></View>
      <TextInput 
        style={styles.input}
        placeholder={'Username'}></TextInput>
      <TextInput 
        style={styles.input}
        placeholder={'password'}></TextInput>
      <Text style={styles.btn}>Login</Text>
      <Text style={styles.btn}>Register</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
    borderWidth: 5,
    marginBottom: 50,
    height: 150,
    width: 150,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    color: 'aliceblue',
  },

  input: {
    borderWidth: 2,
    paddingLeft: 5,
    height: 35,
    width: 150,
    marginBottom: 15
  },

  btn: {
    color: 'aliceblue',
    marginBottom: 5
  }
})
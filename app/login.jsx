import { View, Text, TextInput, StyleSheet, Pressable, 
  useNavigate } from 'react-native';
import { Link } from 'expo-router';
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
      <Link href={'/home'} asChild><Pressable style={styles.border}><Text style={styles.login}>Login</Text></Pressable></Link>
      <Text style={styles.signUp}>Don't have an account? <Text style={styles.btn}>Sign Up</Text></Text>
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
    fontSize: 30
  },

  input: {
    fontSize: 15,
    borderWidth: 2,
    paddingLeft: 5,
    borderRadius: 5,
    height: 40,
    width: 200,
    marginBottom: 15
  },

  border: {
    backgroundColor: '#2EA1DD',
    width: 150,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderRadius: 10
  },

  login: {
    fontSize: 15,
    color: 'aliceblue',
  },

  signUp: {
    fontSize: 15
  },

  btn: {
    color: '#2EA1DD',
    marginBottom: 20
  }
})
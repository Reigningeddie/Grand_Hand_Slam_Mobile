import { View, Text, TextInput, StyleSheet, Pressable,} from 'react-native';
import { Link } from 'expo-router';

export default function signUp() {
  return (
    <View style={styles.body}>
      <View style={styles.align}><Text style={styles.txt}>Let's get you signed Up!</Text></View>
      <View style={styles.name}>
        <TextInput 
          style={styles.inputN}
          placeholder={'     First Name'} ></TextInput>
        <TextInput 
          style={styles.inputN} 
          placeholder={'     Last Name'} ></TextInput>
      </View>
      <TextInput
      style={styles.input}
      placeholder={'     Email'} ></TextInput>
      <TextInput 
      style={styles.input}
      keyboardType={'number-pad'}
      placeholder={'     Mobile Number'} ></TextInput>
      <TextInput 
      style={styles.input}
      secureTextEntry={true}
      placeholder={'     New Password'} ></TextInput>
      <TextInput 
      style={styles.input}
      secureTextEntry={true}
      placeholder={'     confirm Password'} ></TextInput>
      <Pressable style={styles.border}><Text style={styles.btn}>Sign Up</Text></Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#435B66',
  },

  align: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  txt: {
    fontSize: 30,
    marginTop: 20,
  },

  name: {
    marginTop: 80,
    flexDirection: 'row'
  },

  inputN: {
    fontSize: 15,
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    width: 180,
    marginRight: 20,
    marginLeft: 10
  },

  input: {
    fontSize: 15,
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    width: 390,
    marginTop: 15,
    marginLeft: 10
  },

  border: {
    backgroundColor: '#2EA1DD',
    fontSize: 10,
    marginLeft: 100,
    width: 200,
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#2EA1DD',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    color: 'aliceblue'
  }
})
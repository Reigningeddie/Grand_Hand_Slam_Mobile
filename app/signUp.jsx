import { View, Text, TextInput, StyleSheet, Pressable,} from 'react-native';
import { Link } from 'expo-router';

export default function signUp() {
  return (
    <View style={styles.body}>
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
      <Pressable><Text>Sign Up</Text></Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#435B66',
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
  }
})
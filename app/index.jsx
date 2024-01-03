import { View, StyleSheet, SafeAreaView } from 'react-native';
import UtilityBar from '../components/utilityBar';
import Login from '../components/login';


export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.body}>  
      <Login />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#435b66',
  },
});
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import UtilityBar from '../components/utilityBar';
import Login from '../app/login';
import Home from '../app/home';


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
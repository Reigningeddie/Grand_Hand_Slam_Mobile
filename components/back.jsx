import { Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function BackBtn() {
  return (
    <Link href={'/users/1'}><Text style={styles.btn}>Back</Text></Link>
  )
}

const styles = StyleSheet.create({
  btn: {
    color: '#EAB2A0',
    fontSize: 20,
    fontWeight: 'bold',
  }
})
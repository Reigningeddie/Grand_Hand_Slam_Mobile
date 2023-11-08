import { View, Text, StyleSheet } from 'react-native';
import BackBtn from '../components/back';

export default function friends() {
  return (
    <View style={styles.body}>
      <View style={styles.main}>
        <BackBtn style={styles.btn} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#435B66',
    alignItems: 'center',
    justifyContent: 'center',
  },

  main: {
    backgroundColor: '#2D4356',
    width: '90%',
    height: '95%',
    borderRadius: 10,
  }
})
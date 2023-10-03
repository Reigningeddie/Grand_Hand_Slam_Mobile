import { View, Text, StyleSheet } from 'react-native';

export default function Main() {
  return (
    <View style={styles.body}>
      <View style={styles.main}>
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
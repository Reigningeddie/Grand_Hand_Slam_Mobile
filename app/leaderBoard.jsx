import { View, Text, StyleSheet } from 'react-native';

export default function LeaderBoard() {
  return (
    <View style={styles.body}>
      <Text>Hello I am the leaderBoard</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#435B66',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
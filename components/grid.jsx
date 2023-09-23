import { View, Text, StyleSheet } from 'react-native';

export default function Grid() {
  return <View style={styles.body}>
    <Text>Hello</Text>
  </View>
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#2D4356',
  },
});
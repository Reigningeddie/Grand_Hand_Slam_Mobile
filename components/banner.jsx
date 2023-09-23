import { View, StyleSheet } from 'react-native';

export default function Banner() {
  return <View style={styles.body} />
};

const styles = StyleSheet.create({
  body: {
    position: 'absolute',
    backgroundColor: '#2D4356',
    border: 'solid',
    width: '100%',
    height: '28%',
    zIndex: -1,
  }
})
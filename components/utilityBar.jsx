import { View, StyleSheet } from 'react-native';

const utilityBar = () => {
  return <View style={styles.bar}/>
};

export default utilityBar

const styles = StyleSheet.create({
  bar: {
    backgroundColor: 'grey',
    border: 'solid',
    width: '100%',
    height: 45,
  }
})

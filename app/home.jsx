import { View, StyleSheet } from 'react-native'
import Profile from '../components/profile';
import Grid from '../components/grid';
import Banner from '../components/banner';

export default function home() {
  return(
    <View style={styles.body}>
      <Banner />
      <Profile />
      <Grid />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#435b66',
  }
})
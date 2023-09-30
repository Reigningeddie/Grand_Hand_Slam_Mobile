import { View, StyleSheet } from 'react-native';
import Home from '../components/home';
import UtilityBar from '../components/utilityBar';
import Banner from '../components/banner';
import Grid from '../components/grid';


export default function HomeScreen() {
  return (
    <View style={styles.body}>
      <Banner />
      <Home />
      <Grid />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#435b66',
  },
});
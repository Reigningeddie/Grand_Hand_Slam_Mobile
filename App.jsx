import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home';
import UtilityBar from './components/utilityBar';
import Banner from './components/banner';
import Grid from './components/grid';

export default function App() {
  return (
    <View style={styles.body}>
      <UtilityBar />
      <Banner />
      <Home />
      <Grid />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#435b66',
  },
});

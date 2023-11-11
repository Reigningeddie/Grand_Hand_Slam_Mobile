import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Home from '../components/home';
import UtilityBar from '../components/utilityBar';
import Banner from '../components/banner';
import Grid from '../components/grid';
import Stack from 'expo-router';


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.body}>
        <Banner />
        <Home />
        <Grid />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#435b66',
  },
});
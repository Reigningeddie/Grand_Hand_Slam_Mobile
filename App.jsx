import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/home';
import UtilityBar from './components/utilityBar';
import Banner from './components/banner';
import Grid from './components/grid';

const Stack = createNativeStackNavigator();

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
    flex: 1,
    backgroundColor: '#435b66',
  },
});

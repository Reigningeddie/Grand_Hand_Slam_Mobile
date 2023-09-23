import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home';
import UtilityBar from './components/utilityBar';

export default function App() {
  return (
    <View style={styles.body}>
      <UtilityBar />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#435b66',
    margin: 0,
    padding: 0,
  },
});

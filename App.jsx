import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, SafeAreaProvider } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScreen'



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={ HomeScreen }
        options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



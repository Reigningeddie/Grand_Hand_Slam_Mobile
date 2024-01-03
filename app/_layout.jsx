import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' 
      options={{
        title: 'login',
        headerTitleAlign: 'center'
      }} />
      <Stack.Screen name='signUp'
      options={{
        title: 'Sign Up',
        headerTitleAlign: 'center'
      }} />
      <Stack.Screen name='users/[id]' 
      options={{
        headerShown: false,
      }}/>
      <Stack.Screen name='leaderBoard' 
      options={{
        title: 'Leader Boards',
        headerTitleAlign: 'center'
      }} />
      <Stack.Screen name='powerUps' 
      options={{
        title: 'Power Ups',
        headerTitleAlign: 'center',
      }} />
    </Stack>
  )
}
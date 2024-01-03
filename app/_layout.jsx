import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' 
      options={{
        title: 'login'
      }} />
      <Stack.Screen name='users/[id]' 
      options={{
        headerShown: false,
      }}/>
      <Stack.Screen name='leaderBoard' />
      <Stack.Screen name='powerUps' />
    </Stack>
  )
}
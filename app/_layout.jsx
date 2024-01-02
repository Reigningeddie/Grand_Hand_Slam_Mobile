import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' />
      <Stack.Screen name='users/[id]' />
      <Stack.Screen name='leaderBoard' />
      <Stack.Screen name='powerUps' />
    </Stack>
  )
}
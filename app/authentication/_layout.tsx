import {Stack} from 'expo-router';

export default function AuthenticationLayout() {
  return (
    <Stack>
      <Stack.Screen name="username-page" options={{headerShown: false}} />
    </Stack>
  );
}

import {Stack} from 'expo-router';

export default function UserAccountLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
    </Stack>
  );
}

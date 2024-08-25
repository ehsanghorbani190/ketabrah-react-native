import {Stack} from 'expo-router';

export default function BookShelfLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
    </Stack>
  );
}

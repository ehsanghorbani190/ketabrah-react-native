import {ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect} from 'react';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/useColorScheme';
import {Provider} from 'react-redux';
import {store} from '@/core/state/store';
import {DarkTheme, LightTheme} from '@/constants/Colors';
import StackScreenHeader from '@/components/StackScreenHeader';
import {
  auth_setPassword,
  auth_setUsername,
} from '@/core/state/slices/authSlice';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Vazir: require('../assets/fonts/Vazir.ttf'),
    VazirBold: require('../assets/fonts/Vazir-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : LightTheme}>
        <Stack>
          <Stack.Screen
            name="authentication"
            options={{
              header: header_props => (
                <StackScreenHeader
                  title="ورود | ثبت‌نام"
                  resetState={() => {
                    store.dispatch(auth_setUsername(''));
                    store.dispatch(auth_setPassword(''));
                  }}
                  {...header_props}
                />
              ),
            }}
          />
          <Stack.Screen name="(tabs)" options={{headerShown: false}} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}

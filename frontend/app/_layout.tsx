import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { PropsWithChildren, useEffect } from 'react';
import 'react-native-reanimated';
import {
  ThemeProvider as RSThemeProvider,
  useTheme,
  ScreenLoadingProvider,
} from '@redshank/native';
import dayjs from "dayjs";
import utcPlugin from "dayjs/plugin/utc";
import 'dayjs/locale/es';

import { useColorScheme } from '@/hooks/useColorScheme';
import { QueryProvider } from '@/constants/react-query';

dayjs.apply(utcPlugin);
dayjs.locale('es')

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function AppProvider({ children }: PropsWithChildren) {
  const { isDark } = useTheme();

  return (
    <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      {children}
    </ThemeProvider>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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
    <RSThemeProvider
      theme={{
        theme: colorScheme ?? 'light',
      }}>
      <AppProvider>
        <QueryProvider>
          <ScreenLoadingProvider>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
          </ScreenLoadingProvider>
          <StatusBar style="auto" />
        </QueryProvider>
      </AppProvider>
    </RSThemeProvider>
  );
}

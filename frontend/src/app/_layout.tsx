import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import 'react-native-reanimated';
import {
  ThemeProvider as RSThemeProvider,
  useTheme,
  ScreenLoadingProvider,
  IconType,
} from '@redshank/native';
import dayjs from 'dayjs';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import utcPlugin from 'dayjs/plugin/utc';
import 'dayjs/locale/es';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import AntDesignIcons from '@react-native-vector-icons/ant-design';
import ZocialIcons from '@react-native-vector-icons/zocial';
import FontAwesome6Icons from '@react-native-vector-icons/fontawesome6';

import {useColorScheme} from '@/hooks/useColorScheme.ts';
import {QueryProvider} from '@/constants/react-query.tsx';
import TabsScreen from './(tabs)/_layout';
import NotFoundScreen from './+not-found';

dayjs.apply(utcPlugin);
dayjs.locale('es');

const iconsPack = new Map<IconType, any>();
iconsPack.set('material-design-icons', MaterialDesignIcons);
iconsPack.set('ant-design', AntDesignIcons);
iconsPack.set('antd', AntDesignIcons);
iconsPack.set('zocial', ZocialIcons);
iconsPack.set('font-awesome-6', FontAwesome6Icons);

function AppProvider({children}: PropsWithChildren) {
  const {isDark} = useTheme();

  return (
    <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <StatusBar barStyle={isDark ? 'dark-content' : 'light-content'} />
      {children}
    </ThemeProvider>
  );
}

const Stack = createStackNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <RSThemeProvider
      packs={iconsPack}
      theme={{
        theme: colorScheme ?? 'light',
      }}>
      <NavigationContainer>
        <AppProvider>
          <QueryProvider>
            <ScreenLoadingProvider>
              <Stack.Navigator>
                <Stack.Screen
                  name="(tabs)"
                  component={TabsScreen}
                  options={{headerShown: false}}
                />
                <Stack.Screen name="+not-found" component={NotFoundScreen} />
              </Stack.Navigator>
            </ScreenLoadingProvider>
          </QueryProvider>
        </AppProvider>
      </NavigationContainer>
    </RSThemeProvider>
  );
}

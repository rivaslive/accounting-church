import React from 'react';
import {Platform} from 'react-native';

import {HapticTab} from '@/components/HapticTab.tsx';
import TabBarBackground from '@/components/ui/TabBarBackground.tsx';
import {Colors} from '@/constants/Colors.ts';
import {useColorScheme} from '@/hooks/useColorScheme.ts';
import {Icon, MessageProvider} from '@redshank/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './';
import CollaboratorScreen from './collaborators';
import ReportScreen from './reports';
import SmallTreasuryScreen from './smallTreasury';

const Tabs = createBottomTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <MessageProvider mb={12}>
      <Tabs.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
        }}>
        <Tabs.Screen
          name="index"
          component={HomeScreen}
          options={{
            title: 'Caja',
            tabBarIcon: ({color}) => (
              <Icon size={28} name="home-outline" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="smallTreasury"
          component={SmallTreasuryScreen}
          options={{
            title: 'Caja Chica',
            tabBarIcon: ({color}) => (
              <Icon size={28} name="currency-usd" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="collaborators"
          component={CollaboratorScreen}
          options={{
            title: 'Diezmadores',
            tabBarIcon: ({color}) => (
              <Icon size={28} name="account-outline" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="reports"
          component={ReportScreen}
          options={{
            title: 'Reportes',
            tabBarIcon: ({color}) => (
              <Icon size={28} name="clipboard-minus-outline" color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </MessageProvider>
  );
}

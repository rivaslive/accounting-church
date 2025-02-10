import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MessageProvider } from '@redshank/native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <MessageProvider mb={12}>
      <Tabs
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
          options={{
            title: 'Caja',
            tabBarIcon: ({ color }) => (
              <IconSymbol
                size={28}
                name="dollarsign.bank.building"
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="smallTreasury"
          options={{
            title: 'Caja Chica',
            tabBarIcon: ({ color }) => (
              <IconSymbol
                size={28}
                name="dollarsign.ring.dashed"
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="collaborators"
          options={{
            title: 'Diezmadores',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="person.2" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="reports"
          options={{
            title: 'Reportes',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="clipboard" color={color} />
            ),
          }}
        />
      </Tabs>
    </MessageProvider>
  );
}

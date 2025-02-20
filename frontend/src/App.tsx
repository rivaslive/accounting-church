/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import RootLayout from '@/app/_layout.tsx';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <RootLayout />
    </SafeAreaProvider>
  );
}

export default App;

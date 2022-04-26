/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
} from 'react-native';


import { Basic, Scroll, Modal ,Background, Animate, List, Input, PanResponder, Storage} from './components';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={{flex : 1}}>
        {/* <Basic />   */}
        {/* <Scroll /> */}
        {/* <Modal /> */}
        {/* <Background /> */}
        {/* <Animate /> */}
        {/* <List /> */}
        {/* <Input /> */}
        {/* <PanResponder /> */}
        <Storage />
      </View>
    </SafeAreaProvider>
  );
};

export default App;

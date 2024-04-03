import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Box, Button, Text} from './src';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Box className="bg-amber-300 h-1/5" />
      <Button className="h-1/5 bg-pink-600" isDebounce />
      <Text className="text-amber-600 font-bold">hahaha</Text>
    </SafeAreaView>
  );
}

export default App;

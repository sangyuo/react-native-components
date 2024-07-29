import React from 'react';
import {SafeAreaView, ScrollView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Box, Text} from './src/components';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        <Box className="bg-dark">
          <Text className="text-dark font-bold">hahaha</Text>
        </Box>
        <Box className="bg-light">
          <Text className="text-light font-bold">hahaha</Text>
        </Box>
        <Box className="bg-primary-light bg">
          <Text className="text-primary font-bold">hahaha</Text>
        </Box>
        <Box className="bg-primary bg">
          <Text className="text-primary-dark font-bold">hahaha</Text>
        </Box>
        <Box className="bg-primary-dark bg">
          <Text className="text-primary-dark font-bold">hahaha</Text>
        </Box>
        <Box className="bg-secondary-dark bg">
          <Text className="text-secondary font-bold">hahaha</Text>
        </Box>
        <Box className="bg-secondary bg">
          <Text className="text-secondary-light font-bold">hahaha</Text>
        </Box>
        <Box className="bg-secondary-light">
          <Text className="text-secondary font-bold">hahaha</Text>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

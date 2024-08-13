import React from 'react';
import {SafeAreaView, ScrollView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Box, Button, ProgressBar, ProgressCircle} from './src/components';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [value, setValue] = React.useState(0);

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        <Box className="bg-secondary-light mb-5">
          <Button title="Progress up to 100" onPress={() => setValue(100)} />
        </Box>
        <Box className="bg-secondary-light h-10 mb-5">
          <Button title="Progress up to 25" onPress={() => setValue(25)} />
        </Box>
        <Box className="gap-2">
          <ProgressBar value={value} varian="secondary" />
        </Box>
        <Box>
          <ProgressCircle
            value={value}
            varian="primary"
            showLabel
            label={`yeu em`}
          />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

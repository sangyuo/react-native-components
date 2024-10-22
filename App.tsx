import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {Box, ButtonBox, ProgressBar, ProgressCircle} from './src/components';

function App(): React.JSX.Element {
  const [value, setValue] = React.useState(0);
  return (
    <SafeAreaView>
      <ScrollView>
        <Box className="bg-secondary-light mb-5">
          <ButtonBox title="Progress up to 100" onPress={() => setValue(100)} />
        </Box>
        <Box className="bg-secondary-light h-10 mb-5">
          <ButtonBox title="Progress up to 25" onPress={() => setValue(25)} />
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

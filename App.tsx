import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {CalendarBox} from './src/atomic/organisms/CalendarBox';

function App(): React.JSX.Element {
  const [value, setValue] = React.useState(0);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <CalendarBox />
    </SafeAreaView>
  );
}

export default App;

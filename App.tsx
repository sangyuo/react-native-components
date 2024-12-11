import React from 'react';
import {SafeAreaView} from 'react-native';
import {CalendarBox} from './src/atomic/organisms/CalendarBox';
import {formatDate} from './src/utils/date.util';

function App(): React.JSX.Element {
  const [value, setValue] = React.useState(formatDate('2024-02-02'));
  const [selectedDates, setSelectedDates] = React.useState<{[key: string]: {}}>(
    {
      '2024-11-01': {
        classBox: 'rounded-l-xl bg-primary',
        classDot: 'bg-green-400',
      },
      '2024-11-02': {classText: 'text-black'},
      '2024-11-03': {
        classText: 'text-black',
      },
      '2024-11-04': {classBox: 'rounded-r-xl bg-primary'},
    },
  );
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <CalendarBox
        initDate={value}
        selectedDates={selectedDates}
        onChangeDate={({dateString}) => {
          setSelectedDates({[dateString]: {}});
        }}
      />
    </SafeAreaView>
  );
}

export default App;

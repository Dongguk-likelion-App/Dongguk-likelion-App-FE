import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import { View } from 'react-native';
import RadioGroup from './RadioGroup';
import theme from '@styles/theme';

const RadioGroupDemo = () => {
  const [selected, setSelected] = useState(1);
  const options = ['option text 1', 'option text 2', 'option text 3'];
  return (
    <ThemeProvider theme={theme}>
      <View style={{ margin: 20 }}>
        <RadioGroup
          options={options}
          selected={selected}
          onSelect={setSelected}
        />
      </View>
    </ThemeProvider>
  );
};

storiesOf('Components/RadioGroup', module).add('기본 RadioGroup', () => (
  <RadioGroupDemo />
));

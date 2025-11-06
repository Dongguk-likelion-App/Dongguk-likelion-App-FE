import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import { View } from 'react-native';
import Checkbox from './Checkbox';
import theme from '@styles/theme';

const CheckboxDemo = () => {
  const [checked, setChecked] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <View style={{ padding: 20, gap: 16 }}>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Checkbox state="checked" />
          <Checkbox state="unchecked" />
          <Checkbox state="disabled" />
        </View>
        <View style={{ gap: 10 }}>
          <Checkbox
            state={checked ? 'checked' : 'unchecked'}
            label="option text"
            onPress={() => setChecked(!checked)}
          />
          <Checkbox state="disabled" label="option text" />
        </View>
      </View>
    </ThemeProvider>
  );
};

storiesOf('Components/Checkbox', module).add('기본 Checkbox', () => (
  <CheckboxDemo />
));

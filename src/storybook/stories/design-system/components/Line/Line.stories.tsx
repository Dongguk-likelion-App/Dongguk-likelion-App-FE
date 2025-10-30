import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import { View } from 'react-native';
import Line from './Line';
import theme from '@styles/theme';

const LineStoriesContent = () => (
  <ThemeProvider theme={theme}>
    <View style={{ margin: 20 }}>
      <Line />
      <Line height={2} width={200} color="#EB680D" style={{ marginVertical: 16 }} />
      <Line height={4} width={'80%'} color={theme.colors.Neutral.N30} style={{ marginVertical: 16 }} />
    </View>
  </ThemeProvider>
);

storiesOf('Components/Line', module).add('라인', () => <LineStoriesContent />);

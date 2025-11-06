import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import { View } from 'react-native';
import Tag from './Tag';
import theme from '@styles/theme';

const TagDemo = () => {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flexDirection: 'row', gap: 10, padding: 20 }}>
        <Tag text="Text" color="red" />
        <Tag text="Text" color="yellow" />
        <Tag text="Text" color="pink" />
        <Tag text="Text" color="green" />
      </View>
    </ThemeProvider>
  );
};

storiesOf('Components/Tag', module).add('기본 Tag', () => <TagDemo />);

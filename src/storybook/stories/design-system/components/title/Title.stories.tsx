import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import { View } from 'react-native';
import Title from './Title';
import theme from '@styles/theme';

const TitleDemo = () => {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Title
          text="title text"
          onPress={() => console.log('title clicked')}
          onMenuPress={() => console.log('menu')}
        />
      </View>
    </ThemeProvider>
  );
};

storiesOf('Components/Title', module).add('기본 Title', () => <TitleDemo />);

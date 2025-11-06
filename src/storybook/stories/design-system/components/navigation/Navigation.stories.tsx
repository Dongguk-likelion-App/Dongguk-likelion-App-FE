import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import { View } from 'react-native';
import Navigation from './Navigation';
import theme from '@styles/theme';

const NavigationDemo = () => {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Navigation
          pageName="page name"
          onBackPress={() => console.log('back')}
          onPress={() => console.log('navigation clicked')}
        />
      </View>
    </ThemeProvider>
  );
};

storiesOf('Components/Navigation', module).add('기본 Navigation', () => (
  <NavigationDemo />
));

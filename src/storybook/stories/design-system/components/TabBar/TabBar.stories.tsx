import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import { View } from 'react-native';
import TabBar from './TabBar';
import theme from '@styles/theme';

const TabBarDemo = () => {
  const [selected, setSelected] = useState(0);
  const tabs = ['Text1', 'Text2', 'Text3', 'Text4'];
  return (
    <ThemeProvider theme={theme}>
      <View style={{ margin: 20 }}>
        <TabBar tabs={tabs} selected={selected} onSelect={setSelected} />
      </View>
    </ThemeProvider>
  );
};

storiesOf('Components/TabBar', module).add('기본 TabBar', () => <TabBarDemo />);

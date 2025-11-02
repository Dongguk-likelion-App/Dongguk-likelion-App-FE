import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import { View } from 'react-native';
import FilterButton from './FilterButton';
import theme from '@styles/theme';

const FilterButtonDemo = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const filters = ['Text', 'Text2', 'Text3'];
  return (
    <ThemeProvider theme={theme}>
      <View style={{ margin: 20 }}>
        <FilterButton
          filters={filters}
          selectedIndex={selectedIdx}
          onChange={setSelectedIdx}
        />
      </View>
    </ThemeProvider>
  );
};

storiesOf('Components/FilterButton', module).add('기본 FilterButton', () => <FilterButtonDemo />);

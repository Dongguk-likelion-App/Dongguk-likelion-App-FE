import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import { View } from 'react-native';
import SearchBar from './SearchBar';
import theme from '@styles/theme';

const SearchBarDemo = () => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <View style={{ padding: 50 }}>
        {/* 기본 상태 */}
        <SearchBar
          placeholder="Search value"
          value=""
          onChange={(val) => setText(val)}
        />

        {/* 입력 상태 */}
        <View style={{ marginTop: 20 }}>
          <SearchBar
            placeholder="Search value"
            value="입력값 있음"
            onChange={(val) => setText(val)}
          />
        </View>

        {/* focus 상태 시뮬레이션 */}
        <View style={{ marginTop: 20 }}>
          <SearchBar
            placeholder="Search value"
            value={text}
            onChange={(val) => setText(val)}
          />
        </View>
      </View>
    </ThemeProvider>
  );
};

storiesOf('Components/SearchBar', module).add('기본 SearchBar', () => <SearchBarDemo />);

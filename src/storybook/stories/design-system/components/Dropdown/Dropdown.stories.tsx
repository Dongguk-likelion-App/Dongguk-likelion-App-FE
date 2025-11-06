import React, { useState } from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import { Dropdown } from '@design-system/Dropdown/Dropdown';

// 테마 데코레이터 (버튼 스토리와 동일하게)
const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider theme={theme}>
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <Story />
    </View>
  </ThemeProvider>
);

// 기본 상태
const Basic = () => {
  const [selected, setSelected] = useState('');
  return (
    <View style={{ padding: 20 }}>
      <Dropdown
        label="col name"
        placeholder="선택"
        options={['option1', 'option2', 'option3']}
        selected={selected}
        onSelect={setSelected}
      />
    </View>
  );
};

// 미리 선택된 상태
const PreSelected = () => (
  <View style={{ padding: 20 }}>
    <Dropdown
      label="col name"
      placeholder="선택"
      options={['option1', 'option2', 'option3']}
      selected="option2"
    />
  </View>
);

// 스토리북 등록
storiesOf('Components/Dropdown', module)
  .addDecorator(withTheme)
  .add('기본 (Basic)', () => <Basic />)
  .add('미리 선택된 상태 (PreSelected)', () => <PreSelected />);

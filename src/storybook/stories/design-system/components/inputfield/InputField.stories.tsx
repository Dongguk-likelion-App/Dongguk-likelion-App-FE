// components/InputField/InputField.stories.tsx
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, ScrollView, Text } from 'react-native';
import { ThemeProvider } from '@emotion/react';

import InputField from './InputField';
import theme from '@styles/theme';

const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider theme={theme}>
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: theme.colors.Neutral.WHITE,
      }}
    >
      <Story />
    </View>
  </ThemeProvider>
);

type ControlledProps = Omit<
  React.ComponentProps<typeof InputField>,
  'value' | 'onChangeText'
> & {
  initialValue?: string;
};

const ControlledInput: React.FC<ControlledProps> = ({
  initialValue = '',
  ...props
}) => {
  const [val, setVal] = useState(initialValue);
  return <InputField {...props} value={val} onChangeText={setVal} />;
};

const AllVariants = () => (
  <ScrollView>
    <Text
      style={[
        theme.typography.Head1_1,
        { marginBottom: 12, color: theme.colors.Neutral.N70 },
      ]}
    >
      Default Inputs
    </Text>

    <ControlledInput
      label="이메일"
      inputProps={{
        placeholder: 'example@email.com',
        keyboardType: 'email-address',
        autoCapitalize: 'none',
      }}
      helperText="로그인 시 사용하는 이메일을 입력하세요."
    />

    <View style={{ height: 20 }} />

    <Text
      style={[
        theme.typography.Head1_1,
        { marginBottom: 12, color: theme.colors.Neutral.N70 },
      ]}
    >
      Secure Inputs
    </Text>

    <ControlledInput
      label="비밀번호"
      variant="secure"
      inputProps={{
        placeholder: '비밀번호를 입력하세요',
        autoCapitalize: 'none',
      }}
      helperText="영문, 숫자, 특수문자를 포함해야 합니다."
    />
  </ScrollView>
);

// ✅ 스토리 등록
storiesOf('Components/InputField', module)
  .addDecorator(withTheme)
  .add('All Variants', () => <AllVariants />);

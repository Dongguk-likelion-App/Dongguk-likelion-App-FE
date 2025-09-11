// components/Button/Button.stories.tsx
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, ScrollView, Text } from 'react-native';
import { ThemeProvider } from '@emotion/react';

import Button from './Button';
import theme from '@styles/theme';

// 테마 + 여백 공통 데코레이터
const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider theme={theme}>
    <View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: theme.colors.Neutral.WHITE,
      }}
    >
      <Story />
    </View>
  </ThemeProvider>
);

// 샘플 아이콘 (PNG)
const ICON_URL =
  'https://raw.githubusercontent.com/expo/expo/main/docs/static/images/brand/logomark.png';

const SIZES = ['small', 'big'] as const;
const BUTTONS = ['one', 'two', 'three', 'four'] as const;

const Row = ({ children }: { children: React.ReactNode }) => (
  <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
    {children}
  </View>
);

/** 전체 조합(정적): abled / disabled
 *  clicked는 Pressable 특성상 '눌렀을 때'만 보이므로 아래 Interactive 스토리에서 확인
 */
const AllVariantsStatic = () => (
  <ScrollView>
    {BUTTONS.map((btnKey) => (
      <View key={btnKey} style={{ marginBottom: 32 }}>
        <Text style={[theme.typography.Body1_2, { marginBottom: 8 }]}>
          {btnKey.toUpperCase()}
        </Text>

        {/* abled */}
        <Text style={[theme.typography.Small1_2, { marginBottom: 6 }]}>
          abled
        </Text>
        <Row>
          {SIZES.map((sz) => (
            <React.Fragment key={`${btnKey}-abled-${sz}`}>
              <Button
                title={`${sz}`}
                button={btnKey as any}
                status="abled"
                size={sz as any}
              />
              {/* big일 때 아이콘 있는 버전도 같이 노출 */}
              {sz === 'big' && (
                <Button
                  title={`${sz} + icon`}
                  button={btnKey as any}
                  status="abled"
                  size="big"
                  instance={ICON_URL}
                  showIcon
                />
              )}
            </React.Fragment>
          ))}
        </Row>

        {/* disabled */}
        <Text style={[theme.typography.Small1_2, { marginVertical: 6 }]}>
          disabled
        </Text>
        <Row>
          {SIZES.map((sz) => (
            <React.Fragment key={`${btnKey}-disabled-${sz}`}>
              <Button
                title={`${sz}`}
                button={btnKey as any}
                status="disabled"
                size={sz as any}
              />
              {sz === 'big' && (
                <Button
                  title={`${sz} + icon`}
                  button={btnKey as any}
                  status="disabled"
                  size="big"
                  instance={ICON_URL}
                  showIcon
                />
              )}
            </React.Fragment>
          ))}
        </Row>
      </View>
    ))}
  </ScrollView>
);

/** 상호작용용: 실제로 눌러서(clicked) 색/테두리 변화 및 아이콘 숨김 동작 확인 */
const InteractiveExamples = () => (
  <ScrollView>
    {BUTTONS.map((btnKey) => (
      <View key={btnKey} style={{ marginBottom: 20 }}>
        <Text style={[theme.typography.Body2_2, { marginBottom: 8 }]}>
          {btnKey.toUpperCase()} (press to see "clicked")
        </Text>
        <Row>
          <Button
            title="big (no icon)"
            button={btnKey as any}
            status="abled"
            size="big"
          />
          <Button
            title="big (with icon)"
            button={btnKey as any}
            status="abled"
            size="big"
            instance={ICON_URL}
            showIcon
          />
          <Button
            title="small"
            button={btnKey as any}
            status="abled"
            size="small"
          />
        </Row>
      </View>
    ))}
  </ScrollView>
);

storiesOf('Components/Button', module)
  .addDecorator(withTheme)
  .add('All variants (static: abled/disabled)', () => <AllVariantsStatic />)
  .add('Interactive (press to see clicked)', () => <InteractiveExamples />)
  .add('Loading', () => (
    <Button title="로딩중" button="one" status="abled" size="big" loading />
  ));

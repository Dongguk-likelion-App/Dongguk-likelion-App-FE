import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import { Button, View } from 'react-native';
import ToastMessage from './ToastMessage';
import theme from '@styles/theme';

const ToastDemo = () => {
  const [visible, setVisible] = useState(false);

  const showToast = () => {
    setVisible(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Show Toast" onPress={showToast} />
        <ToastMessage
          message="default message"
          visible={visible}
          onClose={() => setVisible(false)}
        />
      </View>
    </ThemeProvider>
  );
};

storiesOf('Components/ToastMessage', module).add('ToastMessage 예시', () => (
  <ToastDemo />
));

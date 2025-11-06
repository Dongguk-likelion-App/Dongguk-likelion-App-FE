import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import { View, Button } from 'react-native';
import Popup from './Popup';
import theme from '@styles/theme';

const PopupDemo = () => {
  const [visible, setVisible] = useState(false);

  const showPopup = () => setVisible(true);
  const handleConfirm = () => {
    console.log('확인 버튼 클릭');
    setVisible(false);
  };
  const handleCancel = () => {
    console.log('취소 버튼 클릭');
    setVisible(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <Button title="Show Popup" onPress={showPopup} />

        <Popup
          visible={visible}
          mainText="main text"
          subText="sub text"
          confirmText="확인"
          cancelText="취소"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </View>
    </ThemeProvider>
  );
};

// Story 등록
storiesOf('Components/Popup', module).add('Popup', () => <PopupDemo />);

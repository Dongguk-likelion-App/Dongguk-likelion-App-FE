import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import { View } from 'react-native';
import FooterBottomBar from './Footer';
import theme from '@styles/theme';

const homeActive = require('../../../../../assets/images/home_active.png');
const home = require('../../../../../assets/images/home.png');
const usersActive = require('../../../../../assets/images/users_active.png');
const users = require('../../../../../assets/images/users.png');

const FooterBarDemo = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const items = [
    { iconActive: homeActive, iconInactive: home, label: '홈' },
    { iconActive: usersActive, iconInactive: users, label: '내 그룹' },
  ];
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <FooterBottomBar
          items={items}
          selectedIndex={selectedIdx}
          onClick={setSelectedIdx}
        />
      </View>
    </ThemeProvider>
  );
};

storiesOf('Components/Footer', module).add('FooterBottomBar', () => (
  <FooterBarDemo />
));

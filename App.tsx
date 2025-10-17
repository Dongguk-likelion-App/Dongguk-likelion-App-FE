import React from 'react';
import RootNavigator from '@src/navigation/RootNavigator';
import { ThemeProvider } from '@emotion/react';
import Toast from 'react-native-toast-message';
import theme from '@styles/theme';
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const SHOW_SB = process.env.EXPO_PUBLIC_STORYBOOK === '1';
const StorybookUIRoot = SHOW_SB ? require('./.storybook').default : null;

export default function App() {
  // 여기에 실제 파일 경로/이름 맞춰주세요
  const [fontsLoaded] = useFonts({
    'SUITE-Regular': require('./src/assets/fonts/SUITE-Regular.ttf'),
    'SUITE-Bold': require('./src/assets/fonts/SUITE-Bold.ttf'),
    'SUITE-SemiBold': require('./src/assets/fonts/SUITE-SemiBold.ttf'),
    'SUITE-ExtraBold': require('./src/assets/fonts/SUITE-ExtraBold.ttf'),
  });

  // 폰트 아직이면 간단 로더
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  // 스토리북 켰을 때
  if (SHOW_SB && StorybookUIRoot) {
    return <StorybookUIRoot />;
  }

  // 앱 UI
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <RootNavigator />
        <Toast />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

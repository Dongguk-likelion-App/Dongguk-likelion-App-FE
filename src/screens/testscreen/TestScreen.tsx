// src/screens/TestScreen.tsx
import { View, Text, Button, ScrollView, Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MotiView } from 'moti';
import { useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TestScreen() {
  const [showBox, setShowBox] = useState(false);
  const [authResult, setAuthResult] = useState<string | null>(null);

  // // react-query 테스트
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ['testAPI'],
  //   queryFn: async () => {
  //     const res = await axios.get(
  //       'https://jsonplaceholder.typicode.com/posts/1'
  //     );
  //     return res.data;
  //   },
  // });

  // Toast 메시지
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: '성공!',
      text2: '테스트용 토스트 메시지 🎉',
      position: 'top',
      topOffset: 50,
    });
  };

  // Alert 예제
  const showAlert = () => {
    Alert.alert('알림', '이건 Alert 예제입니다!');
  };

  // LocalAuthentication 테스트
  const handleBiometricAuth = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const supported =
      await LocalAuthentication.supportedAuthenticationTypesAsync();
    const enrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasHardware || !enrolled) {
      setAuthResult('생체 인식 사용 불가');
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: '생체 인증 해주세요',
      fallbackLabel: '비밀번호 사용',
    });

    setAuthResult(result.success ? '인증 성공!' : '인증 실패');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>🧪 TestScreen</Text>

        {/* Toast */}
        <Button title="Toast 메시지 보기" onPress={showToast} />
        <View style={{ height: 10 }} />

        {/* Alert */}
        <Button title="Alert 보기" onPress={showAlert} />
        <View style={{ height: 10 }} />

        {/* Moti 애니메이션 */}
        <Button title="Moti 박스 토글" onPress={() => setShowBox(!showBox)} />
        {showBox && (
          <MotiView
            from={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 500 }}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'skyblue',
              marginTop: 10,
              borderRadius: 12,
            }}
          />
        )}

        <View style={{ height: 20 }} />

        {/* Local Authentication */}
        <Button title="생체 인증 테스트" onPress={handleBiometricAuth} />
        {authResult && (
          <Text style={{ marginTop: 10 }}>결과: {authResult}</Text>
        )}

        <View style={{ height: 20 }} />

        {/* react-query + axios API 호출 */}
        {/* <Text style={{ marginTop: 10 }}>📡 API 테스트</Text>
        {isLoading && <Text>불러오는 중...</Text>}
        {error && <Text>에러 발생!</Text>}
        {data && (
          <View>
            <Text>제목: {data.title}</Text>
            <Text>내용: {data.body}</Text>
          </View>
        )} */}
      </ScrollView>
    </SafeAreaView>
  );
}

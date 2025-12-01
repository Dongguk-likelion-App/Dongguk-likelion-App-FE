import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const AccountManagementScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* 임시 확인용 제목. 최종 목표는 스크린샷과 같은 UI입니다. */}
        <Text style={styles.title}>계정 관리 화면 (준비중)</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // 배경색
  },
  container: {
    flex: 1,
    padding: 10,
    // 여기에 스크린샷의 UI 구성요소가 들어갑니다.
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  }
});

export default AccountManagementScreen;
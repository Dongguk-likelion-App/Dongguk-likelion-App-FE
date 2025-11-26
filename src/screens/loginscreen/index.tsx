import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as S from './LoginScreen.styles';
import { InputField, Button } from '@design-system/index';
import type { AuthStackParamList } from '@src/navigation/navigation.types';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView
      style={{ flex: 1, width: '100%', backgroundColor: '#FFFFFF' }}
      edges={['top', 'bottom']}
    >
      <S.Container>
        <S.TitleText>로그인</S.TitleText>
        <S.InputContainer>
          <InputField
            label="아이디 입력"
            variant="default"
            inputProps={{
              placeholder: '아이디를 입력하세요',
              keyboardType: 'email-address',
              autoCapitalize: 'none',
            }}
            value={email}
            onChangeText={setEmail}
          />
          <InputField
            label="비밀번호 입력"
            variant="secure"
            inputProps={{
              placeholder: '비밀번호를 입력하세요',
              autoCapitalize: 'none',
            }}
            value={password}
            onChangeText={setPassword}
          />
        </S.InputContainer>
        <S.ButtonWrapper>
          <S.ButtonContainer>
            <Button
              title="로그인"
              size="big"
              status="abled"
              button="one"
              onPress={() => {}}
            />
            <Button
              title="회원가입"
              size="big"
              status="abled"
              button="three"
              onPress={() => navigation.navigate('Signup')}
            />
          </S.ButtonContainer>
          <S.FindContaner>
            <S.FindText>아이디 찾기</S.FindText>
            <S.FindText>|</S.FindText>
            <S.FindText>비밀번호 찾기</S.FindText>
          </S.FindContaner>
        </S.ButtonWrapper>
      </S.Container>
    </SafeAreaView>
  );
}

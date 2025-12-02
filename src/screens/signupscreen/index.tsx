import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '@src/navigation/navigation.types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import * as S from './SignupScreen.styles';
import {
  Navigation,
  InputField,
  Button,
  ProgressBar,
  Dropdown,
  RadioGroup,
  Popup,
} from '@design-system/index';

type SignupScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Signup'
>;

export default function SignupScreen() {
  const navigation = useNavigation<SignupScreenNavigationProp>();
  const [step, setStep] = useState<1 | 2>(1);

  // Step 1 상태
  const [userId, setUserId] = useState('');
  const [userIdChecked, setUserIdChecked] = useState(false);
  const [userIdAvailable, setUserIdAvailable] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  // Step 2 상태
  const [admissionTerm, setAdmissionTerm] = useState('');
  const [track, setTrack] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [emailPrefix, setEmailPrefix] = useState('');
  const [emailDomain, setEmailDomain] = useState('');
  const [emailDomainType, setEmailDomainType] = useState<'select' | 'input'>(
    'select'
  );
  const [status, setStatus] = useState<number | null>(null);
  const [certificationImage, setCertificationImage] = useState<string | null>(
    null
  );
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);

  // 입학기수 옵션
  const admissionTerms = ['13기', '12기', '11기', '10기', '9기 이하'];

  // 트랙 옵션
  const tracks = ['기획디자인', '백엔드', '프론트엔드'];

  // 현재 신분 옵션
  const statuses = ['아기사자', '운영진', '아기사자 수료자', '운영진 수료자'];

  // 이메일 도메인 옵션
  const emailDomains = [
    'naver.com',
    'gmail.com',
    'hanmail.net',
    'dgu.ac.kr',
    '직접 입력',
  ];

  // 아이디 유효성 검사 (영문, 숫자만, 8자 이상, 30자 이하)
  const validateUserId = (id: string): boolean => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(id) && id.length >= 8 && id.length <= 30;
  };

  // 비밀번호 유효성 검사 (영어, 숫자, 특수문자 조합 8자 이상, 30자 이하)
  const validatePassword = (pwd: string): boolean => {
    const hasLetter = /[a-zA-Z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);
    return (
      hasLetter &&
      hasNumber &&
      hasSpecial &&
      pwd.length >= 8 &&
      pwd.length <= 30
    );
  };

  // 이메일 유효성 검사
  const getFullEmail = (): string => {
    if (!emailPrefix || !emailDomain) return '';
    return `${emailPrefix}@${emailDomain}`;
  };

  const validateEmail = (): boolean => {
    const fullEmail = getFullEmail();
    if (!fullEmail) return false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(fullEmail) && fullEmail.length <= 50;
  };

  // 이메일 도메인 선택 처리
  const handleEmailDomainSelect = (domain: string) => {
    if (domain === '직접 입력') {
      setEmailDomainType('input');
      setEmailDomain('');
    } else {
      setEmailDomainType('select');
      setEmailDomain(domain);
    }
  };

  // 아이디 중복확인 처리
  const handleUserIdDuplicateCheck = () => {
    // TODO: 실제 API 호출로 대체
    const isAvailable = Math.random() > 0.5;
    setUserIdAvailable(isAvailable);
    setUserIdChecked(true);
  };

  // 아이디 변경 시 중복확인 상태 초기화
  const handleUserIdChange = (text: string) => {
    setUserId(text);
    if (userIdChecked) {
      setUserIdChecked(false);
      setUserIdAvailable(null);
    }
  };

  // 이미지 업로드 처리 (실제 구현되었다고 가정)
  const handleImageUpload = () => {
    // TODO: 실제 이미지 피커 구현 (expo-image-picker 또는 react-native-image-picker)
    // 임시로 테스트용 이미지 URI 설정
    setCertificationImage('https://via.placeholder.com/400x300');
  };

  // Step 1 현재 단계 계산
  const getStep1CurrentStep = (): number => {
    const passwordMatch =
      password === passwordConfirm &&
      password.length > 0 &&
      validatePassword(password);

    if (
      userIdChecked &&
      userIdAvailable === true &&
      passwordMatch &&
      validatePassword(password)
    ) {
      return 3; // 비밀번호 확인 성공
    }
    if (
      userIdChecked &&
      userIdAvailable === true &&
      validatePassword(password) &&
      password.length > 0
    ) {
      return 2; // 비밀번호 입력 성공
    }
    if (userIdChecked && userIdAvailable === true) {
      return 1; // 아이디 중복확인 성공
    }
    return 0; // 아무것도 채워지지 않음
  };

  const step1CurrentStep = getStep1CurrentStep();
  const canProceedStep1 = step1CurrentStep === 3;

  // Step 2 현재 단계 계산
  const getStep2CurrentStep = (): number => {
    if (
      admissionTerm !== '' &&
      track !== null &&
      name.length > 0 &&
      validateEmail() &&
      status !== null &&
      certificationImage !== null
    ) {
      return 6; // 인증사진 업로드 완료
    }
    if (
      admissionTerm !== '' &&
      track !== null &&
      name.length > 0 &&
      validateEmail() &&
      status !== null
    ) {
      return 5; // 현재 신분 선택 완료
    }
    if (
      admissionTerm !== '' &&
      track !== null &&
      name.length > 0 &&
      validateEmail()
    ) {
      return 4; // 이메일 입력 완료
    }
    if (admissionTerm !== '' && track !== null && name.length > 0) {
      return 3; // 이름 입력 완료
    }
    if (admissionTerm !== '' && track !== null) {
      return 2; // 트랙 선택 완료
    }
    if (admissionTerm !== '') {
      return 1; // 입학기수 선택 완료
    }
    return 0; // 아무것도 채워지지 않음
  };

  const step2CurrentStep = getStep2CurrentStep();
  const isStep2Complete = step2CurrentStep === 6;

  // 모든 필드가 채워지면 자동으로 모달 표시 (한 번만)
  useEffect(() => {
    if (step === 2 && isStep2Complete && !showSuccessModal && !hasShownModal) {
      setShowSuccessModal(true);
      setHasShownModal(true);
    }
  }, [step, isStep2Complete, showSuccessModal, hasShownModal]);

  // Step 1 렌더링
  if (step === 1) {
    return (
      <SafeAreaView
        style={{ flex: 1, width: '100%', backgroundColor: '#FFFFFF' }}
        edges={['top', 'bottom']}
      >
        <S.SignupScreenWrapper>
          <Navigation
            pageName="회원가입"
            onBackPress={() => navigation.navigate('Login')}
          />
          <S.ProgressBarContainer>
            <ProgressBar currentStep={step1CurrentStep} totalSteps={3} />
          </S.ProgressBarContainer>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          >
            <S.Container>
              {/* 비밀번호 확인 필드 */}
              {step1CurrentStep >= 2 && (
                <S.InputSection>
                  <InputField
                    label="비밀번호 확인"
                    variant="secure"
                    inputProps={{
                      placeholder: '비밀번호를 다시 입력해주세요',
                      autoCapitalize: 'none',
                      maxLength: 30,
                    }}
                    value={passwordConfirm}
                    onChangeText={setPasswordConfirm}
                  />
                  {passwordConfirm.length > 0 && (
                    <S.MessageContainer>
                      {password === passwordConfirm &&
                      password.length > 0 &&
                      validatePassword(password) ? (
                        <S.SuccessMessage>
                          비밀번호 확인이 완료되었습니다.
                        </S.SuccessMessage>
                      ) : (
                        <S.ErrorMessage>
                          비밀번호를 다시 확인해주세요
                        </S.ErrorMessage>
                      )}
                    </S.MessageContainer>
                  )}
                </S.InputSection>
              )}

              {/* 비밀번호 입력 필드 */}
              {step1CurrentStep >= 1 && (
                <S.InputSection>
                  <InputField
                    label="비밀번호 입력"
                    variant="secure"
                    inputProps={{
                      placeholder: '비밀번호를 입력해주세요',
                      autoCapitalize: 'none',
                      maxLength: 30,
                    }}
                    value={password}
                    onChangeText={setPassword}
                    helperText={
                      password.length > 0 && !validatePassword(password)
                        ? password.length > 30
                          ? '비밀번호는 30자 이하여야 합니다.'
                          : '영어, 숫자, 특수문자 조합 8자 이상 30자 이하 입력해주세요.'
                        : undefined
                    }
                    helperTextColor={
                      password.length > 0 && !validatePassword(password)
                        ? 'error'
                        : undefined
                    }
                  />
                </S.InputSection>
              )}

              {/* 아이디 입력 섹션 */}
              <S.InputSection>
                <S.IdInputContainer>
                  <S.IdInputWrapper>
                    <InputField
                      label="아이디 입력"
                      variant="default"
                      inputProps={{
                        placeholder: '아이디를 입력해주세요',
                        autoCapitalize: 'none',
                        maxLength: 30,
                      }}
                      value={userId}
                      onChangeText={handleUserIdChange}
                      helperText={
                        !validateUserId(userId)
                          ? userId.length > 30
                            ? '아이디는 30자 이하여야 합니다.'
                            : '영문, 숫자 입력 가능 / 8자 이상 30자 이하 입력해주세요.'
                          : validateUserId(userId) && !userIdChecked
                          ? '중복확인을 해주세요'
                          : userIdChecked && userIdAvailable === true
                          ? '사용 가능한 아이디입니다.'
                          : userIdChecked && userIdAvailable === false
                          ? '중복된 아이디입니다.'
                          : undefined
                      }
                      helperTextColor={
                        !validateUserId(userId)
                          ? 'error'
                          : validateUserId(userId) && !userIdChecked
                          ? 'success'
                          : userIdChecked && userIdAvailable === true
                          ? 'success'
                          : userIdChecked && userIdAvailable === false
                          ? 'error'
                          : undefined
                      }
                    />
                  </S.IdInputWrapper>
                  <S.DuplicateCheckButton
                    onPress={handleUserIdDuplicateCheck}
                    disabled={!validateUserId(userId) || userIdChecked}
                  >
                    <S.DuplicateCheckText
                      disabled={!validateUserId(userId) || userIdChecked}
                    >
                      중복확인
                    </S.DuplicateCheckText>
                  </S.DuplicateCheckButton>
                </S.IdInputContainer>
              </S.InputSection>
            </S.Container>
          </ScrollView>

          {/* 하단 고정된 다음 버튼 */}
          <S.FixedButtonContainer>
            <Button
              title="다음"
              size="big"
              status={canProceedStep1 ? 'abled' : 'disabled'}
              button="one"
              onPress={() => {
                if (canProceedStep1) {
                  setStep(2);
                }
              }}
            />
          </S.FixedButtonContainer>
        </S.SignupScreenWrapper>
      </SafeAreaView>
    );
  }

  // Step 2 렌더링
  return (
    <SafeAreaView
      style={{ flex: 1, width: '100%', backgroundColor: '#FFFFFF' }}
      edges={['top', 'bottom']}
    >
      <S.SignupScreenWrapper>
        <Navigation pageName="회원가입" onBackPress={() => setStep(1)} />
        <S.ProgressBarContainer>
          <ProgressBar currentStep={3} totalSteps={3} />
        </S.ProgressBarContainer>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <S.Container>
            {/* 인증사진 업로드 (단계 5-6일 때 위에 표시) */}
            {step2CurrentStep >= 5 && (
              <S.InputSection>
                <S.LabelText>동국대학교 멋쟁이사자 인증사진 업로드</S.LabelText>
                <S.ImageUploadContainer>
                  {certificationImage ? (
                    <View>
                      <Image
                        source={{ uri: certificationImage }}
                        style={{
                          width: '100%',
                          height: 200,
                          borderRadius: 8,
                        }}
                        resizeMode="cover"
                      />
                      <S.RemoveImageButton
                        onPress={() => setCertificationImage(null)}
                      >
                        <S.RemoveImageText>삭제</S.RemoveImageText>
                      </S.RemoveImageButton>
                    </View>
                  ) : (
                    <S.UploadButton onPress={handleImageUpload}>
                      <S.UploadButtonText>이미지 업로드</S.UploadButtonText>
                    </S.UploadButton>
                  )}
                </S.ImageUploadContainer>
                <S.ImageHelperText>
                  동국대학교 멋쟁이사자 일이라는 것을 증명할 수 있는 인증사진을
                  업로드해주세요.
                </S.ImageHelperText>
              </S.InputSection>
            )}

            {/* 현재 신분 (단계 4-6일 때 표시) */}
            {step2CurrentStep >= 4 && (
              <S.InputSection>
                <S.LabelText>현재 신분</S.LabelText>
                <RadioGroup
                  options={statuses}
                  selected={status ?? -1}
                  onSelect={setStatus}
                  column={true}
                />
              </S.InputSection>
            )}

            {/* 이메일 (단계 3-6일 때 표시) */}
            {step2CurrentStep >= 3 && (
              <S.InputSection>
                <S.LabelText>이메일</S.LabelText>
                <S.EmailInputContainer>
                  <S.EmailPrefixWrapper>
                    <InputField
                      variant="default"
                      inputProps={{
                        placeholder: '이메일',
                        autoCapitalize: 'none',
                        keyboardType: 'email-address',
                      }}
                      value={emailPrefix}
                      onChangeText={setEmailPrefix}
                    />
                  </S.EmailPrefixWrapper>
                  <S.AtSymbol>@</S.AtSymbol>
                  <S.EmailDomainWrapper>
                    {emailDomainType === 'select' ? (
                      <Dropdown
                        placeholder="선택"
                        options={emailDomains}
                        selected={emailDomain}
                        onSelect={handleEmailDomainSelect}
                      />
                    ) : (
                      <InputField
                        variant="default"
                        inputProps={{
                          placeholder: '도메인 입력',
                          autoCapitalize: 'none',
                          keyboardType: 'email-address',
                        }}
                        value={emailDomain}
                        onChangeText={setEmailDomain}
                      />
                    )}
                  </S.EmailDomainWrapper>
                </S.EmailInputContainer>
                <S.EmailHelperText>
                  입력한 이메일로 추후 승인 여부가 전송됩니다.
                </S.EmailHelperText>
              </S.InputSection>
            )}

            {/* 이름 (단계 2-6일 때 표시) */}
            {step2CurrentStep >= 2 && (
              <S.InputSection>
                <InputField
                  label="이름"
                  variant="default"
                  inputProps={{
                    placeholder: '이름을 입력해주세요',
                    maxLength: 30,
                  }}
                  value={name}
                  onChangeText={setName}
                />
              </S.InputSection>
            )}

            {/* 트랙 (단계 1-6일 때 표시) */}
            {step2CurrentStep >= 1 && (
              <S.InputSection>
                <S.LabelText>트랙</S.LabelText>
                <RadioGroup
                  options={tracks}
                  selected={track ?? -1}
                  onSelect={setTrack}
                  column={true}
                />
              </S.InputSection>
            )}

            {/* 입학기수 */}
            <S.InputSection>
              <Dropdown
                label="입학 기수"
                placeholder="선택"
                options={admissionTerms}
                selected={admissionTerm}
                onSelect={setAdmissionTerm}
              />
            </S.InputSection>
          </S.Container>
        </ScrollView>

        {/* 하단 고정된 버튼들 */}
        <S.FixedButtonContainer>
          <S.PreviousButton>
            <Button
              title="회원가입 신청"
              size="big"
              status={isStep2Complete ? 'abled' : 'disabled'}
              button="one"
              onPress={() => {
                if (isStep2Complete) {
                  setShowSuccessModal(true);
                  setHasShownModal(true);
                }
              }}
            />
          </S.PreviousButton>
          <S.PreviousButton>
            <Button
              title="이전 페이지"
              size="big"
              status="abled"
              button="four"
              onPress={() => setStep(1)}
            />
          </S.PreviousButton>
        </S.FixedButtonContainer>

        {/* 성공 모달 */}
        <Popup
          visible={showSuccessModal}
          mainText="회원가입이 신청되었습니다."
          subText={[
            '로그인은 회원가입 승인 이후에 가능해요.',
            '이용 승인 여부에 대한 알림을',
            '이메일로 보내드릴게요.',
          ]}
          confirmText="확인"
          cancelText="취소"
          onConfirm={() => {
            setShowSuccessModal(false);
            navigation.navigate('Login');
          }}
          onCancel={() => setShowSuccessModal(false)}
        />
      </S.SignupScreenWrapper>
    </SafeAreaView>
  );
}

import { useState } from 'react';
import * as S from './InputField.styles';
import { TextInputProps } from 'react-native';
import type { Variant } from './InputField.types';
import { useTheme } from '@emotion/react';

type InputFieldProps = {
  label?: string;
  value: string;
  onChangeText: (t: string) => void;
  variant?: Variant;
  inputProps?: Omit<
    TextInputProps,
    'secureTextEntry' | 'value' | 'onChangeText'
  >;
  helperText?: string;
  helperTextColor?: 'error' | 'success';
  disabled?: boolean;
};

export default function InputField({
  label,
  value,
  onChangeText,
  variant = 'default',
  inputProps,
  helperText,
  helperTextColor = 'error',
  disabled,
}: InputFieldProps) {
  const theme = useTheme();
  const [hidden, setHidden] = useState(variant === 'secure');
  const hasValue = !!value && value.length > 0;
  const [focused, setFocused] = useState(false);
  const isSecureVariant = variant === 'secure';
  const placeholderColor = focused ? 'transparent' : theme.colors.Neutral.N30;
  return (
    <S.Wrapper>
      {!!label && <S.Label>{label}</S.Label>}
      <S.InputWrapper>
        <S.InputContainer>
          <S.Input
            masked={isSecureVariant && hidden && hasValue}
            editable={!disabled}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isSecureVariant && hidden}
            placeholderTextColor={placeholderColor}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...inputProps}
          />

          {isSecureVariant && hasValue && (
            <S.EyeButton onPress={() => setHidden((prev) => !prev)}>
              <S.EyeIcon name={hidden ? 'eye' : 'eye-off'} />
            </S.EyeButton>
          )}
        </S.InputContainer>

        {/* 헬퍼 텍스트 */}
        {helperText && (
          <S.HelperText color={helperTextColor}>{helperText}</S.HelperText>
        )}
      </S.InputWrapper>
    </S.Wrapper>
  );
}

import styled from '@emotion/native';

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.View`
  width: 314px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.Neutral.WHITE};
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  align-items: center;
`;

export const ContentWrapper = styled.View`
  align-items: center;
  gap: 32px;
`;

export const TopSection = styled.View`
  align-items: center;
  gap: 16px;
`;

export const IconWrapper = styled.View`
  width: 64px;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.Neutral.N10};
  border-radius: 32px;
  justify-content: center;
  align-items: center;
`;

export const IconInner = styled.View`
  gap: 4.8px;
`;

export const IconBar = styled.View`
  width: 7.6px;
  height: 19px;
  background-color: ${({ theme }) => theme.colors.Neutral.WHITE};
  border-radius: 3.04px;
`;

export const IconDot = styled.View`
  width: 7.6px;
  height: 7.6px;
  background-color: ${({ theme }) => theme.colors.Neutral.WHITE};
  border-radius: 9999px;
`;

export const TextWrapper = styled.View`
  width: 256px;
  align-items: center;
  gap: 8px;
`;

export const MainText = styled.Text`
  width: 256px;
  text-align: center;
  color: ${({ theme }) => theme.colors.Neutral.N70};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fontFamily.Bold};
  font-weight: 700;
  line-height: 26px;
`;

export const SubText = styled.Text`
  width: 256px;
  text-align: center;
  color: ${({ theme }) => theme.colors.Neutral.N40};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.SemiBold};
  line-height: 21px;
`;

export const InputContainer = styled.View`
  width: 256px;
  padding: 8px 16px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.Neutral.N30};
`;

export const Input = styled.TextInput`
  width: 224px;
  color: ${({ theme }) => theme.colors.Neutral.N70};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.SemiBold};
  line-height: 21px;
  padding: 0;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  gap: 16px;
`;

interface ButtonProps {
  disabled?: boolean;
}

export const ConfirmButton = styled.Pressable<ButtonProps>`
  width: 120px;
  padding: 8px 16px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.Neutral.N30 : theme.colors.Neutral.N50};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const ConfirmButtonText = styled.Text<ButtonProps>`
  text-align: center;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.Neutral.N10 : theme.colors.Neutral.WHITE};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.SemiBold};
  line-height: 21px;
`;

export const CancelButton = styled.Pressable`
  width: 120px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.Neutral.N00};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const CancelButtonText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.Neutral.N70};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.SemiBold};
  line-height: 21px;
`;

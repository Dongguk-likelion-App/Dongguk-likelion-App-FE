import styled from '@emotion/native';
import { View, Text } from 'react-native';

export const LoginScreenWrapper = styled(View)({
  flex: 1,
  width: '100%',
  backgroundColor: '#FFFFFF',
});

export const Container = styled(View)(({ theme }) => ({
  flex: 1,
  width: '100%',
  padding: theme.space.M,
  justifyContent: 'center',
  gap: theme.space.XXXL,
}));

export const TitleText = styled(Text)(({ theme }) => ({
  ...theme.typography.Head1_2,
}));

export const InputContainer = styled(View)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.space.M,
}));

export const ButtonWrapper = styled(View)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.space.L,
}));

export const ButtonContainer = styled(View)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: theme.space.S,
}));

export const FindContaner = styled(View)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.space.XS,
}));

export const FindText = styled(Text)(({ theme }) => ({
  ...theme.typography.Body2_1,
  color: theme.colors.Neutral.N70,
}));

import styled from '@emotion/native';
import { TouchableOpacity } from 'react-native';

export const Wrapper = styled.View(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.space.L,
}));

export const Option = styled(TouchableOpacity)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.space.S,
}));

export const OuterCircle = styled.View(({ theme }) => ({
  width: 14,
  height: 14,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: theme.colors.Primary.B50,
  alignItems: 'center',
  justifyContent: 'center',
}));

export const InnerCircle = styled.View(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '100%',
  backgroundColor: theme.colors.Primary.B50,
}));

export const Label = styled.Text(({ theme }) => ({
  ...theme.typography.Body1_2,
  color: theme.colors.Neutral.N70,
  alignItems: 'center',
}));

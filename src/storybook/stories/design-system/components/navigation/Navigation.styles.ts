import styled from '@emotion/native';
import { TouchableOpacity } from 'react-native';

export const NavigationWrapper = styled(TouchableOpacity)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: theme.colors.Neutral.WHITE,
  padding: theme.space.M,
  gap: theme.space.M,
  width: '100%',
}));

export const BackButton = styled(TouchableOpacity)({
  padding: 0,
});

export const PageNameText = styled.Text(({ theme }) => ({
  ...theme.typography.Head3_1,
  color: theme.colors.Neutral.N70,
  flex: 1,
}));

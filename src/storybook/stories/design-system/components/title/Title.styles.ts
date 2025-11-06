import styled from '@emotion/native';
import { TouchableOpacity } from 'react-native';

export const TitleWrapper = styled(TouchableOpacity)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: theme.colors.Neutral.WHITE,
  padding: theme.space.M,
  width: '100%',
}));

export const TitleText = styled.Text(({ theme }) => ({
  ...theme.typography.Head3_1,
  color: theme.colors.Neutral.N70,
  flex: 1,
}));

export const MenuButton = styled(TouchableOpacity)({
  padding: 0,
});

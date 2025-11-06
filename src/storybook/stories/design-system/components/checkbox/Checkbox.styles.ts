import styled from '@emotion/native';
import { TouchableOpacity, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import type { CheckboxState } from './Checkbox.types';

export const CheckboxWrapper = styled(TouchableOpacity)<{
  state: CheckboxState;
}>(({ theme, state }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.space.S,
  opacity: state === 'disabled' ? 0.7 : 1,
}));

export const CheckboxSquare = styled.View<{ state: CheckboxState }>(
  ({ theme, state }) => ({
    width: 14,
    height: 14,
    borderRadius: theme.radius.S,
    borderWidth: 1,
    borderColor:
      state === 'checked'
        ? theme.colors.Primary.B50
        : state === 'disabled'
        ? theme.colors.Neutral.N30
        : theme.colors.Neutral.N30,
    backgroundColor:
      state === 'checked'
        ? theme.colors.Primary.B50
        : state === 'disabled'
        ? theme.colors.Neutral.N10
        : theme.colors.Neutral.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.space.S,
  })
);

export const CheckboxLabel = styled.Text<{ state: CheckboxState }>(
  ({ theme, state }) => ({
    ...theme.typography.Body1_2,
    color:
      state === 'disabled'
        ? theme.colors.Neutral.N30
        : theme.colors.Neutral.N70,
  })
);

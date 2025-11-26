import styled from '@emotion/native';
import { Feather } from '@expo/vector-icons';

export const Wrapper = styled.View(({ theme }) => ({
  width: '100%',
  flexDirection: 'column',
  gap: theme.space.XS,
}));

export const Label = styled.Text(({ theme }) => ({
  ...theme.typography.Body1_2,
  color: theme.colors.Neutral.N70,
}));

export const InputWrapper = styled.View(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.space.XS,
}));

export const InputContainer = styled.View(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderBottomWidth: 2,
  borderBottomColor: theme.colors.Neutral.N30,
  paddingHorizontal: theme.space.XS,
  paddingVertical: theme.space.S,
}));

export const Input = styled.TextInput<{ masked?: boolean }>(
  ({ theme, masked }) => ({
    ...theme.typography.Body1_2,
    color: theme.colors.Neutral.N70,
    flex: 1,
    letterSpacing: masked ? 4 : 0,
    '::placeholder': {
      color: theme.colors.Neutral.N30,
    },
  })
);

export const EyeButton = styled.TouchableOpacity({
  padding: 2.25,
});

export const EyeIcon = styled(Feather)(({ theme }) => ({
  color: theme.colors.Neutral.N70,
  width: 19.5,
  height: 19.5,
  fontSize: 19.5,
}));

export const HelperText = styled.Text<{ color?: 'error' | 'success' }>(
  ({ theme, color = 'error' }) => ({
    ...theme.typography.Body2_2,
    color:
      color === 'success' ? theme.colors.Warning.G30 : theme.colors.Warning.R30,
  })
);

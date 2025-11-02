import styled from '@emotion/native';

export const ToastWrapper = styled.View(({ theme }) => ({
  width: '100%',
  minWidth: 300,
  backgroundColor: theme.colors.Neutral.N50,
  borderRadius: 12,
  paddingVertical: theme.space.SM,
  paddingHorizontal: theme.space.M,

  opacity: 0.9,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const ToastText = styled.Text(({ theme }) => ({
  ...theme.typography.Body2_1,
  color: theme.colors.Neutral.WHITE,
  textAlign: 'center',
}));

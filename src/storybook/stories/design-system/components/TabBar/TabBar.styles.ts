import styled from '@emotion/native';

export const BarWrapper = styled.View(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'flex-end',
  gap: theme.space.L,
}));

export const TabText = styled.Text<{ active: boolean }>(
  ({ theme, active }) => ({
    ...theme.typography.Body1_2,
    color: active ? theme.colors.Primary.B60 : theme.colors.Neutral.N40,
    paddingVertical: theme.space.S,
  })
);

export const Underline = styled.View(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  height: 2,
  backgroundColor: theme.colors.Primary.B60,
  borderRadius: 1,
  left: 0,
  right: 0,
  zIndex: 100,
}));

export const BarLine = styled.View(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: 2,
  backgroundColor: theme.colors.Neutral.N40,
}));

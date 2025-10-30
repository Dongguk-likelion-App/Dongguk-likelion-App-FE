import styled from '@emotion/native';

export const FooterBarWrapper = styled.View(({ theme }) => ({
  height: 74,
  flexDirection: 'row',
  backgroundColor: theme.colors.Neutral.WHITE,
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const FooterLabel = styled.Text<{ active: boolean }>(
  ({ theme, active }) => ({
    ...theme.typography.Small1_1,
    color: active ? theme.colors.Primary.B60 : theme.colors.Neutral.N30,
    textAlign: 'center',
  })
);

export const FooterItem = styled.TouchableOpacity(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}));

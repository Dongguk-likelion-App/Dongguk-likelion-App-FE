import styled from '@emotion/native';

export const FilterButtonWrapper = styled.View(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.space.M,
}));

export const FilterBtn = styled.TouchableOpacity<{ active: boolean }>(
  ({ theme, active }) => ({
    backgroundColor: active
      ? theme.colors.Primary.B50
      : theme.colors.Neutral.N00,
    padding: theme.space.S,
    borderRadius: theme.radius.M,
  })
);

export const FilterBtnText = styled.Text<{ active: boolean }>(
  ({ theme, active }) => ({
    ...theme.typography.Small1_1,
    color: active ? theme.colors.Neutral.WHITE : theme.colors.Neutral.N40,
  })
);

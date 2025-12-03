import styled from '@emotion/native';

interface ChipProps {
  selected: boolean;
}

export const Chip = styled.Pressable<ChipProps>`
  padding: 8px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.Primary.B50 : theme.colors.Neutral.N00};
  border-radius: 8px;
  ${({ selected, theme }) =>
    selected
      ? `border: 1.5px solid ${theme.colors.Primary.B50};`
      : 'border: none;'}
  justify-content: center;
  align-items: center;
`;

export const ChipText = styled.Text<ChipProps>`
  color: ${({ theme, selected }) =>
    selected ? theme.colors.Neutral.WHITE : theme.colors.Neutral.N40};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.SemiBold};
  line-height: 18px;
`;

export const ChipGroupWrapper = styled.View`
  margin-top: 16px;
  width: 100%;
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

import styled from '@emotion/native';

export const Container = styled.View`
  width: 100%;
  padding: 8px 16px;
`;

export const Card = styled.View`
  width: 100%;
  padding: 16px 0;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.Neutral.N10};
  gap: 16px;
`;

export const TopSection = styled.View`
  padding: 0 16px;
  gap: 8px;
`;

export const NameEmailRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const NameText = styled.Text`
  color: ${({ theme }) => theme.colors.Neutral.N70};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.semibold};
  line-height: 21px;
`;

export const EmailText = styled.Text`
  color: ${({ theme }) => theme.colors.Neutral.N70};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.semibold};
  line-height: 21px;
`;

export const TagsRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

interface TagProps {
  color: 'orange' | 'yellow' | 'green';
}

export const Tag = styled.View<TagProps>`
  padding: 4px 8px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, color }) => {
    switch (color) {
      case 'orange':
        return theme.colors.Primary.B10;
      case 'yellow':
        return theme.colors.Warning.W00;
      case 'green':
        return theme.colors.Warning.G00;
      default:
        return theme.colors.Neutral.N00;
    }
  }};
`;

export const TagText = styled.Text<TagProps>`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.semibold};
  line-height: 18px;
  color: ${({ theme, color }) => {
    switch (color) {
      case 'orange':
        return theme.colors.Primary.B60;
      case 'yellow':
        return theme.colors.Warning.W30;
      case 'green':
        return theme.colors.Warning.G30;
      default:
        return theme.colors.Neutral.N70;
    }
  }};
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.Neutral.N10};
`;

export const MiddleSection = styled.View`
  gap: 8px;
`;

export const TimeRow = styled.View`
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.Neutral.N70};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  line-height: 18px;
`;

export const TimeText = styled.Text`
  color: ${({ theme }) => theme.colors.Neutral.N70};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.semibold};
  line-height: 18px;
`;

export const ImageSection = styled.View`
  padding: 0 16px;
  gap: 8px;
`;

export const VerificationImage = styled.Image`
  width: 216px;
  height: 124.47px;
  border-radius: 8px;
`;

export const BottomSection = styled.View`
  padding: 0 16px;
`;

export const ButtonsRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ApproveButton = styled.Pressable`
  width: 84px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.Neutral.N50};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const ApproveButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.Neutral.WHITE};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.semibold};
  line-height: 21px;
`;

export const RejectButton = styled.Pressable`
  width: 84px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.Neutral.N00};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const RejectButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.Neutral.N70};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.semibold};
  line-height: 21px;
`;

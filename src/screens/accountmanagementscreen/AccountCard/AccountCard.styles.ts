import styled from '@emotion/native';

export const Container = styled.View`
  width: 100%;
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
`;

export const CheckboxWrapper = styled.View`
  margin-right: 12px;
  padding-top: 4px;
  justify-content: center;
`;

export const Card = styled.View`
  flex: 1;
  padding: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.Neutral.N10};
  background-color: #ffffff;
  gap: 12px;
`;

export const NameEmailRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
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
  flex-wrap: wrap;
`;